using MediatR;

namespace Trio.Domain.Events;

public interface IDispatcher
{
    Task DispatchAndClearEvents(IEnumerable<IAggregateRoot> entities);
}

public class Dispatcher : IDispatcher
{
    private readonly IMediator _mediator;

    public Dispatcher(IMediator mediator)
    {
        _mediator = mediator;
    }

    public async Task DispatchAndClearEvents(IEnumerable<IAggregateRoot> entities)
    {
        foreach (var entity in entities)
        {
            var events = entity.Events.ToArray();

            entity.ClearEvents();

            foreach (var domainEvent in events)
            {
                await _mediator.Publish(domainEvent).ConfigureAwait(false);
            }
        }
    }
}
