using Microsoft.AspNetCore.Http.Json;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using System.Net.Mime;
using System.Text;
using System.Text.Json;
using Trio.HospitalManagement.Contracts;

namespace Trio.HospitalManagement.Api.Tests.Common.Extensions;

internal static class TestingExtensions
{
    private static readonly JsonSerializerOptions jsonOptions = new JsonSerializerOptions
    {
        PropertyNameCaseInsensitive = true
    };

    public static void RemoveDbContext<T>(this IServiceCollection services) where T : DbContext
    {
        var descriptor = services.SingleOrDefault(d => d.ServiceType == typeof(DbContextOptions<T>));

        if (descriptor != null) services.Remove(descriptor);
    }

    public static void EnsureDbCreated<T>(this IServiceCollection services) where T : DbContext
    {
        var serviceProvider = services.BuildServiceProvider();

        using var scope = serviceProvider.CreateScope();
        var scopedServices = scope.ServiceProvider;
        var context = scopedServices.GetRequiredService<T>();
        context.Database.EnsureCreated();
    }

    public static JsonSerializerOptions GetJsonOptions(this IServiceProvider services)
    {
        var jsonOptions = services.GetRequiredService<IOptions<JsonOptions>>();
        return jsonOptions.Value.SerializerOptions;
    }

    public static async Task<TestApiResult<T>> Get<T>(this HttpClient client, string url)
    {
        var message = await client.GetAsync($"{url}");
        return await message.GetResult<T>();
    }

    public static async Task<TestApiResult<T>> Post<T>(this HttpClient client, string url, object data)
    {
        var payload = new StringContent(JsonSerializer.Serialize(data), Encoding.UTF8, MediaTypeNames.Application.Json);
        var message = await client.PostAsync($"{url}", payload);
        return await message.GetResult<T>();
    }

    public static async Task<TestApiResult<T>> Put<T>(this HttpClient client, string url, object data)
    {
        var payload = new StringContent(JsonSerializer.Serialize(data), Encoding.UTF8, MediaTypeNames.Application.Json);
        var message = await client.PutAsync($"{url}", payload);
        return await message.GetResult<T>();
    }

    public static async Task<TestApiResult<T>> Patch<T>(this HttpClient client, string url, object data)
    {
        var payload = new StringContent(JsonSerializer.Serialize(data), Encoding.UTF8, MediaTypeNames.Application.Json);
        var message = await client.PatchAsync($"{url}", payload);
        return await message.GetResult<T>();
    }

    public static async Task<TestApiResult<T>> Delete<T>(this HttpClient client, string url)
    {
        var message = await client.DeleteAsync($"{url}");
        return await message.GetResult<T>();
    }

    public static async Task<TestApiResult<T>> GetResult<T>(this HttpResponseMessage message)
    {
        var content = await message.Content.ReadAsStringAsync();
        var response = JsonSerializer.Deserialize<Response<T>>(content, jsonOptions);
        return new TestApiResult<T>(message, content, response);
    }
}
