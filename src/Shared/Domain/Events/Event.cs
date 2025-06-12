using MediatR;

namespace Trio.Domain.Events;

public abstract class Event : INotification
{
    public DateTimeOffset Timestamp { get; protected set; } = DateTimeOffset.UtcNow;
}
