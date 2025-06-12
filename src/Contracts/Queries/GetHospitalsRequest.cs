using Trio.HospitalManagement.Contracts.Dtos;

namespace Trio.HospitalManagement.Contracts.Queries;

public record GetHospitalsRequest : IQuery<List<HospitalDto>>
{
    public bool? Active { get; set; } = true;
}
