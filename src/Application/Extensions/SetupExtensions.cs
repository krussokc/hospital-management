using Microsoft.Extensions.DependencyInjection;
using Trio.HospitalManagement.Application.Hospitals.Commands;
using Trio.HospitalManagement.Application.Hospitals.Queries;
using Trio.HospitalManagement.Contracts.Commands;
using Trio.HospitalManagement.Contracts.Dtos;
using Trio.HospitalManagement.Contracts.Queries;

namespace Trio.HospitalManagement.Application.Extensions;

public static class SetupExtensions
{
    public static IServiceCollection AddHospitalManagementApplicationServices(this IServiceCollection services)
    {
        //services.AddScoped<IDispatcher, Dispatcher>();
        //services.AddScoped<IAzureSearchService, AzureSearchService>();
        //services.AddScoped<IUserService, UserService>();

        //services.AddMediatR(configuration =>
        //{
        //    configuration.RegisterServicesFromAssembly(typeof(SetupExtensions).Assembly);
        //});

        services.AddScoped<IRequestDispatcher, RequestDispatcher>();

        services.AddScoped<ICommandHandler<CreateHospitalRequest, HospitalDto>, CreateHospitalCommand>();
        services.AddScoped<IQueryHandler<GetHospitalRequest, HospitalDto>, GetHospitalQuery>();
        services.AddScoped<IQueryHandler<GetHospitalsRequest, List<HospitalDto>>, GetHospitalsQuery>();
        services.AddScoped<ICommandHandler<UpdateHospitalRequest, HospitalDto>, UpdateHospitalCommand>();
        services.AddScoped<ICommandHandler<DeleteHospitalRequest, bool>, DeleteHospitalCommand>();

        return services;
    }
}
