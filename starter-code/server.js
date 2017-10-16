//Set up Express
var express = require('express');
var app = express();

//Set up bodyParser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


//Set up EJS -- look at those views--connect to views folder with +
app.set('views', __dirname + "/views");
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

//connect routes.js

// create variable to find routes
var routes = require(__dirname + '/config/routes');
//then we can use them ...app.use(where, what)
app.use('/', routes);

//Start server
app.listen(3000, function() {
	console.log("Listening at http://localhost:3000");
});