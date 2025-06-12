using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.Extensions.Configuration;
using System.Reflection;
using Trio.Domain;
using Trio.Domain.Events;

namespace Trio.Data;

public abstract class BaseDbContext<TContext> : DbContext, IDesignTimeDbContextFactory<TContext> where TContext : BaseDbContext<TContext>
{
    private readonly IDispatcher? _dispatcher;

    public BaseDbContext() { }

    public BaseDbContext(DbContextOptions<TContext> options, IDispatcher? dispatcher = null) : base(options)
    {
        _dispatcher = dispatcher;
    }

    public TContext CreateDbContext(string[] args)
    {
        //IConfigurationRoot configuration = new ConfigurationBuilder()
        //    .SetBasePath(AppDomain.CurrentDomain.BaseDirectory)
        //    .AddJsonFile("data.design.json")
        //    .Build();

        var builder = new DbContextOptionsBuilder<TContext>();

        var assemblyName = Assembly.GetAssembly(typeof(TContext))?.GetName().Name;
        //var databaseName = assemblyName.Replace(".Data", string.Empty);

        //var localConnectionString = configuration.GetConnectionString(nameof(DbContext));
        //localConnectionString = localConnectionString.Replace("{databaseName}", $"{databaseName}.Design");

        const string designTimeConnection = "Server=(localdb)\\mssqllocaldb;Database=DesignTimeDb;Trusted_Connection=True;";

        builder.UseSqlServer(designTimeConnection, options =>
        {
            options.MigrationsAssembly(assemblyName);
            options.MigrationsHistoryTable(HistoryRepository.DefaultTableName);
        });

        Type derivedType = typeof(TContext);

        return (TContext)Activator.CreateInstance(derivedType, builder.Options, null)!;
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        var assembly = Assembly.GetAssembly(typeof(TContext));

        if (assembly != null)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(assembly);
        }
        else
            throw new NullReferenceException(GetType().FullName);
    }

    public override async Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
    {
        var entitiesWithEvents = new List<IAggregateRoot>();

        foreach (var entry in ChangeTracker.Entries<Entity>())
        {
            if (entry.State == EntityState.Modified)
            {
                entry.Entity.RefreshDateUpdated();
            }

            if (entry.Entity is IAggregateRoot entityWithEvents && entityWithEvents.Events.Any())
            {
                entitiesWithEvents.Add(entityWithEvents);
            }
        }

        int result = await base.SaveChangesAsync(cancellationToken).ConfigureAwait(false);

        if (_dispatcher != null && entitiesWithEvents.Count > 0)
        {
            await _dispatcher.DispatchAndClearEvents(entitiesWithEvents).ConfigureAwait(false);
        }

        DetachEntities();

        return result;
    }

    public void DetachEntities()
    {
        var changedEntriesCopy = ChangeTracker.Entries().ToList();

        foreach (EntityEntry entry in changedEntriesCopy)
        {
            entry.State = EntityState.Detached;
        }
    }
}
