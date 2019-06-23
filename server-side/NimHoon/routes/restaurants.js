
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/nimhoon";

router.get('/', function(req, res, next) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var query = { 'address.area': req.query.area };
        db.collection("restaurants").find(query).toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          db.close();
        });
      });
});
  
module.exports = router;
  