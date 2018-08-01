var express = require('express');
var router = express.Router();

/* GET Contact */

router.get('/', function (request, response, next){
	response.render('contact');
});

module.exports = router;
