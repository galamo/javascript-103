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


# Ex 2 - 15.5 
- Create a class - FootbalTeam
- `class FootballTeam {....}`
- `new FootballTeam(....)`
- name, colors, players, play(), tableLocation, year, signedFansNumber, stadium


# Homework
1. Create another pie chart with year aggregation
for example:
`{ 1998: 2, 2000: 3 , 2004: 3}`

# Ex1 - 19.5
- Use the following API: https://jsonplaceholder.typicode.com/guide/
- Use Our code & change the Create/Post to Update/PUT, try to update a POST 
- Add another UI elements for this exercise 

# Ex2 - 19.5
- Based on countries API
- Try to aggregate currencyPopularity { USD: 30 , ILS: 1 , EUR: 50 , GBP: 2}



# Homework - 19.5
- according the following API: https://jsonplaceholder.typicode.com/
explore + use the following entries
PATCH	/posts/1 - explain me next lesson why do we need it ( Especialy Michal Sivan)
DELETE	/posts/1

- Based on countries API
- Try to aggregate countries by languages { english: 30 , hebrew: 1}
- present the top 10 in piechart


# Ex - 1 22.5
- create new project
- load jquery + jquery ui libraries
- create a sortable plan list for your vacation 
- input: task description , image: link to the image of te relevant place you want to visit
- button - create task, will append new list item to the list
- the list should be sortable according your priority

# Homework
1. watch the following: 
- https://www.youtube.com/watch?v=QhQ4m5g2fhA
- https://www.youtube.com/watch?v=2n5EBLBHx-A

2. try to sign to a free api layer: https://apilayer.com/?utm_source=google&utm_medium=cpc&utm_campaign=apilayer_search_mena&gad_source=1&gclid=EAIaIQobChMItteahO-hhgMVeJFoCR3sXQ4REAAYASAAEgLZe_D_BwE
- choose an API and search for GET request that present a data, fetch the data from API and draw it on the UI.
- feel free to add any kind of functionalities you want.

# Material
- Async operations in JS
- https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing
- https://www.youtube.com/watch?v=vn3tm0quoqE
- https://www.youtube.com/watch?v=9j1dZwFEJ-c
- https://www.youtube.com/watch?v=_9vgd9XKlDQ
- Reduce function in JS
- https://www.youtube.com/watch?v=s1XVfm5mIuU
- https://www.youtube.com/watch?v=g1C40tDP0Bk


# Homework
-  ex1 page 61 - [מצגת סיבוכיות](https://t2k-pap-prod-assets.s3.eu-west-1.amazonaws.com/public/e6397bca-cda9-4986-86d9-992a34885a9c/b36c071d-e6a2-4901-8393-b390467170c1/t2k-uncompressed/T_2_Q_6045053071_27906___%D7%9E%D7%A6%D7%92%D7%AA_%D7%A1%D7%99%D7%91%D7%95%D7%9B%D7%99%D7%95%D7%AA_28_06.pdf)


# Homework 
- what is event loop and JS execution
- http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coInN0YXJ0aW5nIHRoZSBzY3JpcHQiKQoKY29uc29sZS5sb2coInN0YXJ0aW5nIHRoZSBzY3JpcHQiKQpjb25zb2xlLmxvZygic3RhcnRpbmcgdGhlIHNjcmlwdCIpCmNvbnNvbGUubG9nKCJzdGFydGluZyB0aGUgc2NyaXB0IikKY29uc29sZS5sb2coInN0YXJ0aW5nIHRoZSBzY3JpcHQiKQpjb25zb2xlLmxvZygic3RhcnRpbmcgdGhlIHNjcmlwdCIpCmNvbnNvbGUubG9nKCJzdGFydGluZyB0aGUgc2NyaXB0IikKY29uc29sZS5sb2coInN0YXJ0aW5nIHRoZSBzY3JpcHQiKQpjb25zb2xlLmxvZygic3RhcnRpbmcgdGhlIHNjcmlwdCIpCmNvbnNvbGUubG9nKCJzdGFydGluZyB0aGUgc2NyaXB0IikKCmZ1bmN0aW9uIGZldGNoRnJvbUFwaSgpewogICAgc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coImNhcnMgZnJvbSBzZXJ2ZXIhIik7Cn0sIDUwMDApOwp9CgpmZXRjaEZyb21BcGkoKQoKZnVuY3Rpb24gZmV0Y2hGcm9tQXBpMigpewoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coInVzZXJzIGZyb20gc2VydmVyISIpOwp9LCAyMDAwKTsKfQpmZXRjaEZyb21BcGkyKCkKCmZ1bmN0aW9uIGhlbGxvKCl7CiAgICBjb25zb2xlLmxvZygiaGVsbG8iKQogICAgYnllYnllKCkKICAgIAp9CmZ1bmN0aW9uIGJ5ZWJ5ZSgpewogICAgY29uc29sZS5sb2coImJ5ZSBieWUiKQogICAgd2h5QnllYnllKCkKfQoKZnVuY3Rpb24gd2h5QnllYnllKCl7CiAgICBjb25zb2xlLmxvZygid2h5IGJ5ZSBieWUgPz8%2FPyBwbGVhc2Ugbm8uLi4iKQp9CmhlbGxvKCkKCgpjb25zb2xlLmxvZygiRW5kIHRvIGxvdXBlLiIpOw%3D%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

# Complexity
- https://www.youtube.com/watch?v=itn09C2ZB9Y&pp=ygUYamF2YXNjaXBydCBjb21wbGV4aXR5IE9u
- https://www.youtube.com/watch?v=KXAbAa1mieU


# Ex1 - 29.5
- queue implementation in JS:
1. enqueue - O(1)
2. dequeue - O(n)

- how to implement queue in JS, with enqueue/dequeue of O(1)\\

# Ex2 + homework - 29.5
- Authentication system
- each user that makes a login should receive a session ( session can be a random number - huge one OR generated timestamp with random number) 
```js
const session = new Date().getTime() + "_" +  Math.ceil(Math.random() * 9999)
```
- When a user wants to do an action we need to check with O(1) if he authorized to do it
- implement 2 functions
1. `login(username, password)` - already done ( return session in case the login succeeded)
2. `doSomething(session)` - check if the session exist & active ( not older than 1 min) - O(1)

- How can i validate the user with expiration of 1 min? 
- When should we delete the session from the `sessionsObj`  ? 
