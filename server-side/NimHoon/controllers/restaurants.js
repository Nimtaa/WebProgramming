const Restaurant = require('../models/restaurant');
const Address = require('../models/address');
const Comment = require('../models/comments');
const Food = require('../models/food');
const Category = require('../models/category');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/nimhoon";

exports.list = function(req,res,next){
    if(req.query.category){
        MongoClient.connect(url,  {useNewUrlParser: true},function(err, db) {
            if (err) throw err;
            var query = { 'area': req.query.area };
            
            const dbo = db.db('nimhoon');
            Address.find(query, function(err, docs) {
                // Map the docs into an array of just the _ids
                var addressOfRestaurant_id = docs.map(function(doc) { return doc._id; });
                Restaurant.find({'address': addressOfRestaurant_id,  
            }, function(err, docs) {
                    if(err) throw err;
                    console.log(docs);
                    db.close();
                });
            });
            
        });
    }
    else{
        console.log("request query: "+ req.query.area);
        MongoClient.connect(url,  {useNewUrlParser: true},function(err, db) {
            if (err) throw err;
            var query = { 'area': req.query.area };
            const dbo = db.db('nimhoon');
            Address.find(query, function(err, docs) {
                // Map the docs into an array of just the _ids
                var addressOfRestaurant_id = docs.map(function(doc) { return doc._id; });
                Restaurant.find({'address': addressOfRestaurant_id}, function(err, docs) {
                    if(err) throw err;
                    console.log(docs);
                    res.json(docs);
                    db.close();
                });
            });
            
        });
    }
};
exports.listWithId = function (req,res,next){
    var id = req.params.id;
    MongoClient.connect(url,  {useNewUrlParser: true},function(err, db) {
        if (err) throw err;
        var query = { 'id': id };
        const dbo = db.db('nimhoon')
        Restaurant.find(query).toArray(function(err, result) {
            if (err) throw err;  
            console.log("result: " + result);
            res.json(result);
            db.close();
        });
        });
};

exports.create = function(req,res){
    var newRestaurant = new Restaurant();
    newRestaurant.id = req.body.id;
    newRestaurant.name = req.body.name;
    newRestaurant.logo = req.body.name;
    newRestaurant.openingTime = req.body.openingTime;
    newRestaurant.closingTime = req.body.closingTime;
    newRestaurant.averageRate = req.body.averageRate;
    
    var newAddress = new Address();
    newAddress.id = req.body.address.id;
    newAddress.city = req.body.address.city;
    newAddress.area = req.body.address.area;
    newAddress.addressLine = req.body.address.addressLine;


    var FoodsArray = new Array();
    req.body.foods.forEach(f => {
        var newFood = new Food();
        newFood.id = f.id;
        newFood.name =f.name;
        newFood.price = f.price;
        newFood.description = f.description;
        newFood.foodSet = f.foodSet;
        FoodsArray.push(newFood);
        newRestaurant.foods.push(newFood);
    });
    
    

    var categoriesArray = new Array();
    req.body.categories.forEach(c => {
        var newCategory = new Category();
        newCategory.id = c.id;
        newCategory.name = c.name;
        categoriesArray.push(newCategory);
        newRestaurant.categories.push(newCategory);
    });
    newRestaurant.address = newAddress;
    
    newAddress.save(function(err){
        if(err){
            console.log(err);
            res.status(400).send('Unable to save Address to database');
        }else{
            categoriesArray.forEach(c => {
                c.save(function(err){
                    if(err){
                        console.log(err);
                        res.status(400).send('Problem with category');
                    }
                })
            });
            FoodsArray.forEach(f => {
                f.save(function(err){
                    if(err){
                        console.log(err);
                        res.status(400).send('Problem with Foods');
                    }
                })
            });
            newRestaurant.save(function(err){
                if(err){
                    console.log(err);
                    res.status(400).send('Unable to save Restaurant to database');
                }
                else{
                    console.log('Restaurant Added to the DataBase');
                }
            })
        }
    })
};


exports.getComments = function(req,res,next) {
    MongoClient.connect(url,  {useNewUrlParser: true},function(err, db) {
        if (err) throw err;
        var id = req.params.id;
        const dbo = db.db('nimhoon');
        var query = {'_id' : id};
        Restaurant.findOne(query, function(err, docs) {
            if(err) throw err;
            console.log(docs);
            var comment_id = docs.comments.map(function(doc) { return doc._id; });
            Comment.find({'_id':comment_id}, function(err, docs) {
                if(err) throw err;
                console.log(docs);
                res.json(docs);
                db.close();
            });
        });
        
    });
};



