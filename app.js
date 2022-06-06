const http = require('http');

const express = require('express');

const app = express();

app.use((request, response, next) => {
    console.log('In the middleware!');
    next(); // Allows the request to continue to the next middleware in line
});

app.use((request, response, next) => {
    console.log('In another middleware!');
    // ...
    response.send('<h1>Hello Express.js!</h1>');
});

app.listen(3000);