using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Trio.Data.Configuration;
using Trio.HospitalManagement.Domain.Hospitals;

namespace Trio.HospitalManagement.Data.Mssql.Configuration;

internal class HospitalConfig : AggregateRootConfig<Hospital>
{
    public override void Configure(EntityTypeBuilder<Hospital> builder)
    {
        base.Configure(builder);

        builder.ToTable("Hospitals");

        builder.HasIndex(x => x.Name);
        builder.HasIndex(x => x.IsActive);
        builder.HasIndex(x => x.IsDeleted);
    }
}
