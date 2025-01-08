const express = require("express");
const path = require("node:path");
const indexRouter = require("./routes/indexRouter");
const populatedb = require("./database/populateDatabase");
const app = express();

populatedb();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Inventory application listening on port ${PORT}.`);
});