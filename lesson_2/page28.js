
var n = +prompt("Enter number");
var d = +prompt("Enter digit");
var numberOfAppearance = 0
// 22556636
// xxxx66x6
// 6
var t = n;
while (n !== 0) {
    var rightDigit = n % 10;
    console.log("rightDigit" + "(" + rightDigit + ")" + "===" + "d" + "(" + d + ")")
    if (rightDigit === d) {
        numberOfAppearance++;
    }
    console.log(n)
    n = parseInt(n / 10)

}
console.log("The number is: " + t)
console.log("The numberOfAppearance: " + numberOfAppearance)
