var express = require('express');
var router = express.Router();

/* GET TEAM PAGE */

router.get('/', function (request, response, next){
	response.render('teams'});


module.exports = router;
