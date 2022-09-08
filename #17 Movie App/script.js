const movieContainer = document.querySelector('.movies-container')
const movie = document.querySelectorAll('.movie-image')
const overview = document.querySelectorAll('.movie-overview')
const desc = document.querySelectorAll('.movie-description')
const input = document.querySelector('input')
const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a62291e63cbc03da2c828e7f2d53dd07&page=1"
const IMG_URL = "https://image.tmdb.org/t/p/w1280"
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=a62291e63cbc03da2c828e7f2d53dd07&query="'

//fetchAPI
getMovies(API_URL)
async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()
    let i;
    console.log(data)
    if (data.results.length == 0) {
        const notfounddiv = document.createElement('div')
        movieContainer.appendChild(notfounddiv)
        notfounddiv.innerHTML = "The movie '" + input.value + "' is Not Available"
        notfounddiv.classList.add('not_found')
    }
    else {
        for (i = 0; i < 20; i++) {
            //createElement
            const moviediv = document.createElement('div')
            const movieimgdiv = document.createElement('div')
            const moviedescdiv = document.createElement('div')
            const movienamediv = document.createElement('div')
            const moviemarkdiv = document.createElement('div')
            const movieoverview = document.createElement('div')
            const overheader = document.createElement('h3')
            const overreview = document.createElement('p')
            //addclass
            moviediv.classList.add('movie')
            movieimgdiv.classList.add('movie-image')
            moviedescdiv.classList.add('movie-description')
            movienamediv.classList.add('movie-name')
            moviemarkdiv.classList.add('movie-mark')
            movieoverview.classList.add('movie-overview')
            //appendElement
            movieContainer.appendChild(moviediv)
            moviediv.appendChild(movieimgdiv)
            moviediv.appendChild(moviedescdiv)
            moviedescdiv.appendChild(movienamediv)
            moviedescdiv.appendChild(moviemarkdiv)
            moviediv.appendChild(movieoverview)
            movieoverview.appendChild(overheader)
            movieoverview.appendChild(overreview)
            //styleElement
            movieimgdiv.style.background = "url(https://image.tmdb.org/t/p/w1280/" + data.results[i].poster_path
            movieimgdiv.style.backgroundSize = "cover"
            movieimgdiv.style.backgroundPosition = "center"
            moviemarkdiv.innerHTML = data.results[i].vote_average
            data.results[i].vote_average > 8 ? moviemarkdiv.style.color = "green" : (data.results[i].vote_average > 5 ? moviemarkdiv.style.color = "orange" : moviemarkdiv.style.color = "red")
            movienamediv.innerHTML = data.results[i].original_title
            overheader.innerHTML = "Overview"
            overreview.innerHTML = data.results[i].overview.split('.')[0]
        }
    }
}
//searchAPI
input.addEventListener('keyup', (event) => {
    if (event.key == "Enter") {
        movieContainer.innerHTML = ""
        input.value == "" ? location.reload() : getMovies(SEARCH_URL + input.value)
    }
})
