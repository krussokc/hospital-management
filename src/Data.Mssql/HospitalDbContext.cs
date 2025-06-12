using Microsoft.EntityFrameworkCore;
using Trio.Data;
using Trio.Domain.Events;
using Trio.HospitalManagement.Domain.Hospitals;

namespace Trio.HospitalManagement.Data.Mssql;

public class HospitalDbContext : BaseDbContext<HospitalDbContext>
{
    public HospitalDbContext() { }

    public HospitalDbContext(DbContextOptions<HospitalDbContext> options, IDispatcher? dispatcher = null) : base(options, dispatcher) { }

    public DbSet<Hospital> Hospitals { get; set; }
}
