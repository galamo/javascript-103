function insertCars(numOfCars) {
    if (typeof numOfCars !== 'number') return
    var cars = [];
    for (let index = 0; index < numOfCars; index++) {
        var currentCar = prompt("enter car name")
        cars.push(currentCar)
    }
    console.log(cars[0])
    console.log(cars[cars.length - 1])
    return [cars[0], cars[cars.length - 1]]
}

var result = insertCars(5) //[a,b]
console.log(result)
