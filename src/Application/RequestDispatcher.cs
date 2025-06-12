using Microsoft.Extensions.DependencyInjection;
using Trio.HospitalManagement.Application;
using Trio.HospitalManagement.Application.Extensions;
using Trio.HospitalManagement.Contracts;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;

public interface IRequestDispatcher
{
    Task<Response<TResponse>> Send<TResponse>(IQuery<TResponse> query, CancellationToken cancellationToken);
    Task<Response<TResponse>> Send<TResponse>(ICommand<TResponse> command, CancellationToken cancellationToken);
}

public class RequestDispatcher : IRequestDispatcher
{
    private readonly IServiceProvider _serviceProvider;

    public RequestDispatcher(IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task<Response<TResponse>> Send<TResponse>(IQuery<TResponse> query, CancellationToken cancellationToken)
    {
        var handlerType = typeof(IQueryHandler<,>).MakeGenericType(query.GetType(), typeof(TResponse));
        dynamic handler = _serviceProvider.GetRequiredService(handlerType);
        var result = await handler.Handle((dynamic)query, cancellationToken);
        return ((TResponse)result).ToResponse();
    }

    public async Task<Response<TResponse>> Send<TResponse>(ICommand<TResponse> command, CancellationToken cancellationToken)
    {
        var handlerType = typeof(ICommandHandler<,>).MakeGenericType(command.GetType(), typeof(TResponse));
        dynamic handler = _serviceProvider.GetRequiredService(handlerType);
        var result = await handler.Handle((dynamic)command, cancellationToken);
        return ((TResponse)result).ToResponse();
    }
}
