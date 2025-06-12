using Microsoft.AspNetCore.Authentication;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.Identity.Web;
using System.Security.Claims;
using System.Text.Encodings.Web;

namespace Trio.HospitalManagement.Api.Tests.Common;

public class TestAuthenticationHandler : AuthenticationHandler<AuthenticationSchemeOptions>
{
    private readonly Dictionary<string, string> _userClaims;

    public TestAuthenticationHandler(
        IOptionsMonitor<AuthenticationSchemeOptions> options,
        ILoggerFactory logger,
        UrlEncoder encoder,
        ISystemClock clock,
        Dictionary<string, string> userClaims)
        : base(options, logger, encoder, clock)
    {
        _userClaims = userClaims;
    }

    protected override Task<AuthenticateResult> HandleAuthenticateAsync()
    {
        var claims = new List<Claim>();

        claims.Add(new Claim(ClaimConstants.ObjectId, "E6B9548F-A04F-4084-973E-8F9BD8A4EEA6"));
        claims.Add(new Claim(ClaimConstants.Name, "Test User"));
        claims.Add(new Claim(ClaimTypes.Email, "test@test.com"));

        var identity = new ClaimsIdentity(claims, "Test");
        var principal = new ClaimsPrincipal(identity);
        var ticket = new AuthenticationTicket(principal, "Test");

        return Task.FromResult(AuthenticateResult.Success(ticket));
        //return Task.FromResult(AuthenticateResult.Fail("Not authenticated for test"));
    }
}
