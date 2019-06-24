const Restaurant = require('../models/restaurant');
const Address = require('../models/address');
const Comment = require('../models/comments');
const Food = require('../models/food');
const Category = require('../models/category');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/nimhoon";

exports.create = function(req,res){

    var newComment = new Comment();
    newComment.id = req.body.id;
    newComment.author = req.body.author;
    newComment.quality = req.body.quality;
    newComment.packaging = req.body.packaging;
    newComment.deliveryTime = req.body.deliveryTime;
    newComment.text = req.body.text;
    newComment.created_at = req.body.created_at;

    var restaurant_id = req.params.id;
    var query = {'_id' : restaurant_id};
    MongoClient.connect(url,  {useNewUrlParser: true},function(err, db) {
    newComment.save(function(err){
        if(err){
            console.log(err);
            res.status(400).send('Problem with Comment');
        } 
        else{
            Restaurant.findOne(query,function(err,result){
                if(err) throw err;
                result.comments.push(newComment);
                result.save(function(err){
                    if(err) throw err;
                    console.log('Comment Added to the DataBase and Restaurant');
                    db.close();
                });
                });
            }
        });
    });
};