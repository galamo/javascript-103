// ex 2
// var from = +prompt("Enter From number")
// var to = +prompt("Enter To number")
// for (let index = from; index <= to; index++) {
//     console.log(index)
// }

// ex 3
var nm = +prompt("Enter the number to get n! 1*2*3....n")
var result = 1;
for (let index = 1; index <= nm; index++) {
    result = result * index
}
console.log(result)