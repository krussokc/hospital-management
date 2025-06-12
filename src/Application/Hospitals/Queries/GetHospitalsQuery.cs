using Trio.HospitalManagement.Application.Extensions;
using Trio.HospitalManagement.Contracts.Dtos;
using Trio.HospitalManagement.Contracts.Queries;
using Trio.HospitalManagement.Domain.Contracts;

namespace Trio.HospitalManagement.Application.Hospitals.Queries;

public class GetHospitalsQuery : IQueryHandler<GetHospitalsRequest, List<HospitalDto>>
{
    private readonly IHospitalRepository _hospitalRepository;

    public GetHospitalsQuery(IHospitalRepository hospitalRepository)
    {
        _hospitalRepository = hospitalRepository;
    }

    public async Task<List<HospitalDto>> Handle(GetHospitalsRequest request, CancellationToken cancellationToken)
    {
        var filter = new HospitalFilter(request.Active, request.PageNumber, request.PageSize, request.Search);

        var results = await _hospitalRepository.GetAll(filter, cancellationToken);

        return results.ToDto();
    }
}
