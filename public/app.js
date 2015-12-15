System.config({
});


Promise.all([
	System.import("/react/calculator.js"),
	System.import("react"),
	System.import("react-dom"),
	System.import("page"),
]).then(function (imports) {
	var calculator = imports[0]
	var React = imports[1]
	var ReactDOM = imports[2]
	var page = imports[3]

	window.ReactDOM = ReactDOM;
	window.app = calculator;
	window.React = React;
	window.page = page;

	page("/:action/:numbera/:numberb", function (req, next) {});

	var findparameterByRegexp = /^\/(.+)\/(.+)\/(.+)$/.exec(document.location.pathname);

	var action = findparameterByRegexp[1];
	var numbera = findparameterByRegexp[2];
	var numberb = findparameterByRegexp[3];

	var changeValue = function (type, value) {
		switch (type) {
			case "action": action = (value||"+"); break;
			case "fNumber": numbera = (value||0); break;
			case "sNumber": numberb = (value||0); break;
		}
		page("/" + encodeURIComponent(action) + "/" + numbera + "/" + numberb);
	}

	ReactDOM.render(React.createElement(calculator, {
		"first-number": numbera,
		"second-number": numberb,
		"action": action,
		"onChange": changeValue,
	}), document.getElementById("app-calculator"));

	console.log("OK Load");

})

