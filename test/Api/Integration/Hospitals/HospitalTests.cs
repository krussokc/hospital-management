using Microsoft.Extensions.DependencyInjection;
using Trio.HospitalManagement.Api.Tests.Common;
using Trio.HospitalManagement.Contracts.Commands;
using Trio.HospitalManagement.Contracts.Dtos;
using Trio.HospitalManagement.Data.Mssql;
using Xunit.Abstractions;
using Trio.HospitalManagement.Api.Tests.Common.Extensions;
using Shouldly;

namespace Trio.HospitalManagement.Api.Tests.Integration.Workflows;

public class HospitalTests : WebApplicationTestBase<HospitalDbContext>
{
    public HospitalTests(ITestOutputHelper testOutput) : base(testOutput) { }

    [Fact]
    public async void Build()
    {
        var client = await CreateClient();

        using var scope = _application.Services.CreateScope();

        var context = scope.ServiceProvider.GetRequiredService<HospitalDbContext>();

        var hospitalsUrl = "hospitals";

        var createHospitalRequest = new CreateHospitalRequest { Name = "Test Hospital" };
        var createHospitalResult = await client.Post<HospitalDto>(hospitalsUrl, createHospitalRequest);
        var hospital = createHospitalResult.Response.Data;

        hospital.ShouldNotBeNull();

        //TestOutput.WriteLine(createHospitalResult.Content);
    }
}
