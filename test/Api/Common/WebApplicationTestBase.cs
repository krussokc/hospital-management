using Microsoft.EntityFrameworkCore;
using System.Net.Http.Headers;
using System.Security.Claims;
using Xunit.Abstractions;

namespace Trio.HospitalManagement.Api.Tests.Common;

public abstract class WebApplicationTestBase<TContext> : IDisposable
    where TContext : DbContext
{
    protected TestApplicationFactory<Program, TContext> _application = new();

    protected readonly ITestOutputHelper TestOutput;

    public WebApplicationTestBase(ITestOutputHelper output)
    {
        TestOutput = output;
    }

    public void Dispose()
    {
        _application.Dispose();
    }

    protected async Task<HttpClient> CreateClient(int maxRetryAttempts = 4, int millisecondsDelay = 10)
    {
        _application.Server.PreserveExecutionContext = true;

        HttpClient client = _application.CreateClient();

        _application.SetUserClaims(new Dictionary<string, string>
        {
            { ClaimTypes.Name, "Test User" },
        });

        client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", "token");


        for (int attempt = 1; attempt <= maxRetryAttempts; attempt++)
        {
            try
            {
                var result = await client.GetAsync("/healthz");

                result.EnsureSuccessStatusCode();

                return client;
            }
            catch (HttpRequestException e)
            {
                // exponential backoff waiting retry logic
                await Task.Delay(TimeSpan.FromMilliseconds(Math.Pow(millisecondsDelay, attempt)));
            }
        }

        throw new Exception($"Request to /healthz failed after {maxRetryAttempts} attempts!");
    }
}
