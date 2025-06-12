using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Trio.Data.Enums;

namespace Trio.Data.Extensions;

public static class SetupExtensions
{
    public static IServiceCollection AddDatabase<TContext>(this IServiceCollection services, IConfiguration configuration, DatabaseType databaseType) where TContext : DbContext
    {
        var contextName = typeof(TContext).Name;

        var connectionString = configuration.GetConnectionString(contextName);

        services.AddDbContext<TContext>(options =>
        {
            options.BuildDatabaseOptions<TContext>(databaseType, connectionString!);
        });

        services.AddScoped<DbContextInitializer<TContext>>();

        return services;
    }

    public static DbContextOptionsBuilder BuildDatabaseOptions<TContext>(this DbContextOptionsBuilder builder, DatabaseType databaseType, string connectionString)
    {
        switch (databaseType)
        {
            case DatabaseType.InMemory:
                builder.UseInMemoryDatabase(databaseName: nameof(TContext));
                break;
            case DatabaseType.Postgres:
                builder.UseNpgsql(connectionString, options =>
                {
                    options.MigrationsAssembly(typeof(TContext).Assembly.FullName);
                });
                break;
            case DatabaseType.Sqlite:
                builder.UseSqlite(connectionString, options =>
                {
                    options.MigrationsAssembly(typeof(TContext).Assembly.FullName);
                });
                break;
            case DatabaseType.SqlServer:
                builder.UseSqlServer(connectionString, options =>
                {
                    options.MigrationsAssembly(typeof(TContext).Assembly.FullName);
                });
                break;
            default:
                throw new ArgumentOutOfRangeException(nameof(DatabaseType), "Unsupported database type.");
        }

        return builder;
    }

    public static IApplicationBuilder UseDatabase<TContext>(this IApplicationBuilder app) where TContext : DbContext
    {
        var initializer = app.ApplicationServices.GetService<DbContextInitializer<TContext>>();

        if (initializer != null)
        {
            initializer.Initialize();
        }

        return app;
    }
}
