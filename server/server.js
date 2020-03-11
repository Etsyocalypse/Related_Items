//Dependencies being brought in

const express = require("express");
const App = express();
const path = require('path');

//Middlewares being used
App.use(express.static(path.join(__dirname, 'dist')));
App.use(express.json())

//Route Handling



//Connection

App.listen(6969, () => {
    console.log("Connected on port 6969!");
});

