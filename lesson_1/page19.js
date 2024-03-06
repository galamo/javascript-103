// ex 6
console.log("=========================ex6=========================")
var developerName = "Bar"
var developerSalary = 4000

var newSalary10Present = parseInt(developerSalary * 1.1)
var newSalary5Present = parseInt(developerSalary * 1.05)

if (newSalary10Present > 6000) {
    console.log(developerName + " get raised 5% to: " + newSalary5Present) //true
} else {
    console.log(developerName + " get raised 10% to: " + newSalary10Present) //false
}