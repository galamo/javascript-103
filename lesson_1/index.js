// var/let/const

// text - "text" / 'text' / `text` => they are all strings
// number - 1,2,3.4, 
// boolean - true/false 
// null/undefined/object

// var => let/const

var userName = "adi.s@gmail.com";
var age = 25;
var isSmoking = true;


console.log("the user name:" + userName + "age is: " + age + " smoking :" + isSmoking)


var num = 18;
var asarot = parseInt(num / 10) // parseInt(2) => 2 , parseInt(2.1) => 2 , parseInt(2.5) => 2 
var ahadot = num % 10;
var newNum = (ahadot * 10) + asarot
console.log(newNum)

