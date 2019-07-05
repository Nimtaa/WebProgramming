var express = require('express');
var router = express.Router();
var restaurant = require('../controllers/restaurants');
var comment = require('../controllers/comments');

var category = require('../controllers/categories');
var food = require('../controllers/foods');

router.get('/', function(req, res, next) {
    food.listFoodSet(req,res,next);
});


module.exports = router;
  