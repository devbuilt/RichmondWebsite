var express = require('express');
var router = express.Router();

/* GET SEARCH PAGE */

router.get('/', function (request, response, next){
	responose.render('about');
});

module.exports = router;
