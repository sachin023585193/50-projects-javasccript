const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=cca7f64485ca9c875cf8b92c8fff513b&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w300";
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=cca7f64485ca9c875cf8b92c8fff513b&query="';

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.querySelector("#main");

fetch(API_URL).then(data => data.json()).then(data => listmovies(data.results));

function listmovies(movies) {
    main.innerHTML = "";
    console.log(movies);
    if (movies == "") {
        main.innerHTML = '<p style="font-size:30px; color:white;">No search result found..</p>';
    }
    movies.forEach(movie => {
        const { poster_path, overview, original_title, vote_average } = movie;
        let movieEl = document.createElement("div");
        movieEl.classList.add("movie");
        movieEl.innerHTML = `
        <img src="${IMG_PATH + poster_path}">
        <div class="movie-info">
            <h3>${original_title}</h3>
            <span class="${determinecolor(vote_average)}">${vote_average}</span>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>
        </div>
        `;
        main.appendChild(movieEl);
    })
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let searchterm = search.value;
    if (searchterm && searchterm !== "") {
        fetch(SEARCH_URL + searchterm).then(data2 => data2.json()).then(movies => listmovies(movies.results));
    }
});

function determinecolor(vote) {
    if (vote >= 8) {
        return "green";
    } else if (vote >= 5) {
        return "yellow";
    } else {
        return "red"
    }
};