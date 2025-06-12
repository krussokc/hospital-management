using Microsoft.EntityFrameworkCore;
using Trio.Domain;

namespace Trio.Infrastructure;

// thin base repository class more as a placeholder for
// additional common functionality across all repos

public abstract class BaseRepository<TEntity, TContext>
    where TEntity : Entity
    where TContext : DbContext
{
    protected readonly TContext _context;
    protected readonly DbSet<TEntity> _dbSet;

    protected BaseRepository(TContext dbContext)
    {
        _context = dbContext;
        _dbSet = dbContext.Set<TEntity>();
    }

    public virtual async Task Add(TEntity entity) => await _dbSet.AddAsync(entity);

    public virtual void Update(TEntity entity) => _dbSet.Update(entity);

    public virtual void Remove(TEntity entity) => _dbSet.Remove(entity);
}
