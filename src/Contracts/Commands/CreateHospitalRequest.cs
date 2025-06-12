using Trio.HospitalManagement.Contracts.Dtos;

namespace Trio.HospitalManagement.Contracts.Commands;

public record CreateHospitalRequest : ICommand<HospitalDto>
{
    public required string Name { get; init; }
}
