function getClock(hours, min, sec) {
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


}
