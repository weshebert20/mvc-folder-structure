//requiring from models folder (index.js)
var db = require('../models');

//make the middleware a function by making it a var
var cargoGet = function(req, res) {
	res.render('cargoNew'); 
};


var cargoPost = function(req,res){
	db.Cargo.create({description: req.body.description, title: req.body.title}, function(error, cargo) {
		res.render('cargoShow', {cargo: cargo});
	});
};

module.exports.cargoGet = cargoGet;
module.exports.cargoPost = cargoPost;