using Trio.HospitalManagement.Contracts.Dtos;

namespace Trio.HospitalManagement.Contracts.Queries;

public record GetHospitalRequest : IQuery<HospitalDto>
{
    public required Guid Id { get; set; }
}
