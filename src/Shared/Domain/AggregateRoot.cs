using Trio.Domain.Events;

namespace Trio.Domain;

public interface IAggregateRoot
{
    IReadOnlyList<DomainEvent> Events { get; }
    void AddEvent(DomainEvent eventItem);
    void RemoveEvent(DomainEvent eventItem);
    void ClearEvents();
}

public abstract class AggregateRoot : Entity, IAggregateRoot
{
    protected List<DomainEvent> _events = new List<DomainEvent>();

    protected AggregateRoot() : base() { }

    #region Domain Events

    public IReadOnlyList<DomainEvent> Events => _events.AsReadOnly();

    public void AddEvent(DomainEvent eventItem)
    {
        _events.Add(eventItem);
    }

    public void RemoveEvent(DomainEvent eventItem)
    {
        _events.Remove(eventItem);
    }

    public void ClearEvents()
    {
        _events.Clear();
    }

    #endregion
}
