const express = require("express")

const app = express()

app.get("/hello-timeout", function (req, res, next) {
    setTimeout(() => {
        console.log("THIS IS TIMEOUT RESPONSE")
        res.json({ message: "THIS IS TIMEOUT" })
    }, 120 * 1000);
})

app.get("/hello-im", function (req, res, next) {
    res.json({ message: "THIS IS hello-im" })
})

app.listen(4500)