var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/nimhoon";
var restaurant = require('../controllers/restaurants');

router.get('/', function(req, res, next) {
    if(req.query.category){
        MongoClient.connect(url, {useNewUrlParser:true},function(err,db){
            if(err) throw err;
            console.log(typeof(req.query.category));
            var array = new Array();
            array = req.query.category;
            console.log("array :"+ array);
            // var query = {'address.area':req.query.area,{categories.name: {$in:[array]}}};
            const dbo = db.db('nimhoon');
            dbo.collection('restaurants').find(query).toArray(function(err, result) {
                if (err) throw err;
                console.log("result: " + result);
                db.close();
            });
        });
    }
    else{
        console.log("request query: "+req.query.area);
        MongoClient.connect(url,  {useNewUrlParser: true},function(err, db) {
            if (err) throw err;
            var query = { 'address.area': req.query.area };
            const dbo = db.db('nimhoon')
            dbo.collection('restaurants').find(query).toArray(function(err, result) {
                if (err) throw err;
                console.log("result: " + result);
                db.close();
            });
            });
    }
    
});
  

router.get('/:id',function(req,res,next){
    var id = req.params.id;
    MongoClient.connect(url,  {useNewUrlParser: true},function(err, db) {
        if (err) throw err;
        var query = { '_id': id };
        const dbo = db.db('nimhoon')
        dbo.collection('restaurants').find(query).toArray(function(err, result) {
            if (err) throw err;
            console.log("result: " + result);
            db.close();
        });
        });
});


router.post('/',function(req,res){
    console.log(req.body);
    restaurant.create(req,res);
});












module.exports = router;
  