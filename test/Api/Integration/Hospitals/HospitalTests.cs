using Microsoft.Extensions.DependencyInjection;
using Trio.HospitalManagement.Api.Tests.Common;
using Trio.HospitalManagement.Contracts.Commands;
using Trio.HospitalManagement.Contracts.Dtos;
using Trio.HospitalManagement.Data.Mssql;
using Xunit.Abstractions;
using Trio.HospitalManagement.Api.Tests.Common.Extensions;
using Shouldly;
using Microsoft.Extensions.Hosting;
using Microsoft.EntityFrameworkCore.Query.SqlExpressions;

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

        // create
        var createHospitalRequest = new CreateHospitalRequest { Name = "Test Hospital" };
        var createHospitalResult = await client.Post<HospitalDto>(hospitalsUrl, createHospitalRequest);
        var newHospital = createHospitalResult.Response.Data;

        newHospital.ShouldNotBeNull();
        newHospital.Name.ShouldBe(createHospitalRequest.Name);

        // getall
        var hospitalsResult = await client.Get<List<HospitalDto>>(hospitalsUrl);
        var hospitals = hospitalsResult.Response.Data;

        newHospital.ShouldNotBeNull();
        hospitals.ShouldNotBeEmpty();
        hospitals.Count.ShouldBe(1);
        hospitals[0].Id.ShouldBe(newHospital.Id);
        hospitals[0].Name.ShouldBe(newHospital.Name);

        var singleHospitalUrl = $"{hospitalsUrl}/{newHospital.Id}";

        // get
        var hospitalResult = await client.Get<HospitalDto>(singleHospitalUrl);
        var hospital = hospitalResult.Response.Data;

        hospital.ShouldNotBeNull();
        hospital.Id.ShouldBe(newHospital.Id);
        hospital.Name.ShouldBe(newHospital.Name);

        // update
        var updateHospitalRequest = new UpdateHospitalRequest { Id = hospital.Id, Data = new HospitalDto { Id = hospital.Id, Name = "New Name" } };
        var updateHospitalResult = await client.Put<HospitalDto>(singleHospitalUrl, updateHospitalRequest);
        var updatedHospital = updateHospitalResult.Response.Data;

        updatedHospital.ShouldNotBeNull();
        updatedHospital.Name.ShouldBe(updateHospitalRequest.Data.Name);

        // delete
        var deleteHospitalResult = await client.Delete<bool>(singleHospitalUrl);
        var deletionResult = deleteHospitalResult.Response.Data;

        deletionResult.ShouldBe(true);

        //TestOutput.WriteLine(createHospitalResult.Content);
    }
}
