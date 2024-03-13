function bermanPow(num1, num2) {
    return "num1=" + num1 + " pow num2=" + num2 + " result is: " + Math.pow(num1, num2)
}

function getMailCarrefur(userName) {
    return userName + "@Carrefur.com"
}

console.log(bermanPow(2, 2))
console.log(bermanPow(2, 3))
console.log(bermanPow(2, 4))
console.log(bermanPow(2, 5))
console.log(bermanPow(2, 6))

console.log(getMailCarrefur("bar"))
console.log(getMailCarrefur("sapir"))
console.log(getMailCarrefur("fredi"))
console.log(getMailCarrefur("michal"))


function getHelloMessage(firstName, lastName) {
    return "Hi " + firstName + " " + lastName
}

console.log(getHelloMessage("Orel", "B"))
console.log(getHelloMessage("Harel", "YesYouAreRight"))


function getCartAfterDiscount(totalPrice, discount) {
    return totalPrice - totalPrice * discount
}

console.log(getCartAfterDiscount(50, 0.1))
console.log(getCartAfterDiscount(300, 0.2))




