console.log("JS lesson_2")

// page 27 ex 5

var inputFromUser = Number(prompt("Enter positive number - -99 will exit"));
var sum = 0;
while (inputFromUser !== -99) {
    if (inputFromUser > 0) {
        sum = sum + inputFromUser;
    }
    inputFromUser = Number(prompt("Enter positive number - -99 will exit"));
}
console.log("the sum is: " + sum)
