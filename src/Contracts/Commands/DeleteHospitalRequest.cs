namespace Trio.HospitalManagement.Contracts.Commands;

public record DeleteHospitalRequest : ICommand<bool>
{
    public required Guid Id { get; init; }
}
