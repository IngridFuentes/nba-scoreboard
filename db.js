const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'ingridf',
    database: 'nba_database',
    host: 'localhost',
    port: 5432 //postgres runs in this port

});

module.exports = pool;