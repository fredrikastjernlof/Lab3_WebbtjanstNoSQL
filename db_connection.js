const { Client } = require('pg');
require('dotenv').config();

// Variabel för att koppla upp mot databasen
const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
    ssl: {
        rejectUnauthorized: false //Nödvändigt för databas genererad av Render, annars kan det leda till SSL-fel
    },
});

// Koppla upp mot db
client.connect()
    .then(() => console.log("Connected to database!"))
    .catch(err => console.error("Error connecting to the database:", err)
);


module.exports = client;