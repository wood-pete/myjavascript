
// Retrieve the data back from MongoDB
var MongoClient = require('mongodb').MongoClient;
// Connect to the db
MongoClient.connect("mongodb://localhost:27017/hellpete", function(err, db) {
    if (!err) {
        console.log("We are connected");
        var collection = db.collection('petescollection');


      collection.find().toArray(function(err2, doc) {
      
           if (doc != null) {
              console.log("From the DB");
                //console.dir(doc);
                for (var i = doc.length - 1; i >= 0; i--) {
                        console.log("Record",i);
                        console.log(doc[i].name);
                    };    


                db.close(); 
            } else {
                console.log("Error retrieving", err2);
            }
        }

   );

       

}
     
});

//Create a service to serve up the data
var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");

