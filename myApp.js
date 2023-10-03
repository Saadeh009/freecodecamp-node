let express = require('express');
require('dotenv').config()
let app = express();
app.use("/public", express.static(__dirname + "/public"))

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.get("/json", (req, res) => {
    if (process.env.MESSAGE_STYLE !== 'uppercase') {
        res.json({message: "Hello json"})
    }
    else {
        res.json({message: "HELLO JSON"})
    }
})
console.log("Testing: ", process.env.MESSAGE_STYLE)



















 module.exports = app;
