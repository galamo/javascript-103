let intervalId = 0;
let count = 10
function init() {
    document.getElementById("count").innerText = count;
    // intervalId = setInterval(() => {
    //     alert("You want to see our new sales?")
    // }, 5000);

}

function stopSalesMessage() {
    clearInterval(intervalId)
}

function startCount() {
    intervalId = setInterval(() => {
        
        count = count - 1;
        document.getElementById("count").innerText = count;
    }, 1000);
}

init();