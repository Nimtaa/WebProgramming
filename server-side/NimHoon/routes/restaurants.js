var express = require('express');
var router = express.Router();

var restaurant = require('../controllers/restaurants');
var comment = require('../controllers/comments');

router.get('/', function(req, res, next) {
    console.log(req.query);
    restaurant.list(req,res,next);
});
  
router.get('/:id',function(req,res,next){
   restaurant.listWithId(req,res,next);
});

router.get('/:id/comments',function(req,res,next){
    restaurant.getComments(req,res,next);
});

router.post('/',function(req,res){
    console.log(req.body);
    restaurant.create(req,res);
});

router.post('/:id/comments',function(req,res){
    console.log(req.body);
    comment.create(req,res);
});













module.exports = router;
  