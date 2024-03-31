function init() {

    const booksListDiv = document.getElementById("booksList") // create the books list container
    booksListDiv.style.border = "1px solid black"
    booksListDiv.style.background = "pink"
    booksListDiv.style.textAlign = "center"
    // create book ui 
    // var singleBook = books[0]
    // var singleBook2 = books[1]

    // books.forEach(function (currentBook) {

    // })

    for (let index = 0; index < books.length; index++) {
        const currentBook = books[index];
        const bookContainerDiv = document.createElement("div") // create the single book container

        const bookTitleH3 = document.createElement("h3") // create header for title
        bookTitleH3.innerText = currentBook.title // insert the title from the Data into UI 

        const bookTitleH4 = document.createElement("h4") // create header for title
        bookTitleH4.innerText = currentBook.author
        bookTitleH4.style.background = "green"
        bookContainerDiv.append(bookTitleH3, bookTitleH4) // append title (h3) into single book container

        booksListDiv.append(bookContainerDiv) // append single book container into books list container
    }

}


init();