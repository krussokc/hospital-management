using Trio.HospitalManagement.Contracts.Dtos;

namespace Trio.HospitalManagement.Contracts.Commands;

public record UpdateHospitalRequest : ICommand<HospitalDto>
{
    public required Guid Id { get; init; }
    public required HospitalDto Data { get; init; }
}
