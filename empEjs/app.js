const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Route to render the form
app.get('/', (req, res) => {
    res.render('form');
});

// Route to handle form submission and display data
app.post('/submit', (req, res) => {
    const employeeData = req.body;
    res.render('display', { employee: employeeData });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
