function getClock(hours, min, sec) {
    if (hours < 24 && hours >= 0 && min >= 0 && min < 60 && sec >= 0 && sec < 60) {
        if (hours < 10) {
            hours = "0" + hours
        }
        if (min < 10) {
            min = "0" + min
        }
        if (sec < 10) {
            sec = "0" + sec
        }
        return hours + ":" + min + ":" + sec
    } else {
        return "Wrong input"
    }
}

console.log(getClock(12, 20, 55))
console.log(getClock(5, 20, 12))
console.log(getClock(6, 2, 55))
console.log(getClock(8, 1, 55))