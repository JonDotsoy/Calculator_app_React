var React = require("react");
var DOM = React.DOM;


var HTML = React.createClass({
	render: function () {

		return (DOM.html(null,
			DOM.head(null,
				DOM.script({src: "https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"}),
				DOM.script({src: "https://jspm.io/system@0.19.js"})
			),
			DOM.body(null,
				DOM.div({id: "app-calculator"}, this.props.children),
				DOM.script({type: "text/babel", src: "/app.js"})
			)
		));

	}
})


module.exports = HTML;

