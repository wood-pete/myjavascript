// Retrieve
var MongoClient = require('mongodb').MongoClient;


var user1 = {name: 'modulus admin', age: 42, roles: ['admin', 'moderator', 'user']};
var user2 = {name: 'modulus user', age: 22, roles: ['user']};
var user3 = {name: 'modulus super admin', age: 92, roles: ['super-admin', 'admin', 'moderator', 'user']};


// Connect to the db
MongoClient.connect("mongodb://localhost:27017/hellpete", function(err, db) {
	if(!err) {
	    console.log("We are connected");
	     var collection = db.collection('petescollection');
collection.insert([user1, user2, user3], function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log('Inserted %d documents into the "users" collection. The documents inserted with "_id" are:', result.length, result);
      }
      //Close connection
      db.close();
    });


	}
	 console.log("AFter error");
}
);