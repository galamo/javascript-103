async function deleteCountryApi(countryId) {
    const result = await fetch(`http://api-countries/${id}`, { method: "DELETE" })
    return result;
}


const arr = [
    { day: "Sunday", temp: 45 },
    { day: "Monday", temp: 24 },
    { day: "Tuesday", temp: 30 },
    { day: "Wed", temp: 22 },
    { day: "Thursday", temp: 35 },
    { day: "Friday", temp: 24 },
    { day: "Saturday", temp: 40 },
    { day: "Sunday", temp: 33 },
    { day: "Monday", temp: 24 },
    { day: "Tuesday", temp: 30 },
    { day: "Wed", temp: 22 },
    { day: "Thursday", temp: 35 },
    { day: "Friday", temp: 21 },
    { day: "Saturday", temp: 16 },
    { day: "Sunday", temp: 24 },
    { day: "Monday", temp: 25 },
    { day: "Tuesday", temp: 39 },
    { day: "Wed", temp: 40 },
    { day: "Thursday", temp: 40 },
    { day: "Friday", temp: 24 },
    { day: "Saturday", temp: 11 }
]
// sum=0
// currentDay = { day: "Monday", temp: 24 },
const sumAllTemps = arr.reduce((sum, currentDay) => {
    sum = sum + currentDay.temp
    return sum
}, 0)
console.log("sumAllTemps", sumAllTemps)

const maxTempForSunday = arr.reduce((sundayMaxTemp, currentDay) => {
    if (currentDay.day === "Sunday") {
        if (currentDay.temp > sundayMaxTemp) {
            sundayMaxTemp = currentDay.temp
        }
    }
    return sundayMaxTemp
}, 0)
console.log("maxTempForSunday", maxTempForSunday)

const maxTempPerDay = arr.reduce((maxTempPerDayObj, currentDay) => {
    if (maxTempPerDayObj[currentDay.day]) {
        // 
    } else {
        maxTempPerDayObj[currentDay.day] = currentDay.temp
    }
    return maxTempPerDayObj
}, {})
console.log("maxTempPerDay", maxTempPerDay)
// result:
// const result = { "Sunday": 33, "Monday": 25, "Wed": 40 }....
0

// if you want to order your object values according date
// Object.values(result).sort((d1, d2) => { return new Date(d1.date).getTime() - new Date(d2.date).getTime() })