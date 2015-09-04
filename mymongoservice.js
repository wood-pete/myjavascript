// Retrieve
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

