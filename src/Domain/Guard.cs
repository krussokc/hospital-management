namespace Trio.HospitalManagement.Domain;

public static class Guard
{
    public static void AgainstNullOrWhiteSpace(string value, string parameterName)
    {
        if (string.IsNullOrWhiteSpace(value))
            throw new ArgumentException($"{parameterName} cannot be null or whitespace.", parameterName);
    }
}
