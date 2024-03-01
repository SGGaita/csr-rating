const express = require('express');
const mysql = require('mysql2');
const app = express();
const PORT = process.env.PORT || 3000;

const connection = mysql.createConnection({
    host: "csrfi.com",
    user: "csrmainweb_admin",
    password: "n5@C2kO5I@@",
    port: 3306,
    database: "csrmainweb",
});

connection.connect(function (err) {
    if (err) throw err;
    console.log('Connected to MySQL database!');
});

// Define a route to handle GET requests to the '/' path
app.get('/db', function (req, res) {
    connection.query('SELECT * FROM rate_company', function (err, results) {
        if (err) throw err;
        res.send(results);
    });
});

app.post('/api/data', (req, res) => {
    const data = req.body;
    console.log('Received data:', data);
  
    // Process the data here...
  
    res.send({ message: 'Data received successfully!' });
  });

// Define a route to handle GET requests to the '/' path
app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

// Start the server and listen for requests on PORT
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});