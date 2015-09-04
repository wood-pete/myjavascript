// Retrieve
var MongoClient = require('mongodb').MongoClient;


var user1 = {
    name: 'modulus admin',
    age: 42,
    roles: ['adminpeteaa', 'moderator', 'user']
};
var user2 = {
    name: 'modulus user',
    age: 22,
    roles: ['user']
};
var user3 = {
    name: 'modulus super admin',
    age: 92,
    roles: ['super-admin', 'admin', 'moderator', 'user']
};

var request = require("request");
request.get("http://127.0.0.1:8000", function (err, res, body) {
    if (!err) {
        var resultsObj = JSON.parse(body);
        //Just an example of how to access properties:
        console.log(resultsObj);

        
        for (var i = resultsObj.length - 1; i >= 0; i--) {
        	console.log(i,">>",resultsObj[i].name, resultsObj[i].age, resultsObj[i].roles);
        };
        console.log(resultsObj[0].name);
    }
});




// Connect to the db
/* 
MongoClient.connect("mongodb://localhost:27017/hellpete", function(err, db) {
    if (!err) {
        console.log("We are connected");
        var collection = db.collection('petescollection');
        collection.insert([user1, user2, user3], function(err, result) {
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

});
*/
