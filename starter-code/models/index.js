//test the index.js
console.log("index.js, checking in!");


//mongoose
//Set up DB -- look at those models
var mongoose = require("mongoose");
//create airport db
//mongo
mongoose.connect("mongodb://localhost/airport");

//export and require the cargo.js
module.exports.Cargo = require('./cargo.js');

//must connect index.js to server.js