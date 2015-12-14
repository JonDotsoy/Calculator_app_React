var express = require("express");
var app = express();


app.get("/", function (req, res) {
	res.send("Wellcome to Calculator");
});


var server = app.listen(80, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App Calculator listening at http://%s:%s', host, port);
});

