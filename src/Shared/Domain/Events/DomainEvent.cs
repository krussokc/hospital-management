using MediatR;

namespace Trio.Domain.Events;

public abstract class DomainEvent : INotification
{
    public DateTimeOffset Timestamp { get; protected set; } = DateTimeOffset.UtcNow;
}
