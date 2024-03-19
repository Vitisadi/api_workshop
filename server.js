const express = require('express');
const app = express(); // Instance of express application
const PORT = 3000; // Port number we will be listening to

app.use(express.json()); // Middleware to parse JSON bodies

// Import routes
const helloRoute = require('./routes/hello');
const dataRoute = require('./routes/data');
const addRoute = require('./routes/add');
const add2Route = require('./routes/add2');

// Use routes
app.use(helloRoute);
app.use(dataRoute);
app.use(addRoute);
app.use(add2Route);


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
