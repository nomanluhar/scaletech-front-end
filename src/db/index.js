const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'test',
    password: '1121',
    port: '5432'
});

module.exports = {
    query: (text, params) => pool.query(text, params),
}