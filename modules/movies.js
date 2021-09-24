const axios = require('axios');

class movie {
    constructor(item) {
        this.title = item.title;
        this.overveiw = item.overveiw;
        this.avgVotes = item.avg_votes;
        this.totalVotes = item.total_votes;
        this.imgURL = 'https://image.tmdb.org/t/p/w500'+ item.img_URL;
        this.popularity = item.popularity ;
        this.released  = item.released;
    }
}

function moviesRoute(req, res) {

    let searchQuerey = req.querey.querey;
    let movieObj = [];

    let movieURL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&query=${searchQuerey}`

    axios.get(movieURL).then(dataResult => {

        let newArrMovie = result.data.result
    })
}