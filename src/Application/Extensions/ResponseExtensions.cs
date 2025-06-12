using Trio.HospitalManagement.Contracts;

namespace Trio.HospitalManagement.Application.Extensions;

public static class ResponseExtensions
{
    public static Response<T> ToResponse<T>(this T data, bool success = true, string? message = null)
    {
        return new Response<T>(data)
        {
            Success = true,
            Message = "Request successful"
        };
    }
}
