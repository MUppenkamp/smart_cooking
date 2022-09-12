import { Pool, QueryResult } from 'pg'

export const createPool = (): Pool => {
    return new Pool({
        user: process.env?.POSTGRES_USER || 'postgres',
        password: process.env?.POSTGRES_PASSWORD || 'postgres',
        host: process.env?.POSTGRES_URL || 'localhost',
        database: process.env?.POSTGRES_DB || 'smart_cooking',
        port: Number(process.env?.POSTGRES_PORT) != 0 ? Number(process.env?.POSTGRES_PORT) : 5432
    });
}

export const disconnectPool = async (pool: Pool) => {
    await pool.end();
}

export const pgQuery = async <T>(pool: Pool, query: string, param?: any[]): Promise<QueryResult<T> | null> => {
    try {
        return pool.query<T>(query, param);
    } catch (ex) {
        console.log("pgQuery ex", ex);
        return null;
    }
}
