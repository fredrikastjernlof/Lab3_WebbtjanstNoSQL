//Importerar paket
const express = require('express');
require('dotenv').config();
const cors = require('cors');

//Importerar databasanslutning
const connectDB = require('./db_connection');

//Läser in routes
const workexperienceRoutes = require("./routes/workexperienceRoutes");

// Expressinstans
const app = express();

// Anslut till databasen
connectDB();

// Middlewares
app.use(cors()); // Tillåter cross-origin
app.use(express.json()); // Parsa JSON-body

//Routes
app.use("/workexperience", workexperienceRoutes);

// Test-route
app.get('/', (req, res) => {
    res.send('API is running! 🥳 Yippee-ki-yay, motherflowerpower!🚀🌺');
});

// Starta servern
app.listen(process.env.PORT, () => console.log (`Server started, using port ${process.env.PORT}`));

