var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/nimhoon";
const Category = require('../models/category');

exports.listCategory = function(req,res,next){

    Category.find({},function(err,results){
        if(err) throw err;
        console.log(results);
        res.setHeader("Access-Control-Allow-Origin", '*');
        res.json(results);
    })
};