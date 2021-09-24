const axios = require('axios');

class Forecast {
    constructor(data, description){
        this.data = data;
        this.description = description;
    }
}

function weatherRoute(req, res) {
    let cityName = req.query.city;
    let forecastObj = [];

    let weatherURL = `https://api.weatherbit.io/v2.0/forecast/daily?key=${process.env.WEATHER_API_KEY}&city=${cityName}`

    axios.get(weatherURL).then(weatherData => {
        let newArr = weatherData.data.data.map(value => new Forecast(value));
        res.status(200).send(newArr);
    })
}

module.exports = weatherRoute;