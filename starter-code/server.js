//Set up Express
var express = require('express');
var app = express();

//Set up bodyParser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

//Set up DB -- look at those models
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/airport");
var Schema = mongoose.Schema;
var CargoSchema = new Schema({
    title: String,
    description: String
});
var Cargo = mongoose.model('Cargo', CargoSchema);

//Set up EJS -- look at those views
app.set('views', __dirname);
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

//Cargo form
app.get('/cargo/new', function(req, res) { //look at that controller
	res.render('cargoNew'); 
});

//Add new cargo
app.post('/cargo', function(req, res) { //and look at that controller
	Cargo.create({description: req.body.description, title: req.body.title}, function(error, cargo) {
		res.render('cargoShow', {cargo: cargo});
	});
});

//Start server
app.listen(3000, function() {
	console.log("Listening at http://localhost:3000");
});