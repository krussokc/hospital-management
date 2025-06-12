namespace Trio.HospitalManagement.Contracts;

public interface IResponse<T>
{
    string Type { get; }
    public bool Success { get; }
    public string? Message { get; }
    public T? Data { get; }
}
public class Response<T> : IResponse<T>
{
    public Response(T? data, bool success = true, string? message = null)
    {
        Data = data;
        Message = message;
        Success = success;

        if (typeof(T).IsGenericType && typeof(T).GetGenericTypeDefinition() == typeof(List<>))
        {
            var itemType = typeof(T).GetGenericArguments().First().Name;
            Type = $"List<{itemType}>";
        }
        else
        {
            Type = typeof(T).Name;
        }
    }

    public string Type { get; set; }
    public bool Success { get; set; }
    public string? Message { get; set; }

    public T? Data { get; set; }
}
