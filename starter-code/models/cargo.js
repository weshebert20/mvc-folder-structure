//testing
console.log("cargo.js, checking in!");

//must require mongoose on every model page
var mongoose = require('mongoose');

//schema
var Schema = mongoose.Schema;
var CargoSchema = new Schema({
    title: String,
    description: String
});

//model
var Cargo = mongoose.model('Cargo', CargoSchema);

//activate (or export) the variable 

module.exports = Cargo;