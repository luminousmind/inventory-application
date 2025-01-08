const dotenv = require("dotenv");

dotenv.config();

module.exports = {
    PORT: process.env.PORT || 3000,
    DATATBASE_URL: process.env.DATABASE_URL,
};