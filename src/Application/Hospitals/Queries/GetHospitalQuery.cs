using Trio.HospitalManagement.Application.Extensions;
using Trio.HospitalManagement.Contracts.Dtos;
using Trio.HospitalManagement.Contracts.Queries;
using Trio.HospitalManagement.Domain.Hospitals;

namespace Trio.HospitalManagement.Application.Hospitals.Queries;

public class GetHospitalQuery : IQueryHandler<GetHospitalRequest, HospitalDto>
{
    private readonly IHospitalRepository _hospitalRepository;

    public GetHospitalQuery(IHospitalRepository hospitalRepository)
    {
        _hospitalRepository = hospitalRepository;
    }

    public async Task<HospitalDto> Handle(GetHospitalRequest request, CancellationToken cancellationToken)
    {
        var results = await _hospitalRepository.Get(request.Id, cancellationToken);

        return results.ToDto();
    }
}
