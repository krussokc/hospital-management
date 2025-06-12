using Trio.Domain.Events;

namespace Trio.Domain;

public interface IAggregateRoot
{
    IReadOnlyList<Event> Events { get; }
    void AddEvent(Event eventItem);
    void RemoveEvent(Event eventItem);
    void ClearEvents();
}

public abstract class AggregateRoot : Entity, IAggregateRoot
{
    protected List<Event> _events = new List<Event>();

    protected AggregateRoot() : base() { }

    #region Domain Events

    public IReadOnlyList<Event> Events => _events.AsReadOnly();

    public void AddEvent(Event eventItem)
    {
        _events.Add(eventItem);
    }

    public void RemoveEvent(Event eventItem)
    {
        _events.Remove(eventItem);
    }

    public void ClearEvents()
    {
        _events.Clear();
    }

    #endregion
}
