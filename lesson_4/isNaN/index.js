
var numberOfChecks = +prompt("Enter the number of checks")
var amountInDollar = +prompt("Enter the amount of checks")

if (isNaN(numberOfChecks)) {
    console.log("Something went wrong - numberOfChecks")
}
if (isNaN(amountInDollar)) {
    console.log("Something went wrong - amountInDollar")
}

if (isNaN(numberOfChecks) || isNaN(amountInDollar)) {
    console.log("Something went wrong - check your input")
}



