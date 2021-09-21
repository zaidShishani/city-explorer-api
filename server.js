'use strict'
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const server =express();
const weatherData = require('./data/weather.json');
const PORT = process.env.PORT;
server.use(cors());

class Forecast {
    constructor(data, description){
        this.data = data;
        this.description = description;
    }
}

// locaolhost:3001/
server.get('/',(request, response) => {
    response.send('Home route');
})

// locaolhost:3001/test
server.get('/test',(request, response) => {
    response.send('api working all good');
})



// http://localhost:3001/getWeather?cityNameSelect=Amman
server.get('/getWeather',(request, response) => {
    // response.send(weatherData);

    let cityName = request.query.cityNameSelect;

    // console.log(request.query);
    // console.log(request.query.city_name);

    let weatherInfo = weatherData.find((item) => {
        if(item.city_name === cityName){
            return item;
        }
    });

    let newArr = weatherInfo.data.map(element => {
        return new Forecast(element.datetime, element.weather.description);
    });

    // console.log('weatherInfo',weatherInfo);
    response.send(newArr);
    console.log(newArr);
});


// locaolhost:3001/anything
server.get('*',(request, response) => {
    response.status(404).send('route is not found');
})

server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
})