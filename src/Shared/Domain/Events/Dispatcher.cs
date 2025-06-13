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
        var domainEvents = entities.SelectMany(x => x.Events).ToList();

        foreach (var entity in entities)
        {
            entity.ClearEvents();
        }

        foreach (var domainEvent in domainEvents)
        {
            await _mediator.Publish(domainEvent).ConfigureAwait(false);
        }
    }
}
