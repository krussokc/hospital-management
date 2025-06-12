namespace Trio.Domain;

public interface IEntity
{
    Guid Id { get; }
}

public interface IAuditedEntity
{
    void RefreshDateUpdated();
    DateTimeOffset DateCreated { get; }
    DateTimeOffset DateUpdated { get; }
}

public interface ISoftDeletableEntity
{
    void SoftDelete();
    bool IsDeleted { get; }
    DateTimeOffset? DateDeleted { get; }
}

public abstract class Entity : IEntity, IAuditedEntity, ISoftDeletableEntity
{
    protected Entity() { }

    public Guid Id { get; init; } = Guid.NewGuid();

    public void RefreshDateUpdated()
    {
        DateUpdated = DateTimeOffset.UtcNow;
    }

    public void SoftDelete()
    {
        IsDeleted = true;
        DateDeleted = DateTimeOffset.UtcNow;
    }

    public DateTimeOffset DateCreated { get; private set; } = DateTimeOffset.UtcNow;
    public DateTimeOffset DateUpdated { get; private set; } = DateTimeOffset.UtcNow;
    public bool IsDeleted { get; private set; } = false;
    public DateTimeOffset? DateDeleted { get; private set; } = null;
}
