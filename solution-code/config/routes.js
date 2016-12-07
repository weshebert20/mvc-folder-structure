var express = require('express');
var router = express.Router();

var cargoControllers = require('../controllers/cargoControllers');

//Cargo form
router.get('/cargo/new', cargoControllers.cargoGet);


//Add new cargo
router.post('/cargo', cargoControllers.cargoPost);

module.exports = router;