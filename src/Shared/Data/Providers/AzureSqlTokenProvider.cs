using Azure.Core;
using Azure.Identity;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Options;
using Trio.Data.Settings;

namespace Trio.Data.Providers;

public interface IAzureSqlTokenProvider
{
    Task<(string AccessToken, DateTimeOffset ExpiresOn)> GetAccessTokenAsync(CancellationToken cancellationToken = default);
    (string AccessToken, DateTimeOffset ExpiresOn) GetAccessToken();
    void ClearCachedToken();

}

public class AzureSqlTokenProvider : IAzureSqlTokenProvider
{
    private const string _cacheKey = nameof(AzureSqlTokenProvider);
    private readonly IMemoryCache _cache;
    private readonly ManagedIdentitySettings _settings;
    private static readonly string[] _azureSqlScopes = new[] { "https://database.windows.net//.default" };

    public AzureSqlTokenProvider(IMemoryCache cache, IOptions<ManagedIdentitySettings> options)
    {
        _cache = cache;
        _settings = options.Value;
    }

    private TokenCredential GetCredential()
    {
        if (!string.IsNullOrEmpty(_settings.VisualStudioUsername))
        {
            var options = new InteractiveBrowserCredentialOptions
            {
                //LoginHint = _settings.VisualStudioUsername
            };

            if (!string.IsNullOrEmpty(_settings.VisualStudioTenantId))
            {
                options.TenantId = _settings.VisualStudioTenantId;
            }

            return new InteractiveBrowserCredential(options);
        }
        else if (!string.IsNullOrEmpty(_settings.UserAssignedClientId))
        {
            return new DefaultAzureCredential(new DefaultAzureCredentialOptions
            {
                ManagedIdentityClientId = _settings.UserAssignedClientId
            });
        }

        return new DefaultAzureCredential();
    }

    public async Task<(string AccessToken, DateTimeOffset ExpiresOn)> GetAccessTokenAsync(CancellationToken cancellationToken = default)
    {
        return await _cache.GetOrCreateAsync(_cacheKey, async cacheEntry =>
        {
            var tokenRequestContext = new TokenRequestContext(_azureSqlScopes);
            var credential = GetCredential();
            var token = await credential.GetTokenAsync(tokenRequestContext, cancellationToken);

            if (!string.IsNullOrEmpty(token.Token))
            {
                cacheEntry.SetAbsoluteExpiration(token.ExpiresOn.AddMinutes(-10));
            }

            return (token.Token, token.ExpiresOn);
        });
    }

    public (string AccessToken, DateTimeOffset ExpiresOn) GetAccessToken()
    {
        return _cache.GetOrCreate(_cacheKey, cacheEntry =>
        {
            var tokenRequestContext = new TokenRequestContext(_azureSqlScopes);
            var credential = GetCredential();
            var token = credential.GetToken(tokenRequestContext, default);

            if (!string.IsNullOrEmpty(token.Token))
            {
                cacheEntry.SetAbsoluteExpiration(token.ExpiresOn.AddMinutes(-10));
            }

            return (token.Token, token.ExpiresOn);
        });
    }

    public void ClearCachedToken()
    {
        _cache.Remove(_cacheKey);
    }
}
