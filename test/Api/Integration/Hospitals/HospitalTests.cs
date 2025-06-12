using Microsoft.Extensions.DependencyInjection;
using Trio.HospitalManagement.Api.Tests.Common;
using Trio.HospitalManagement.Data.Mssql;
using Xunit.Abstractions;

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

        var workflowTemplatesUrl = "workflow-templates";

        // workflow template

        //var workflowTemplateData = new CreateWorkflowTemplate { Name = "Requisition", Description = "Description for Requisition" };
        //var workflowTemplateResult = await client.Post<Contracts.Workflows.WorkflowTemplate>(workflowTemplatesUrl, workflowTemplateData);
        //var workflowTemplate = workflowTemplateResult.Response.Data;

        //TestOutput.WriteLine(workflowTemplateResult.Content);
    }
}
