const { Client } = require("pg");
const { DATATBASE_URL } = require("../utils/environment");

const SQL = `
    DROP TABLE IF EXISTS categories, items CASCADE;

    CREATE TABLE categories (
        id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        name VARCHAR(255) NOT NULL
    ); 

    CREATE TABLE items (
        id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        price NUMERIC(10, 2) NOT NULL,
        quantity INT NOT NULL,
        category_id INT REFERENCES categories(id) ON DELETE SET NULL
    );


    INSERT INTO categories (name) VALUES
    ('Electronics'),
    ('Groceries'),
    ('Clothing');

    INSERT INTO items (name, description, price, quantity, category_id) VALUES
    ('Laptop', '15-inch laptop with 16GB RAM', 1200.00, 10, 1),
    ('Bananas', 'Bundles of 6 small bananas', 3.99, 50, 2),
    ('T-shirt', 'Adidas white cotton t-shirt', 12.99, 20, 2);
`;

const populatedb = async () => {
    console.log("Seeding SQL with initial data...");

    const client = new Client({
        connectionString: DATATBASE_URL,
    });

    await client.connect();
    await client.query(SQL);
    await client.end();

    console.log("Done seeding SQL");
}

module.exports = populatedb;