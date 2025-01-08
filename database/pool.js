const { Pool } = require("pg");
const { DATATBASE_URL } = require("../utils/environment");

const pool = new Pool({
    connectionString: DATATBASE_URL,
});

module.exports = pool;