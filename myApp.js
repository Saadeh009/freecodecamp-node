require('dotenv').config()
let express = require('express');
let app = express();

app.use("/public", express.static(__dirname + "/public"))

function middlewareTest(req, res, next) {
    console.log(`${req.method} ${req.path} - ${req.ip}`)
    next();
  }

app.use(middlewareTest)

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.get("/json", (req, res) => {
    let response = ''
    if (process.env.MESSAGE_STYLE === 'uppercase') {
        response = "Hello json".toUpperCase()
    }
    else {
        response = "Hello json"
    }
    res.json({message: response})
})
















 module.exports = app;
