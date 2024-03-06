console.log("=========================ex2=========================")
var num1 = Number(prompt("Enter the first number"))
var num2 = Number(prompt("Enter the second number"))
var num3 = Number(prompt("Enter the third number"))

if (num2 > num1) {
    if (num3 > num2) {
        console.log("Increasing....")
    } else {
        console.log("Not Increasing....")
    }
} else {
    console.log("Not Increasing....")
}

if (num2 > num1 && num3 > num2) {
    console.log("Increasing....")
} else {
    console.log("Not Increasing....")
}
