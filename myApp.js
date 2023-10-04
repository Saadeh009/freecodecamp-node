let express = require('express');
require('dotenv').config()
let app = express();
app.use("/public", express.static(__dirname + "/public"))

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
console.log("Testing: ", process.env.MESSAGE_STYLE)



















 module.exports = app;
