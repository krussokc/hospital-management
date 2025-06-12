using Trio.HospitalManagement.Contracts.Dtos;

namespace Trio.HospitalManagement.Contracts.Queries;

public record GetHospitalsRequest : IQuery<List<HospitalDto>>
{
    // uses as params in endpoints
    // keep nullable or we get bad requests
    public int? PageNumber { get; set; } = 1;
    public int? PageSize { get; set; } = 25;
    public bool? Active { get; set; } = true;
    public string? Search { get; set; }
}
