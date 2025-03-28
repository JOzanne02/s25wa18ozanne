var express = require('express');
var router = express.Router();

/* GET fun fact. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Jackson Ozanne' });
});

module.exports = router;
