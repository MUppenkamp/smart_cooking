import { Pool, QueryResult } from 'pg'

export const createPool = (): Pool => {
    return new Pool({
        user: 'postgres',
        password: 'postgres',
        host: process.env?.POSTGRES_URL || 'localhost',
        database: 'smart_cocking',
        port: 5432
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
