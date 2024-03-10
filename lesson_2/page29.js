
var totalTemp2000 = 0;
var numOfDays = 3
var numOfDaysAvg = numOfDays;

while (numOfDays > 0) {
    var currentTemp = +prompt("Enter July 2000 Temperature " + numOfDays)
    totalTemp2000 = totalTemp2000 + currentTemp
    numOfDays--;
}
var averageTempInJuly2000 = parseInt(totalTemp2000 / numOfDaysAvg)
console.log("The average temperature July 2000 is: " + averageTempInJuly2000);

var numOfDays2001 = 3
while (numOfDays2001 > 0) {
    var date = prompt("Enter July 2001 Day " + numOfDays2001)
    var currentTemp = +prompt("Enter July 2001 Temperature " + numOfDays2001)
    if (currentTemp > averageTempInJuly2000) {
        console.log(date, currentTemp)
    }
    numOfDays2001--;
}

