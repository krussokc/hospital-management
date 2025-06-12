using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore.Diagnostics;
using System.Data.Common;
using Trio.Data.Providers;

namespace Trio.Data.Interceptors;

public class TokenInterceptor : DbConnectionInterceptor
{
    private readonly IAzureSqlTokenProvider _tokenProvider;

    public TokenInterceptor(IAzureSqlTokenProvider tokenProvider)
    {
        _tokenProvider = tokenProvider;
    }

    public override InterceptionResult ConnectionOpening(
        DbConnection connection,
        ConnectionEventData eventData,
        InterceptionResult result)
    {
        var sqlConnection = (SqlConnection)connection;
        if (ConnectionNeedsAccessToken(sqlConnection))
        {
            var (token, _) = _tokenProvider.GetAccessToken();
            sqlConnection.AccessToken = token;
        }

        return base.ConnectionOpening(connection, eventData, result);
    }

    public override async ValueTask<InterceptionResult> ConnectionOpeningAsync(
        DbConnection connection,
        ConnectionEventData eventData,
        InterceptionResult result,
        CancellationToken cancellationToken = default)
    {
        var sqlConnection = (SqlConnection)connection;
        if (ConnectionNeedsAccessToken(sqlConnection))
        {
            var (token, _) = await _tokenProvider.GetAccessTokenAsync(cancellationToken);
            sqlConnection.AccessToken = token;
        }

        return await base.ConnectionOpeningAsync(connection, eventData, result, cancellationToken);
    }

    public override void ConnectionFailed(DbConnection connection, ConnectionErrorEventData eventData)
    {
        _tokenProvider.ClearCachedToken();
        base.ConnectionFailed(connection, eventData);
    }

    public override async Task ConnectionFailedAsync(DbConnection connection, ConnectionErrorEventData eventData, CancellationToken cancellationToken = default)
    {
        _tokenProvider.ClearCachedToken();
        await base.ConnectionFailedAsync(connection, eventData, cancellationToken);
    }

    private static bool ConnectionNeedsAccessToken(SqlConnection connection)
    {
        var connectionStringBuilder = new SqlConnectionStringBuilder(connection.ConnectionString);
        return connectionStringBuilder.DataSource.Contains("database.windows.net", StringComparison.OrdinalIgnoreCase) && string.IsNullOrEmpty(connectionStringBuilder.UserID);
    }
}

