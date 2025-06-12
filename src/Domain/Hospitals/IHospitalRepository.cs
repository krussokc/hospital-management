namespace Trio.HospitalManagement.Domain.Hospitals;

public interface IHospitalRepository
{
    Task<Hospital?> Create(Hospital hospital, CancellationToken cancellationToken);
    Task<Hospital?> Get(Guid id, CancellationToken cancellationToken);
    Task<List<Hospital>> GetAll(CancellationToken cancellationToken);
    Task<Hospital> Update(Hospital hospital, CancellationToken cancellationToken);
    Task<bool> Delete(Guid id, CancellationToken cancellationToken);
}
