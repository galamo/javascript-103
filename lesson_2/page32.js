var inputNum = +prompt("Enter number")
var totalSumDigits = 0
while (inputNum > 0) {
    totalSumDigits = 0;
    var temp = inputNum;
    while (inputNum != 0) {
        var currentDigit = inputNum % 10;
        totalSumDigits = totalSumDigits + currentDigit
        inputNum = parseInt(inputNum / 10)
    }
    console.log("the sum of number " + temp + "res:" + totalSumDigits)
    inputNum = +prompt("Enter number")
}