// var n = 1;
// var t = 1;

// while (n != 11) {
//     while (t != 11) {
//         console.log(`[n=${n}]=>[t=${t}]`)
//         t++
//     }
//     // init t
//     t = 1;
//     n++;
// }


var inputNum = +prompt("Enter number")

while (inputNum != 0) {
    while (inputNum > 10) {
        inputNum = parseInt(inputNum / 10)
    }
    console.log("the left digit is" + inputNum)
    inputNum = +prompt("Enter number")
}