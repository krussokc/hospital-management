using Microsoft.EntityFrameworkCore;
using Trio.HospitalManagement.Api.Extensions;
using Trio.HospitalManagement.Api.Middleware;
using Trio.HospitalManagement.Application.Extensions;
using Trio.HospitalManagement.Data.Mssql;
using Trio.HospitalManagement.Infrastructure.Extensions;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddHospitalManagementApplicationServices();
builder.Services.AddHospitalManagementInfrastructure(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString(nameof(HospitalDbContext)),
        opts =>
        {
            opts.EnableRetryOnFailure(
                maxRetryCount: 5,
                maxRetryDelay: TimeSpan.FromSeconds(5),
                errorNumbersToAdd: null);
        });
});

var origins = builder.Configuration.GetSection("AllowedOrigins").Get<string[]>();

builder.Services.AddCors(s => s.AddPolicy("policy", policy =>
{
    policy.SetIsOriginAllowedToAllowWildcardSubdomains();
    policy.AllowAnyHeader();
    policy.AllowAnyMethod();
    policy.WithOrigins(origins);
    policy.AllowCredentials();
}));

builder.Services.AddHealthChecks();

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    using var scope = app.Services.CreateScope();
    var dbContext = scope.ServiceProvider.GetRequiredService<HospitalDbContext>();

    if (dbContext.Database.IsSqlServer())
    {
        dbContext.Database.Migrate();
    }

    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseMiddleware<BadRequestMiddleware>();

app.MapFallbackToFile("/index.html");

app.MapHealthChecks("/healthz");

app.UseCors("policy");

app.RegisterHospitalManagementEndpoints();

app.Run();

// for testing access
public partial class Program;