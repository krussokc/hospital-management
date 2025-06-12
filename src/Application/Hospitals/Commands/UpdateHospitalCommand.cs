using Trio.HospitalManagement.Application.Extensions;
using Trio.HospitalManagement.Contracts.Commands;
using Trio.HospitalManagement.Contracts.Dtos;
using Trio.HospitalManagement.Domain.Hospitals;

namespace Trio.HospitalManagement.Application.Hospitals.Commands;

public class UpdateHospitalCommand : ICommandHandler<UpdateHospitalRequest, HospitalDto>
{
    private readonly IHospitalRepository _hospitalRepository;

    public UpdateHospitalCommand(IHospitalRepository hospitalRepository)
    {
        _hospitalRepository = hospitalRepository;
    }

    public async Task<HospitalDto> Handle(UpdateHospitalRequest request, CancellationToken cancellationToken)
    {
        var hospital = await _hospitalRepository.Get(request.Data.Id, cancellationToken);

        hospital.UpdateName(request.Data.Name);

        hospital = await _hospitalRepository.Update(hospital, cancellationToken);

        return hospital.ToDto();
    }
}
