using Trio.Domain.Events;

namespace Trio.HospitalManagement.Domain.Events;

public class HospitalCreatedEvent : DomainEvent
{
    public HospitalCreatedEvent(Guid id)
    {
        Id = id;
    }

    public Guid Id { get; set; }
}
