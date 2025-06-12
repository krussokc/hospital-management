using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Trio.HospitalManagement.Data.Mssql;
using Trio.HospitalManagement.Domain.Hospitals;

namespace Trio.HospitalManagement.Infrastructure.Extensions;

public static class SetupExtensions
{
    public static IServiceCollection AddHospitalManagementInfrastructure(this IServiceCollection services, Action<DbContextOptionsBuilder>? optionsAction = null)
    {
        //services.AddScoped<IAzureSqlTokenProvider, AzureSqlTokenProvider>();
        //services.AddScoped<TokenInterceptor>();

        services.AddDbContext<HospitalDbContext>((serviceProvider, options) =>
        {
            optionsAction?.Invoke(options);

            //    var tokenInterceptor = serviceProvider.GetService<TokenInterceptor>();
            //    if (tokenInterceptor != null)
            //    {
            //        options.AddInterceptors(tokenInterceptor);
            //    }

        });

        services.AddScoped<IHospitalRepository, HospitalRepository>();

        return services;
    }

}
