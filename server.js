const express = require('express');
const mysql = require('mysql2');
const session = require('express-session');
const app = express();
require ('dotenv').config({ path: './.env' });
const port = 8080;

// Create database connection and use process.env to hide credentials
const databaseConnection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Connect to User Database
databaseConnection.connect((err) => {
  if (err) throw err;
  console.log("Connected to the database!");
});

// Setup the server main page for testing
app.get('/', (req, res) => {
  res.send("The server is running!");
});

// Setup the server to listen on port 8080
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});