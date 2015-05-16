var React = require('react'),
		data = require('../../data.json');

var NavList = React.createClass({
	render: function() {
		var navItems = this.props.data.map(function (navItem) {
			var href = '#'+navItem.toLowerCase(),
					id = navItem.replace(/ /g, '').toLowerCase();
			return (
				<li key={id}>
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
	render: function() {
		return (
			<nav>
				<NavList data={data.navItems} />
			</nav>
		);
	}
});

module.exports = Nav;