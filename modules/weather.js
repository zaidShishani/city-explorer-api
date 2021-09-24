const axios = require('axios');

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
    console.log('weather URL',weatherURL)
    axios.get(weatherURL).then(weatherData => {
        let newArr = weatherData.data.data.map(value => new Forecast(value));
        res.status(200).send(newArr);
    })
}

module.exports = weatherRoute;