
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://34.245.214.226:27017/fp";
let lecturers;
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("fp");
  dbo.collection("lecturer").find({}).toArray(function(err, result) {
    if (err) throw err;

    lecturers = result;
    console.log(lecturers)
    db.close();

  });

});
