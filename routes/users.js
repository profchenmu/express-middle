var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/info', function(req, res, next) {
	request.get('http://localhost:81/index', function(reqin, resin, nextin){
		console.log(reqin, resin);
		res.set('Content-tpye', 'text/html');
		res.end(resin.body);
	})
});

module.exports = router;
