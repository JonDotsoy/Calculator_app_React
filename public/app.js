System.config({
});

System.import("/react/calculator.js").then(function (calculator) {
	System.import("react").then(function (React) {
		System.import("react-dom").then(function (ReactDOM) {
			window.ReactDOM = ReactDOM;
			window.app = calculator;
			window.React = React;
			console.log("OK Load");

			ReactDOM.render(React.createElement(calculator, null), document.getElementById("app-calculator"));
		})
	});
});

