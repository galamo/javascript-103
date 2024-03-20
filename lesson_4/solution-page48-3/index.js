
var numberOfChecks = +prompt("Enter the number of checks")
var amountInDollar = +prompt("Enter the amount of checks")


function calcCheckFee(n) {
    var bankCheckFee = 0.1;
    return Math.ceil(n * bankCheckFee)
}
function calcDollarFee(a) {
    var bankMinDollarFee = 500
    var bankOverMinFee = 0.015
    var bankLowerMinFee = 0.01
    var totalFee = 0
    if (a > bankMinDollarFee) {
        totalFee += (a - bankMinDollarFee) * bankOverMinFee
        totalFee += bankLowerMinFee * bankMinDollarFee
    } else {
        totalFee += a * bankLowerMinFee
    }
    return totalFee
}

var calc1 = calcCheckFee(numberOfChecks);
var calc2 = calcDollarFee(amountInDollar)
console.log(`number of checks: ${numberOfChecks} total amount: ${amountInDollar} , 
total fee: ${calc1 + calc2} , total fee with amount: ${calc1 + calc2 + amountInDollar}`)