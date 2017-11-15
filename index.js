var express = require("express");
var app = express();
const bodyParser = require('body-parser');

app.use(express.static('client/build'));

app.use(bodyParser.json());

var database = require("./in-memory-database")();
database.init([

]);


app.get('/api/items', function(req, res) {
    res.send(database.readAll());
});


app.post('/api/items', function(req, res) {
    var newItem = req.body;
    database.create(newItem);
    res.send("SUCCESS");
});


app.delete('/api/items/:id', function(req, res) {
    var id = req.params.id;
    database.delete(id);
    res.send("SUCCESS");
});


var server = app.listen(3001, function () {
  var port = server.address().port;
  console.log("App's server listening at http://localhost:%s", port);
});
