async function deleteCountryApi(countryId) {
    const result = await fetch(`http://api-countries/${id}`, { method: "DELETE" })
    return result;
}


const arr = [
    { day: "Sunday", temp: 45, date: "2024-04-06" },
    { day: "Monday", temp: 24, date: "2024-04-06" },
    { day: "Tuesday", temp: 30, date: "2024-04-06" },
    { day: "Sunday", temp: 46, date: "2024-05-06" },
    { day: "Monday", temp: 24, date: "2024-05-06" },
    { day: "Tuesday", temp: 30, date: "2024-05-06" },
    { day: "Wed", temp: 22, date: "2024-05-06" },
    { day: "Monday", temp: 49, date: "2024-04-06" },
    { day: "Thursday", temp: 35, date: "2024-05-06" },
    { day: "Friday", temp: 24, date: "2024-05-06" },
    { day: "Saturday", temp: 40, date: "2024-05-16" },
    { day: "Sunday", temp: 33, date: "2024-05-06" },
    { day: "Monday", temp: 24, date: "2024-05-06" },
    { day: "Tuesday", temp: 30, date: "2024-05-06" },
    { day: "Wed", temp: 22, date: "2024-05-06" },
    { day: "Thursday", temp: 35, date: "2024-05-06" },
    { day: "Friday", temp: 21, date: "2024-05-06" },
    { day: "Saturday", temp: 16, date: "2024-05-06" },
    { day: "Sunday", temp: 24, date: "2024-05-06" },
    { day: "Monday", temp: 25, date: "2024-05-06" },
    { day: "Tuesday", temp: 39, date: "2024-05-06" },
    { day: "Wed", temp: 40, date: "2024-05-06" },
    { day: "Thursday", temp: 40, date: "2024-05-06" },
    { day: "Friday", temp: 24, date: "2024-05-06" },
    { day: "Saturday", temp: 11, date: "2024-05-06" }
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
        if (currentDay.temp > maxTempPerDayObj[currentDay.day]) {
            maxTempPerDayObj[currentDay.day] = currentDay.temp
        }
    } else {
        maxTempPerDayObj[currentDay.day] = currentDay.temp
    }
    return maxTempPerDayObj
}, {})
console.log("maxTempPerDay", maxTempPerDay)

const maxTempPerDayAndDate = arr.reduce((maxTempPerDayObj, currentDay) => {
    const key = currentDay.day + "_" + (Number(new Date(currentDay.date).getMonth()) + 1)
    if (maxTempPerDayObj[key]) {
        if (currentDay.temp > maxTempPerDayObj[key].temp) {
            maxTempPerDayObj[key] = { temp: currentDay.temp, date: currentDay.date }
        }
    } else {
        maxTempPerDayObj[key] = { temp: currentDay.temp, date: currentDay.date }
    }
    return maxTempPerDayObj
}, {})
console.log("maxTempPerDayAndDate", maxTempPerDayAndDate)

// result:
// const result = { "Sunday": 33, "Monday": 25, "Wed": 40 }....
0

// if you want to order your object values according date
// Object.values(result).sort((d1, d2) => { return new Date(d1.date).getTime() - new Date(d2.date).getTime() })



