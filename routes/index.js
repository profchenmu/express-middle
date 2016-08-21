var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
	request.get('http://localhost:81/index', function(reqin, resin, nextin){
		res.set('Content-tpye', 'application/json');
		res.end(resin.body);
	})
});

module.exports = router;
