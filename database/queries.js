const pool = require("./pool")

async function getItem(item) {
    const { rows } = await pool.query(
        `
                SELECT * FROM items;
            `
    );

    return rows;
}

module.exports = {
    getItem,
};