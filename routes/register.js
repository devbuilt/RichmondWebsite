var express = require('express');
var router = express.Router();

/* GET SEARCH PAGE */

router.get('/', function (request, response, next){
	response.render('register');
});

module.exports = router;
