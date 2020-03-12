//Dependencies being brought in

const express = require("express");
const app = express();
const path = require('path');
const port = 6969;

//Middlewares being used
app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.json())

//Route Handling



//Connection

app.listen(port, () => {
    console.log("Connected on port 6969!");
});

