using Trio.HospitalManagement.Api.Endpoints;

namespace Trio.HospitalManagement.Api.Extensions;

public static class SetupExtensions
{
    public static IEndpointRouteBuilder RegisterHospitalManagementEndpoints(this IEndpointRouteBuilder app)
    {
        app.RegisterHospitalEndpoints();

        return app;
    }
}
