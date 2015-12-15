var express = require("express");
var app = express();
var React = require("react");
var ReactDOMServer = require("react-dom/server");
var CalculatorElement = React.createFactory(require("./react/calculator"));


app.get("/", function (req, res) {
	res.send(ReactDOMServer.renderToStaticMarkup(

		CalculatorElement({})

	));
});

app.get("/:action/:numbera/:numberb", function (req, res) {

	res.send(ReactDOMServer.renderToStaticMarkup(

		CalculatorElement({
			"first-number": req.params.numbera,
			"second-number": req.params.numberb,
			"action": req.params.action,
		})

	));

});


var server = app.listen(80, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App Calculator listening at http://%s:%s', host, port);
});

