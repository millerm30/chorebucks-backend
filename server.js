const express = require('express');
const app = express();
const port = 8080;

// setup the server main page for testing
app.get('/', (req, res) => {
  res.send("The server is running!");
});

// setup the server to listen on port 8080
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

