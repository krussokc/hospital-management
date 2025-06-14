﻿using Azure.Core;
using Microsoft.EntityFrameworkCore;
using Trio.HospitalManagement.Data.Mssql;
using Trio.HospitalManagement.Domain.Contracts;
using Trio.HospitalManagement.Domain.Hospitals;
using Trio.Infrastructure;

namespace Trio.HospitalManagement.Infrastructure;

public class HospitalRepository : BaseRepository<Hospital, HospitalDbContext>, IHospitalRepository
{
    public HospitalRepository(HospitalDbContext context) : base(context)
    {
    }

    public async Task<Hospital?> Create(Hospital hospital, CancellationToken cancellationToken)
    {
        await _context.AddAsync(hospital, cancellationToken);
        await _context.SaveChangesAsync(cancellationToken);
        return await Get(hospital.Id, cancellationToken);
    }

    public async Task<Hospital?> Get(Guid id, CancellationToken cancellationToken)
    {
        var hospital = await _context.Hospitals.FirstOrDefaultAsync(x => x.Id == id, cancellationToken);
        return hospital;
    }

    public async Task<List<Hospital>> GetAll(HospitalFilter filter, CancellationToken cancellationToken)
    {
        // base list query
        var query = _context.Hospitals.Where(x => x.IsActive == filter.Active && !x.IsDeleted);

        // paging
        int skip = (filter.PageNumber - 1) * filter.PageSize;
        query = query.Skip(skip).Take(filter.PageSize);

        // simple search
        if (!string.IsNullOrEmpty(filter.Search))
        {
            query = query.Where(x => x.Name.Contains(filter.Search));
        }

        var hospitals = await query.AsNoTracking().ToListAsync();

        return hospitals;
    }

    public async Task<Hospital> Update(Hospital hospital, CancellationToken cancellationToken)
    {
        _context.Update(hospital);
        await _context.SaveChangesAsync(cancellationToken);
        return hospital;
    }

    public async Task<bool> Delete(Guid id, CancellationToken cancellationToken)
    {
        var hospital = await Get(id, cancellationToken);
        hospital.SoftDelete();
        await _context.SaveChangesAsync(cancellationToken);
        return true;
    }
}
