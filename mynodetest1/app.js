/**
 * Module dependencies.
 */

var express = require('express'),
    routes = require('./routes');

var app = module.exports = express.createServer();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
    extended: false
}));

var myadd = require('./routes/add.js');


// Configuration

app.configure(function() {
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
});

app.configure('development', function() {
    app.use(express.errorHandler({
        dumpExceptions: true,
        showStack: true
    }));
});

app.configure('production', function() {
    app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);


app.post('/', function(req, res) {
    //console.log(req.body);
    var frameworkname = req.body.frameworkname;
    console.log("frameworkname = " + frameworkname); 
    myadd.addthis();
    res.render("add.jade");
})


//app.all('/test2', function(req, res){
//    if(req.method==='GET'){
//        // one response for GET requests
//    } if(req.method==='POST'){
// another response for POST requests
//    } else {
// catch all...PUT, DELETE, etc.
//    }
//});

app.listen(3000, function() {
    console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});