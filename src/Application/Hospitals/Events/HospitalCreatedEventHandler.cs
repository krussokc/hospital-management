using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Trio.HospitalManagement.Domain.Events;

namespace Trio.HospitalManagement.Application.Hospitals.Events;

public interface IMessageBus
{
    Task PublishAsync<T>(string queue, T message);
}

public class HospitalCreatedEventHandler : INotificationHandler<HospitalCreatedEvent>
{
    private readonly IMessageBus _messageBus;

    public HospitalCreatedEventHandler(IMessageBus messageBus)
    {
        _messageBus = messageBus;
    }

    public async Task Handle(HospitalCreatedEvent notification, CancellationToken cancellationToken)
    {
        // Do any internal work you want first (logging, state change, etc.)

        // Publish externally to RabbitMQ
        await _messageBus.PublishAsync("HospitalCreatedQueue", notification);
    }
}
