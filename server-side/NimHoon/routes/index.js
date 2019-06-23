var express = require('express');
var router = express.Router();


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/testdb";

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  MongoClient.connect(url,function(err,db){
    // if(err) throw err;
    console.log("Database Created");
    db.close();
  });
});

module.exports = router;
