const axios = require('axios');

let cacheMemory = {};

class Forecast {
    constructor(element){
        this.date = element.datetime;
        this.description = element.weather.description;
    }
}

function weatherRoute(req, res) {
    let cityName = req.query.city;
    let forecastObj = [];

    let weatherURL = `https://api.weatherbit.io/v2.0/forecast/daily?key=${process.env.WEATHER_API_KEY}&city=${cityName}`

    if(cacheMemory[cityName] !== undefined){
        console.log('the cache contain data');
        res.send(cacheMemory[cityName]);
    } else {
        console.log('cache memory is empty hit the api')
        try {
            console.log('weather URL',weatherURL)
            axios.get(weatherURL).then(weatherData => {
                let newArr = weatherData.data.data.map(value => new Forecast(value));

                cacheMemory[cityName] = newArr;
                res.status(200).send(newArr);
            });
        } catch(error) {
            console.log('error from axios', error);
            res.send;
        }
    }
    
}

module.exports = weatherRoute;