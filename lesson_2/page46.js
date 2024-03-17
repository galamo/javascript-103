function getClock(hours, min, sec) {
    if (hours < 24 && hours >= 0 && min >= 0 && min < 60 && sec >= 0 && sec < 60) {
        hours = ifNumberIsUnder10(hours)
        min = ifNumberIsUnder10(min)
        sec = ifNumberIsUnder10(sec)
        return hours + ":" + min + ":" + sec
    } else {
        return "Wrong input"
    }
}

function ifNumberIsUnder10(num) {
    if (num < 10) {
        num = "0" + num;
    }
    return num.toString();
}

console.log(getClock(12, 20, 55))
console.log(getClock(5, 20, 12))
console.log(getClock(6, 2, 55))
console.log(getClock(8, 1, 55))