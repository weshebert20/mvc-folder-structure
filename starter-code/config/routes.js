//also need to add express
var express = require('express');

//need router in routes file
var router = express.Router();

//connect with controller
var cargoControllers = require('../controllers/cargoControllers');

//cargo routes
//Cargo form change from app to router
router.get('/cargo/new', cargoControllers.cargoGet);

//Add new cargo/change app to router
router.post('/cargo', cargoControllers.cargoPost);

//export every route
module.exports = router;