
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
			case "+": return Number(a) + Number(b); break;
			case "-": return Number(a) - Number(b); break;
			case "x": return Number(a) * Number(b); break;
			case "/": return Number(a) / Number(b); break;
		}
		return 0;
	},

	componentWillReceiveProps: function (nexProps) {
		this.setState({
			fNumber: nexProps["first-number"],
			sNumber: nexProps["second-number"],
			action: nexProps["action"],
		});
	},

	changesValue: function (nameState, event) {
		var toState = {};
		toState[nameState] = event.target.value;

		if (typeof(this.props.onChange) == "function") {
			this.props.onChange(nameState, event.target.value);
		}

		this.setState(toState);
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
					DOM.input({placeholder: "Primer Numero", type: "number", onChange: this.changesValue.bind(this, "fNumber"), style: styleInput, value: this.state.fNumber})
				),
				DOM.div({className: "action"},
					DOM.select({style: styleInput, onChange: this.changesValue.bind(this, "action"), value: this.state.action},
						DOM.option({value: "+"}, "[+] Suma"),
						DOM.option({value: "-"}, "[-] Resta"),
						DOM.option({value: "x"}, "[x] Multiplicación"),
						DOM.option({value: "/"}, "[/] Dividir")
					)
				),
				DOM.div({className: "second-value"},
					DOM.input({placeholder: "Segundo Numero", type: "number", onChange: this.changesValue.bind(this, "sNumber"), style: styleInput, value: this.state.sNumber})
				),
				// Divider Results
				DOM.hr(null),
				DOM.div({className: "result"},
					DOM.input({placeholder: "Resultado", disabled: "disabled", style: styleInput, value: calculatedValue})
				)
			)
		);
	},
});


module.exports = calculator;
