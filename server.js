'use strict'
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const server =express();
const axios = require('axios')


//modules
const weatherData = require('./modules/weather.js');
const moviesRoute = require('./modules/movies.js');
const PORT = process.env.PORT;

server.use(cors());

server.get('/',homeRoute);
server.get('/weather',weatherData);
server.get('/movie',moviesRoute);
server.get('/test',testRoute);
server.get('/*',anythingRoute);


// locaolhost:3001/
function homeRoute (req, res) {
    res.status(200).send('Home route');
};

// locaolhost:3001/test
function testRoute (req, res) {
    res.send('api working all good');
};

// locaolhost:3001/anything
function anythingRoute (req, res) {
    res.status(404).send('route is not found');
};

// Listener
server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});
