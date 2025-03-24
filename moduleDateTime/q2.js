
const http = require('http'); 
const myModule = require('./module');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('Welcome to the Node.js Server!\n');
        res.write(`Current Date and Time: ${myModule.getCurrentDateTime()}`);
        res.end();
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write('404 Not Found');
        res.end();
    }
});


server.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});

