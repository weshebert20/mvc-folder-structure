var cargoGet = function(req, res) { //look at that controller
	res.sendFile(__dirname+'/cargoNew.ejs'); 
};

var cargoPost = function(req, res) { //and look at that controller
	Cargo.create({name: req.body.name, title: req.body.title}, function(error, cargo) {
		res.render('cargoShow', {cargo: cargo});
	});
};