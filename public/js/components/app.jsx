var React = require('react'),
		Intro = require('./intro'),
		Nav = require('./nav'),
		Projects = require('./projects'),
		Contact = require('./contact');

var App = React.createClass({
	render() {
		return (
			<div>
				<Intro />
				<Nav />
				<Projects />
				<Contact />
			</div>
		);
	}
});

module.exports = App;