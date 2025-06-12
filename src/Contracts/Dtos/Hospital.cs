namespace Trio.HospitalManagement.Contracts.Dtos;

public record HospitalDto
{
    public Guid Id { get; init; }
    public string? Name { get; init; }
}
