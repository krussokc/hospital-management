using System.Net.Mime;
using System.Text.Json;

namespace Trio.HospitalManagement.Api.Middleware;

public class BadRequestMiddleware
{
    private readonly RequestDelegate _next;
    private readonly ILogger<BadRequestMiddleware> _logger;
    private readonly IWebHostEnvironment _environment;

    public BadRequestMiddleware(RequestDelegate next, ILogger<BadRequestMiddleware> logger, IWebHostEnvironment environment)
    {
        _next = next;
        _logger = logger;
        _environment = environment;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        var jsonOptions = new JsonSerializerOptions
        {
            PropertyNamingPolicy = JsonNamingPolicy.CamelCase
        };

        try
        {
            await _next(context);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex.Message);

            if (_environment.IsDevelopment())
                _logger.LogError(ex.ToString());

            context.Response.StatusCode = StatusCodes.Status400BadRequest;
            context.Response.ContentType = MediaTypeNames.Application.Json;
            await context.Response.WriteAsync(JsonSerializer.Serialize(new { ex.Message }, jsonOptions));
        }
    }
}
