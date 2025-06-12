using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Trio.Domain;

namespace Trio.Data.Configuration;

public class AggregateRootConfig<TEntity> : EntityConfig<TEntity>
    where TEntity : class, IEntity, IAggregateRoot
{
    public override void Configure(EntityTypeBuilder<TEntity> builder)
    {
        base.Configure(builder);

        builder.Ignore(x => x.Events);
    }
}
