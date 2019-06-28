var express = require('express');
var router = express.Router();
var restaurant = require('../controllers/restaurants');
var comment = require('../controllers/comments');

var category = require('../controllers/categories');

router.get('/', function(req, res, next) {
    category.listCategory(req,res,next);
});


module.exports = router;
  