// - Create a function that receive a book title and return a single book the first one.
// - Create a function that receive a book author and return a single book the first one.


function getBookByTitle(title) {
    // return single book 
}

function getBookByAuthor(author) {
    // return single book 
}

function getBookByCountry(country) {
    // return single book 
}

function getBookByLanguage(language) {
    // return single book 
}



function getBookByProp(prop, value) { // prop = author value = "Virginia Woolf" // // prop = title value = "Yuval hambulbal"
    for (let index = 0; index < books.length; index++) {
        var currentBook = books[index]; // { title: "aa" , author:"aa" , year:1123}
        if (currentBook[prop.toLowerCase()] === value.toLowerCase()) {
            return currentBook;
        }
    }
    console.log("end of function...")
    // return single book
}

function getSingleBookByProp(prop, value) { // prop = author value = "Virginia Woolf" // // prop = title value = "Yuval hambulbal"
    var result = books.find(function (currentBook) { return currentBook[prop.toLowerCase()].toLowerCase() === value.toLowerCase() })
    return result

    // short way 
    books.find((currentBook) => currentBook[prop.toLowerCase()].toLowerCase() === value.toLowerCase())

}

var movies = [
    { movieName: "Shrek", rating: 5 },
    { movieName: "Star wars", rating: 4 },
    { movieName: "I know what you did last summer", rating: 5 }
]

function getHighRatingMovies(rating, moviesArray) {
    // if (typeof rating !== 'number') return; // use this if you get the number from some other function
    if (isNaN(Number(rating))) return;
    if (!Array.isArray(moviesArray)) return;
    return moviesArray.filter(function (currentMovie) { return currentMovie.rating > rating })
}

function deleteMovieByName(name, moviesArray) { // "This is Movie NAME" 
    if (typeof name !== 'string') return;
    if (!Array.isArray(moviesArray)) return;
    var movieNameToLower = name.toLowerCase() // "this is movie name" 
    var indexToDelete = moviesArray.findIndex(function (currentMovie) { return currentMovie.movieName.toLowerCase() === movieNameToLower })
    if (indexToDelete > -1) {
        moviesArray.splice(indexToDelete, 1)
    }
}

function editBookByTitle(title, year, booksArray) {
    if (typeof title !== 'string') return;
    if (isNaN(Number(year))) return;
    if (!Array.isArray(booksArray)) return;

    var singleBook = books.find(function (currentBook) { return currentBook.title.toLowerCase() === title.toLowerCase() })
    if (singleBook) {
        singleBook.year = year
    }
}