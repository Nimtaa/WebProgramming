const Restaurant = require('../models/restaurant');
const Food = require('../models/food');


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/nimhoon";


exports.listFoodSet = function(req,res,next){

    Food.find({},{'foodSet':1}).distinct('foodSet',function(err,results){
        if(err) throw err;
        res.setHeader("Access-Control-Allow-Origin", '*');
        res.json(results);
    })
};