var numbers = [2, 3, 4, 5, 6, 5, 4, 6, 3, 23, 43, 5, 4, 3]
console.log(numbers)
function moveEvenToRight(numbers) {
    var odd = [];
    var even = [];
    for (let index = 0; index < numbers.length; index++) {
        if (numbers[index] % 2 === 0) {
            even.push(numbers[index])
        } else {
            odd.push(numbers[index])
        }
    }
    return odd.concat(even)
}
console.log(moveEvenToRight(numbers))


