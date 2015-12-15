
var React = require("react");
var DOM = React.DOM;


var calculator = React.createClass({
	getInitialState: function () {
		return {
			fNumber: this.props["first-number"] || 0,
			sNumber: this.props["second-number"] || 0,
			action: this.props["action"] || "+",
		};
	},

	calculateValues: function (action, a, b) {
		switch (action) {
			case "+": return a + b; break;
			case "-": return a - b; break;
			case "x": return a * b; break;
			case "/": return a / b; break;
		}
		return 0;
	},

	render: function () {
		var styleContainer = {
			"margin": "0px 40px",
		};
		var styleInput = {
	    "width": "100%",
	    "backgroundColor": "white",
	    "margin": "20px 0px",
	    "padding": "10px",
	    "fontSize": "20px",
	    "color": "#464646",
	    "border": "solid 1px #868686",
		};
		var styleText = {
			textAlign: "center",
	    margin: "20px 0px",
	    fontSize: "20px",
	    fontFamily: "arial",
	    color: "#673AB7",
		};

		var calculatedValue = this.calculateValues(this.state.action, this.state.fNumber, this.state.sNumber);

		return (
			DOM.div({className: "calculator", style: styleContainer},

				// Optimisin Seo with a article element.
				DOM.article({style: styleText}, "Calculator: " + this.state.fNumber + " " + this.state.action + " " + this.state.sNumber + " = " + calculatedValue),

				// Container to firt value
				DOM.div({className: "first-value"},
					DOM.input({placeholder: "Primer Numero", type: "number", style: styleInput, defaultValue: this.state.fNumber})
				),
				DOM.div({className: "action"},
					DOM.select({style: styleInput, defaultValue: this.state.action},
						DOM.option({value: "+"}, "[+] Suma"),
						DOM.option({value: "-"}, "[-] Resta"),
						DOM.option({value: "x"}, "[x] Multiplicación"),
						DOM.option({value: "/"}, "[/] Dividir")
					)
				),
				DOM.div({className: "second-value"},
					DOM.input({placeholder: "Segundo Numero", type: "number", style: styleInput, defaultValue: this.state.sNumber})
				),
				// Divider Results
				DOM.hr(null),
				DOM.div({className: "result"},
					DOM.input({placeholder: "Resultado", disabled: "disabled", style: styleInput, defaultValue: calculatedValue})
				)
			)
		);
	},
});


module.exports = calculator;
