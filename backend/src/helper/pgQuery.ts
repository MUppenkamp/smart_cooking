const {Pool} = require('pg');

const createPool = () => {
    return new Pool({
        user: 'postgres',
        password: 'postgres',
        host: 'localhost',
        database: 'smart_cocking',
        port: 5432
    });
}

const disconnectPool = async (pool: typeof Pool) => {
    await pool.end();
}

const pgQuery = async (pool: typeof Pool, query: string, param?: any[]) => {
    try {
        return await pool.query(query, param);
    } catch (ex) {
        console.log("pgQuery ex", ex);
    }
}


module.exports = {
    createPool,
    pgQuery,
    disconnectPool
}
