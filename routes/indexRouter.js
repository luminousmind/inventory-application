const { Router } = require("express");
const { getItem } = require("../database/queries");
const router = Router();


router.get("/", async (req, res) => {
    try {
        const items = await getItem("T-shirt");
        console.log(items);
    } catch (err) {
        console.error("Error fetching items:", err);
        res.status(500).send("Internal server error");
        return;
    }

    res.render("index");
});

module.exports = router;