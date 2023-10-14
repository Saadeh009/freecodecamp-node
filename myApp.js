require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser')


const app = express();
app.use(bodyParser.urlencoded({extended: false}))
app.use("/public", express.static(__dirname + "/public"))

// function middlewareTest(req, res, next) {
//     console.log(`${req.method} ${req.path} - ${req.ip}`)
//     next();
//   }

// app.use(middlewareTest)

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

app.get('/now', function(req, res, next) {
    req.time = new Date().toString()
    next()
  }, function(req, res) {
    res.json({time: req.time})
  });

app.get("/:word/echo", (req, res) => {
    const word = req.params.word
    res.json({echo: word})
})

app.get("/name", (req, res) => {
    let {first, last} = req.query
    res.json({name: `${first} ${last}`})
})












 module.exports = app;
