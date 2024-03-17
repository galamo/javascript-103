var text = prompt("Please enter your text")


function isTextLong(t) {
    if (t.toString().length > 20) {
        return "Text is too long"
    } else {
        return t.charAt(t.toString().length - 1)
    }
}

var result = isTextLong(text)
console.log(result)