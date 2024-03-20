var numbers = [10, 20, 30, 65, 1, 4]


function checkIfItemInArrayIsSum(arrayOfNumbers) {
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        var sum = 0;
        for (let j = 0; j < arrayOfNumbers.length; j++) {
            if (i !== j) {
                sum = sum + arrayOfNumbers[j]
            }
        }
        if (sum === arrayOfNumbers[i]) {
            console.log("And the winner is: ", sum, i)
        }
    }
}

function sortNumbers(arrayOfNumbers) {
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        for (let j = 0; j < arrayOfNumbers.length; j++) {
            console.log(arrayOfNumbers)
            if (arrayOfNumbers[i] > arrayOfNumbers[j]) {
                // console.log(arrayOfNumbers)
                var swap = arrayOfNumbers[i]
                arrayOfNumbers[i] = arrayOfNumbers[j];
                arrayOfNumbers[j] = swap
            }
        }
    }
    return arrayOfNumbers
}

checkIfItemInArrayIsSum(numbers)
console.log(numbers)
console.log(sortNumbers(numbers))