var React = require('react'),
		Intro = require('./intro'),
		Nav = require('./nav'),
		Projects = require('./projects');

var App = React.createClass({
	render() {
		return (
			<div>
				<Intro />
				<Nav />
				<Projects />
			</div>
		);
	}
});

module.exports = App;