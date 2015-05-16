var React = require('react'),
		Nav = require('./nav'),
		Intro = require('./intro');

var App = React.createClass({
	render() {
		return (
			<div>
				<Intro />
				<Nav />
			</div>
		);
	}
});

module.exports = App;