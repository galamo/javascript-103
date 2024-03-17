
var p1 = prompt("Enter the first product")
var p2 = prompt("Enter the second product")

function isProductApple(m, mm) {
    if (m.toString().toLowerCase() === "apple" || mm.toString().toLowerCase() === "apple") {
        return true;
    }
    return false;
}

var result = isProductApple(p1, p2)
console.log("the result is " + result)
