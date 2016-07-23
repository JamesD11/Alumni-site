var express= require('express');
var bodyParser= require('body-parser');

var connection = require('../config/sequelize.js');

var router = express.Router();

router.get('/allUsers', function(req, res) {
	connection.profiles.findAll({}).then(function(response){
		console.log(response);
		res.redirect('/');
	});
})

module.exports = router;