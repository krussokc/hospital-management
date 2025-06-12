using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.AspNetCore.TestHost;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Trio.HospitalManagement.Api.Tests.Common.Extensions;

namespace Trio.HospitalManagement.Api.Tests.Common;

public class TestApplicationFactory<TProgram, TContext> : WebApplicationFactory<TProgram>
    where TProgram : class
    where TContext : DbContext
{
    private readonly string _connectionString = "Test::InMemory";
    private readonly Dictionary<string, string> _userClaims = new();

    public void SetUserClaims(Dictionary<string, string> claims)
    {
        _userClaims.Clear();

        foreach (var claim in claims)
        {
            _userClaims[claim.Key] = claim.Value;
        }
    }

    protected override void ConfigureWebHost(IWebHostBuilder builder)
    {
        builder.ConfigureServices(services =>
        {
            services.AddLogging(options =>
            {
                options.ClearProviders();
                options.AddDebug();
            });

            services.RemoveDbContext<TContext>();

            services.AddDbContext<TContext>(options =>
            {
                options.UseInMemoryDatabase(_connectionString);
            });

            services.EnsureDbCreated<TContext>();

            services.ConfigureHttpJsonOptions(options =>
            {
                options.SerializerOptions.PropertyNameCaseInsensitive = true;
                options.SerializerOptions.WriteIndented = true;
            });
        });

        builder.ConfigureTestServices(services =>
        {
            services.AddAuthentication("Test")
                .AddScheme<AuthenticationSchemeOptions, TestAuthenticationHandler>("Test", options => { });

            services.AddSingleton(_userClaims);
        });

        builder.UseEnvironment("Development");

        base.ConfigureWebHost(builder);
    }

    public void Initialize()
    {
    }

    public new void Dispose()
    {
        base.Dispose();
    }
}
