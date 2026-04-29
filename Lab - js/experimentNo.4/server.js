// Import the built-in 'http' module
const http = require('http');

// Define the hostname and port
const hostname = '127.0.0.1'; // Localhost
const port = 3000;

// Create the server
const server = http.createServer((req, res) => {
    // Log the request method and URL to the console
    console.log(`Received a ${req.method} request for: ${req.url}`);

    // Set the response HTTP header with HTTP status and Content-Type
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    // Send the response body
    res.end('<h1>Hello!</h1><p>Your tiny Node.js server is running successfully.</p>');
});

// Start the server and listen for requests
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    console.log('Press Ctrl+C to stop the server.');
});