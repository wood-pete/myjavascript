
// Retrieve the data back from MongoDB
var MongoClient = require('mongodb').MongoClient;
// Connect to the db


//Create a service to serve up the data
var http = require('http');

//var sendDocument = { myrecords : [] };


// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  //  sendDocument.myrecords.push({ hello : "there"});
  response.writeHead(200, {"Content-Type": "application/json"});

 //Beginning of databases
 MongoClient.connect("mongodb://localhost:27017/hellpete", function(err, db) {
    if (!err) {
        //console.log("We are connected");
        var collection = db.collection('petescollection');
        var sendDocument = [];

      collection.find().toArray(function(err2, doc) {
      
           if (doc != null) {
              //console.log("From the DB");

                sendDocument.push(doc);
                response.end(JSON.stringify(doc));
                //console.log(JSON.stringify(doc));
                //console.dir(doc);
                //for (var i = doc.length - 1; i >= 0; i--) {
                        //console.log("Record",i);
                        //console.log(doc[i]);
                        //sendDocument.myrecords.push(doc[i]);
                 //   };    


                db.close(); 
            } else {
                console.log("Error retrieving", err2);
            }
        }

   ); 

       

} 
     
});
//End of Database selection



});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");

