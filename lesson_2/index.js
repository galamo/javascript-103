console.log("JS lesson_2")

// page 27 ex 5

// var inputFromUser = +prompt("Enter positive number - -99 will exit");
// var sum = 0;
// while (inputFromUser !== -99) {
//     if (inputFromUser > 0) {
//         sum = sum + inputFromUser;
//     }
//     inputFromUser = +(prompt("Enter positive number - -99 will exit"));
// }
// console.log("the sum is: " + sum)

// page 27 ex 6

// var currentGrade = +prompt("Enter the students grades -0- will exit");
// var sum = 0;
// var numberOfStudents = 0;
// while (currentGrade !== 0) {
//     if (currentGrade > 0) {
//         sum = sum + currentGrade;
//         numberOfStudents = numberOfStudents + 1
//     }
//     currentGrade = +(prompt("Enter the students grades -0- will exit"));
// }
// console.log("the sum is: " + sum)
// console.log("the number of students is: " + numberOfStudents)
// var average = parseInt(sum / numberOfStudents)
// console.log("the average is: " + average)

//  page 27 ex 7

// var n = +prompt("Enter number");
// var max = 0;
// var index = 0
// var maxIndex = 0
// while (n > 0) {
//     if (n > max) {
//         max = n;
//         maxIndex = index
//     }
//     index = index + 1;
//     n = +(prompt("Enter number"));
// }

// console.log("the max number is: " + max + "  and the index is: " + maxIndex)


//  page 27 ex 10


var n = +prompt("Enter number");
var numberOfDigits = 1
while (n >= 10) {
    numberOfDigits++;
    n = parseInt(n / 10)
}
console.log("The number is: " + n)
console.log("The number of n digits: " + numberOfDigits)
