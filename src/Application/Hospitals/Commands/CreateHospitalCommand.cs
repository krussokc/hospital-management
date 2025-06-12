using Trio.HospitalManagement.Application.Extensions;
using Trio.HospitalManagement.Contracts.Commands;
using Trio.HospitalManagement.Contracts.Dtos;
using Trio.HospitalManagement.Domain.Contracts;
using Trio.HospitalManagement.Domain.Hospitals;

namespace Trio.HospitalManagement.Application.Hospitals.Commands;

public class CreateHospitalCommand : ICommandHandler<CreateHospitalRequest, HospitalDto>
{
    private readonly IHospitalRepository _hospitalRepository;

    public CreateHospitalCommand(IHospitalRepository hospitalRepository)
    {
        _hospitalRepository = hospitalRepository;
    }

    public async Task<HospitalDto> Handle(CreateHospitalRequest request, CancellationToken cancellationToken)
    {
        var hospital = Hospital.Create(request.Name);

        var results = await _hospitalRepository.Create(hospital, cancellationToken);

        return results.ToDto();
    }
}
