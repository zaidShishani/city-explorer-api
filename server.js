'use strict'

const { request, response } = require('express');
const express = require('express');

const server =express();
const wetherData = require('./data/weather.json');
const PORT = 3001;


// locaolhost:3001/
server.get('/',(request, response) => {
    response.send('Home route');
})

// locaolhost:3001/test
server.get('/test',(request, response) => {
    response.send('api working all good');
})

// locaolhost:3001/getWeather
server.get('/getWeather',(request, response) => {
    response.send(wetherData);

    let cityName = req.query.cityNameSelect;
    console.log(request.query);
    console.log(request.query.city_name);
    let weatherInfo = wetherData.results.find((item) => {
        if(item.city_name === cityName){
            return item;
        }
    })
    console.log('weatherInfo',weatherInfo);
    request.send(weatherInfo);
})

// locaolhost:3001/anything
server.get('*',(request, response) => {
    response.status(404).send('route is not found');
})

server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
})