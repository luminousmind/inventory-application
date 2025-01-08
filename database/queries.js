const pool = require("./pool")

async function querydb(SQl) {
    const { rows } = await pool.query(
        SQl
    );

    return rows;
}

module.exports = querydb;