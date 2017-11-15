var express = require("express");
var app = express();
const bodyParser = require('body-parser');

app.use(express.static('client/build'));

app.use(bodyParser.json());

var database = require("./in-memory-database")();
database.init([
  {
    "name": "Works",
    "price": 10
  }
]);

app.get("/", function (req, res) {
  res.send(database.readAll());
});

app.post('/', function(req, res) {
    var newItem = req.body;
    database.create(newItem);
    res.send(database.readAll());
});


// app.delete("/", function (req, res) {
//   database.delete(database[0]);
//   res.send(database.readAll());
//   res.send("SUCCESS Deleting");
// });

var server = app.listen(4000, function () {
  var port = server.address().port;
  console.log("App's server listening at http://localhost:%s", port);
});
