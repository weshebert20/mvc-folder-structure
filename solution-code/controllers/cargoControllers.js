var db = require('../models');

var cargoGet = function(req, res) { //look at that controller
	res.render('cargoNew'); 
};

var cargoPost = function(req, res) { //and look at that controller
	db.Cargo.create({description: req.body.description, title: req.body.title}, function(error, cargo) {
		res.render('cargoShow', {cargo: cargo});
	});
};

module.exports.cargoGet = cargoGet;
module.exports.cargoPost = cargoPost;