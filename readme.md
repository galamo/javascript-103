# Homework 6.3

- page 18 ex 5 (js)
- page 20 ex 4 (js)
- Page 27 (js+diagram)
  ex 2 , ex 3, Bonus: ex 5

# Homework 10.3

- page 28: ex 14, 16, 17
- page 31: ex 1, 2
- page 32: ex 4, 5

# Homework 13.3

- Write a function that receive 2 numbers and return the sum between the numbers
- Write a function that receive 2 numbers and return the max between the numbers
- Write a function that receive 3 numbers and return the min between the numbers
- Write a function that receive 2 names of products and return true if one of the products is "apple" otherwise the function will return false
- page 35, ex7, ex8
- page 36, ex15
- page 37, ex17, ex18
- page 48, ex1

# Class 17.3

1. Write a function that receive a string and check if the string length is longer than 20 characters, return "too long string", otherwise return the last character.
2. Write a function that receive from the user 10 cars and print only the first and the last car
3. create a function that push products into cart, 10 products & print the cart
4. create a function that push products into cart & delete a selected product from prompt.

# Homework 17.3

- page 44,45 Only read.
- page 48 , ex1,ex2,ex3
- watch JS records lessons

- page 37, ex18 - upload answer
- Michal upload answer

# Homework 20.3

- page 57 ex6
- page 57 ex7 - check only amount of strings or numbers or other.

```javascript
var input = [
  true,
  true,
  1,
  2,
  3,
  4,
  "s",
  "a",
  "!",
  "dkjhfd",
  () => {},
  "aaaaa",
  9375,
  {},
  [],
  {},
];
```

- page 57 ex8
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

# 27.3

- Create a function that receive a milesPerGalon number and return all the cars that are more economical than this milesPerGalon.
  example: input : 10
  output : [ { ...Miles_per_Gallon: 11 } ,{ ...Miles_per_Gallon: 15 } ]

## Homework

- Create a function that receive a book title and return a single book the first one.
- Create a function that receive a book author and return a single book the first one.

- each movie object has movieName:string, movieRating:number
- for example

```javascript
var singleMovie = { movieName: "armagedon", rating: 5 };
```

- write a function that input from user ( using prmopt ) 3 movies and push them to array.
- write a function that input from user rating number and return all the movies that higher than this rating
- write a function that delete a movie by movieName

- Go over MDN
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

- map
- find
- findIndex

# Ex 31.3

- Edit number of pages - write a function that recieve a book title & number pf pages and adding the new number of pages to the book.

# Ex 31.3

- Add a new element h4 with green background and insert into the new element (h4) the book author

# Homework 31.3

- complete the Book card by adding all the rest of paramters into the card.
  example:
  "country": "Nigeria",
  "imageLink": "images/things-fall-apart.jpg",
  "language": "English",
  "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart",
  "pages": 209,

        "year": 1958

# EX 3.4

- Support Select Or UnSelect in the select row button, if the row not selected the text should be: "Select" if the row already
  selected the text should be: "Unselect"

- Support Reset input, which will clean the input search & affect the UI.

# Homework 3.4

- Based on the following data ( Users ) , create an application that
  draw the users, support select, delete.
- in the draw section, create a userCard- user name, email, image, age, gender,
- advanced: search users


# Homework 7.4

Add to our existing users management the following features

1.  country select ( Select - option )
2.  delete all users button
3.  search by user name

# Ex 14.4

- Create a color picker.
- when selecting a color - the color will be saved in the local storage and the background will be changed according the color
- refresh will save the same color as background in the page.

# Ex 2 - 14.4

- support local storage in book store - lesson_8
- add to LS, get from LS
- remove from LS - add new button Clear ( delete all books ) localStorage.removeItem("books")



# Ex 1 - 17.4
- Create an object that represent your job `job`
- Copy the object to a new Job - `job2`
- Change the copied object.
- print both of them and see the differences 

# Homework  - 17.4
- setInterval - stop the counter on zero
- support reset button - the counter will return to 10 and the startCount will restart the operation


# Ex 1 - 1.5
- Create the following functionality in your page
- when the page loaded - wait 5 sec and load on the bottom an image ( some commercial for your selection)
- for example https://images.squarespace-cdn.com/content/v1/57e49a19414fb5b5169a9161/1544026619092-FO2GKZ9FKFRWF4BF0GFD/image002-tempweb.jpg

# Ex2 - 1.5
- Create the same page like in fetchApi ex, with diff URL
- url: https://randomuser.me/api/?results=300
- clicking the button `get random users` will fetch from the url the relevant users and show the number of users
- `the number of users is: 300`

# Homework 1.5 
- use the following api - https://www.omdbapi.com/
- first sign to the API using your Email and get an API key
- DONT USE MY KEY! 
- implement a search movie by title
- s paramter in the query should be equal to the user input, user typed scream so the url will look like the following:
- https://www.omdbapi.com/?apikey=PUT_HERE_YOUR_KEY&s=scream
- s paramter in the query should be equal to the user input, user typed frozen so the url will look like the following:
- https://www.omdbapi.com/?apikey=PUT_HERE_YOUR_KEY&s=frozen
- use fetch api to retrieve the result from OMDB ( with async await )
- draw the result as cards - each card = movie

# Ex1 - 8.5
- implement the function `getCountriesApi`

# Ex2 - 8.5 
1. refactor imdbID on each card to button
2. add event listener to the imdbID button
3. when clicking the button - execute fetch api ( http request ) with the foolowing url: 
https://www.omdbapi.com/?apikey=ffa5acbc&plot=full&i=<movie.imdbid> 
4. take the result and print to console.log
5. draw the plot inside the card 

# Homework - 8.5 
1. try to understand the pieChart code https://github.com/galamo/javascript-103/blob/piechart/lesson_13/fetchApi/index.js
2. complete Ex2


# Ex 1 - 15.5 
- Create a Movie Function constructor based on the IMDB lesson
`function Movie(.....){......}`
`const m = new Movie(....)`


