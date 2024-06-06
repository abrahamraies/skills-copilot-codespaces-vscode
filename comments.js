// Create web server
// 1. Load the express module
// 2. Create an instance of the express module
// 3. Set the port number
// 4. Create a route to handle the GET request
// 5. Create a route to handle the POST request
// 6. Create a route to handle the PUT request
// 7. Create a route to handle the DELETE request
// 8. Start the server

// 1. Load the express module
const express = require('express');

// 2. Create an instance of the express module
const app = express();

// 3. Set the port number
const port = 3000;

// 4. Create a route to handle the GET request
app.get('/comments', (req, res) => {
    res.send('GET request to the comments route');
});

// 5. Create a route to handle the POST request
app.post('/comments', (req, res) => {
    res.send('POST request to the comments route');
});

// 6. Create a route to handle the PUT request
app.put('/comments', (req, res) => {
    res.send('PUT request to the comments route');
});

// 7. Create a route to handle the DELETE request
app.delete('/comments', (req, res) => {
    res.send('DELETE request to the comments route');
});

// 8. Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

// Run the server by running the following command in the terminal
// node comments.js

// Test the server by sending requests using Postman
// Open Postman and send GET, POST, PUT, and DELETE requests to http://localhost:3000/comments

// To stop the server, press Ctrl+C in the terminal
// You can also use the stop button in the Postman interface to stop the server

// Summary
// In this example, we created a simple web server using Express to handle GET, POST, PUT, and DELETE requests to the /comments route.
// We used the app.get(), app.post(), app.put(), and app.delete() methods to define the routes for different HTTP methods.
// We started the server using the app.listen() method, and the server listened on port 3000.
// We tested the server by sending GET, POST, PUT, and DELETE requests