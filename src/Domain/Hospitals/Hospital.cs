using Trio.Domain;

namespace Trio.HospitalManagement.Domain.Hospitals;

public class Hospital : AggregateRoot
{
    private Hospital() { }

    private Hospital(string name)
    {
        Name = name.Trim();
    }

    public static Hospital Create(string name)
    {
        return new Hospital(name);
    }

    public void UpdateName(string name)
    {
        Name = name;
    }

    public string? Name { get; private set; }
}
