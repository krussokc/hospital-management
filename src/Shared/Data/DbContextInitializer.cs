using Microsoft.EntityFrameworkCore;

namespace Trio.Data;

public class DbContextInitializer<TContext> where TContext : DbContext
{
    private readonly TContext _context;

    public DbContextInitializer(TContext context)
    {
        _context = context;
    }

    public void Initialize()
    {
        try
        {
            if (_context.Database.IsSqlServer())
            {
                _context.Database.Migrate();
            }
        }
        catch (Exception ex)
        {
            throw;
        }
    }
}
