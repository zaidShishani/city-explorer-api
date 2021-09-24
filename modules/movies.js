const axios = require('axios');

class movie {
    constructor(item) {
        this.title = item.title;
        this.overveiw = item.overview;
        this.avgVotes = item.vote_average;
        this.totalVotes = item.vote_count;
        this.imgURL = 'https://image.tmdb.org/t/p/w500' + item.poster_path;
        this.popularity = item.popularity ;
        this.released  = item.release_date;
    }
}

function moviesRoute(req, res) {

    let searchQuerey = req.query.query;
    let movieObj = [];

    let movieURL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&query=${searchQuerey}`

    axios.get(movieURL).then(dataResult => {

        let newArrMovie = dataResult.data.results.map(item => {
            return new movie(item);
        })
        res.send(newArrMovie);
    }).catch(error => {
        res.send(error);
    });
}

module.exports = moviesRoute;