console.log("=========================ex2=========================")
var num1 = 12
var num2 = 33
var num3 = 105

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
