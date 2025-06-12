using Trio.HospitalManagement.Contracts.Dtos;

namespace Trio.HospitalManagement.Application.Extensions;

public static class MappingExtensions
{
    public static HospitalDto ToDto(this Domain.Hospitals.Hospital hospital)
    {
        return new HospitalDto
        {
            Id = hospital.Id,
            Name = hospital.Name
        };
    }

    public static List<HospitalDto> ToDto(this List<Domain.Hospitals.Hospital> hospitals)
    {
        if (!hospitals.Any())
            return new List<HospitalDto>();

        return hospitals.Select(x => x.ToDto()).ToList();
    }
}
