const querydb = require("../database/queries")

const indexController = async (req, res) => {
    let items;

    try {
        items = await querydb(
            `
                SELECT * FROM items;
            `
        );
    } catch (err) {
        console.error("Error fetching items:", err);
        res.status(500).send("Internal server error");
        return;
    }

    res.render("index", { items: items });
};

module.exports = indexController;