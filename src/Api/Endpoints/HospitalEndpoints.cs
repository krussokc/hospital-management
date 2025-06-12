using Azure;
using Microsoft.AspNetCore.Mvc;
using Trio.HospitalManagement.Contracts.Commands;
using Trio.HospitalManagement.Contracts.Dtos;
using Trio.HospitalManagement.Contracts.Queries;

namespace Trio.HospitalManagement.Api.Endpoints;

public static class HospitalEndpoints
{
    private const string UrlResourceName = "hospitals";
    public static IEndpointRouteBuilder RegisterHospitalEndpoints(this IEndpointRouteBuilder app)
    {
        app.MapGroup(UrlResourceName).MapHospitalRoutes(); //.RequireAuthorization();

        return app;
    }

    public static RouteGroupBuilder MapHospitalRoutes(this RouteGroupBuilder endpoints)
    {
        endpoints.MapPost(string.Empty, async ([FromBody] CreateHospitalRequest request, IRequestDispatcher dispatcher, CancellationToken cancellationToken) =>
        {
            var result = await dispatcher.Send(request, cancellationToken);

            return Results.Created($"/{UrlResourceName}/{result.Data.Id}", result);

        }).Produces<Response<HospitalDto>>(StatusCodes.Status201Created);


        endpoints.MapGet(string.Empty, async ([AsParameters] GetHospitalsRequest request, IRequestDispatcher dispatcher, CancellationToken cancellationToken) =>
        {
            var result = await dispatcher.Send(request ?? new GetHospitalsRequest(), cancellationToken);

            return Results.Ok(result);

        }).Produces<Response<List<HospitalDto>>>(StatusCodes.Status200OK);

        endpoints.MapGet("{id:guid}", async (Guid id, IRequestDispatcher dispatcher, CancellationToken cancellationToken) =>
        {
            var request = new GetHospitalRequest { Id = id };

            var result = await dispatcher.Send(request, cancellationToken);

            return Results.Ok(result);

        }).Produces<Response<HospitalDto>>(StatusCodes.Status200OK);

        endpoints.MapPut("{id:guid}", async (Guid id, [FromBody] UpdateHospitalRequest request, IRequestDispatcher dispatcher, CancellationToken cancellationToken) =>
        {
            var result = await dispatcher.Send(request, cancellationToken);

            return Results.Ok(result);

        }).Produces<Response<HospitalDto>>(StatusCodes.Status200OK);

        endpoints.MapDelete("{id:guid}", async (Guid id, IRequestDispatcher dispatcher, CancellationToken cancellationToken) =>
        {
            var request = new DeleteHospitalRequest { Id = id };

            var result = await dispatcher.Send(request, cancellationToken);

            return Results.Ok(result);

        }).Produces<Response<bool>>(StatusCodes.Status200OK);

        return endpoints.WithTags("Hospitals");
    }
}
