using Trio.HospitalManagement.Contracts.Commands;
using Trio.HospitalManagement.Domain.Hospitals;

namespace Trio.HospitalManagement.Application.Hospitals.Commands;

public class DeleteHospitalCommand : ICommandHandler<DeleteHospitalRequest, bool>
{
    private readonly IHospitalRepository _hospitalRepository;

    public DeleteHospitalCommand(IHospitalRepository hospitalRepository)
    {
        _hospitalRepository = hospitalRepository;
    }

    public async Task<bool> Handle(DeleteHospitalRequest request, CancellationToken cancellationToken)
    {
        var result = await _hospitalRepository.Delete(request.Id, cancellationToken);

        return result;
    }
}
