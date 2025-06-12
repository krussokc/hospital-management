namespace Trio.HospitalManagement.Domain.Contracts;

public class HospitalFilter
{
    public HospitalFilter(
        bool? active = null,
        int? pageNumber = null,
        int? pageSize = null,
        string? search = null)
    {
        Active = active ?? true;
        PageNumber = pageNumber ?? 1;
        PageSize = pageSize ?? 25;
        Search = search ?? string.Empty;
    }

    public bool Active { get; set; }
    public string? Search { get; set; }
    public int PageNumber { get; set; }
    public int PageSize { get; set; }
}
