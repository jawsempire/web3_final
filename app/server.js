console.log("Server Operating Under 100% Capacity, Sir...");

var express = require('express');
var path = require('path');
var app = express();

// Define the port to run on
app.set('port', process.env.PORT || 3000);

//app.use(express.static(path.join(__dirname, 'images')));


app.get('/', function(req, res){
    res.send(`<h1>howdy!</h1>`);

});


var server = app.listen(app.get('port'), function() {
  console.log(`Listening on port ${app.get('port')}`);

});
