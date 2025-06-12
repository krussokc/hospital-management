using Microsoft.Extensions.DependencyInjection;
using Trio.HospitalManagement.Api.Tests.Common;
using Trio.HospitalManagement.Api.Tests.Common.Extensions;
using Trio.HospitalManagement.Data.Mssql;
using Xunit.Abstractions;

namespace Trio.HospitalManagement.Api.Tests.Integration.Workflows;

public class SettingTests : WebApplicationTestBase<HospitalDbContext>
{
    public SettingTests(ITestOutputHelper testOutput) : base(testOutput) { }

    [Fact]
    public async void Build()
    {
        var client = await CreateClient();

        using var scope = _application.Services.CreateScope();

        var context = scope.ServiceProvider.GetRequiredService<HospitalDbContext>();

        var url = $"settings";

        var result = await client.Get<string>(url);
    }
}
