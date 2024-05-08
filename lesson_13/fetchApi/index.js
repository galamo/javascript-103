// fetch Api
// HTTP requests
// Return a Promise
const API_URL = `https://www.omdbapi.com/?apikey=ffa5acbc&s=`
const loader = document.querySelector("#spinner")
const refreshMoviesButton = document.querySelector("#refreshMovies")


function initMovies() {
    refreshMoviesButton.addEventListener("click", () => {
        loadMovies()
    })
    loadMovies()
    // harel want to do something here? it will be blocked? 
    // the answer is: 

}

async function loadMovies() {
    try {
        clearData()
        loader.style.display = "block"
        const moviesArray = await getMoviesApi()
        draw(moviesArray)

    } catch (ex) {
        alert("Harel - application")
    } finally {
        loader.style.display = "none"
    }
}

function clearData() {
    document.querySelector("#movies-content").innerHTML = "";

}
function draw(Movies) {
    if (!Array.isArray(Movies)) return
    clearData();
    const moviesContainer = document.querySelector("#movies-content")
    const moviesCards = Movies.map(movie => getSingleMovie(movie))
    moviesContainer.append(...moviesCards)
}

function getSingleMovie(movie) {
    if (typeof movie !== 'object') return;
    const singleMovieDiv = document.createElement("div")
    singleMovieDiv.id = movie.imdbID
    singleMovieDiv.classList.add("singleMovieDiv")
    const title = document.createElement("h3")
    const year = document.createElement("h5")
    const imdbID = document.createElement("h5")
    const type = document.createElement("h5")
    const poster = document.createElement("img")

    title.innerText = movie.Title
    year.innerText = "Year: " + movie.Year
    imdbID.innerText = "imdbID: " + movie.imdbID
    type.innerText = "Type: " + movie.Type
    poster.src = movie.Poster

    singleMovieDiv.append(title, year, imdbID, type, poster)
    return singleMovieDiv
}

async function initCountries() {

    const moviesArray = await getMoviesApi()


    // button.addEventListener("click", async () => {
    //     try {

    //         document.querySelector("#spinner").style.display = "block"
    //         const result = await fetch("https://restcountries.com/v3.1/all")
    //         // data returned from API 
    //         const data = await result.json()
    //         document.querySelector("#movies-content").innerText = `The number of countries is: ${data.length}`
    //         document.querySelector("#spinner").style.display = "none"
    //     } catch (error) {
    //         console.log(error)
    //         alert("Something went wrong")
    //     }
    // })

}

async function getMoviesApi(movieSearch = "scream") {
    const result = await fetch(API_URL + movieSearch, {
        method: "GET"
    })
    const data = await result.json()
    return data.Search;
}




initMovies()
initCountries()



