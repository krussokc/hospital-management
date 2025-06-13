using Trio.Domain;
using Trio.HospitalManagement.Domain.Events;

namespace Trio.HospitalManagement.Domain.Hospitals;

public class Hospital : AggregateRoot
{
    private Hospital() { }

    private Hospital(string name)
    {
        Guard.AgainstNullOrWhiteSpace(name, nameof(name));

        Name = name.Trim();

        AddEvent(new HospitalCreatedEvent(Id));
    }

    public static Hospital Create(string name)
    {
        return new Hospital(name);
    }

    public void UpdateName(string name)
    {
        Name = name;
    }

    public string Name { get; private set; } = null!; // initialize to null for nullable compiler warnings
}
