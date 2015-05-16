var React = require('react'),
		data = require('../../data.json');

var NavList = React.createClass({
	render: function() {
		var navItems = this.props.data.map(function (navItem) {
			var href = '#'+navItem.toLowerCase();
			return (
				<li>
					<a href={href}>{navItem}</a>
				</li>
			)
		});
		return (
			<ul className="nav-items">
				{navItems}
			</ul>
		)
	}
});

var Nav = React.createClass({
	getInitialState: function () {
	    return {
	       data: data.navItems
	    };
	},
	render: function() {
		return (
			<nav>
				<NavList data={this.state.data} />
			</nav>
		);
	}
});

module.exports = Nav;