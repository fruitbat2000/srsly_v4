var React = require('react'),
		data = require('../../data.json');

var NavList = React.createClass({
	handleClick: function(href, e) {
		e.preventDefault();
		$('html, body').animate({
		  scrollTop: $(href).offset().top
		}, 1000);
	},
	render: function() {
		var self = this;
		var navItems = this.props.data.map(function (navItem) {
			var href = '#'+navItem.toLowerCase(),
					id = navItem.replace(/ /g, '').toLowerCase();
			return (
				<li key={id}>
					<a href={href} onClick={self.handleClick.bind(null, href)}>{navItem}</a>
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
	getInitialState: function() {
		return {
			el: null,
			offset: null
		}
	},
	fixNav: function() {
		if (window.pageYOffset > this.state.offset) {
			this.state.el.css('position', 'fixed');
		} else {
			this.state.el.css('position', 'relative');
		}
	},
	updateOffset: function() {
		this.setState({
			el: $(React.findDOMNode(this.refs.nav)),
			offset: $(React.findDOMNode(this.refs.nav)).offset().top
		});
	},
	componentDidMount: function() {
		this.updateOffset();
		$(window).on('scroll', this.fixNav);
		$(window).on('resize', this.updateOffset);
	},
	componentWillUnmount: function() {
		$(window).off('scroll', this.fixNav);
		$(window).off('resize', this.updateOffset);
	},
	render: function() {
		return (
			<div className="nav-container">
				<nav ref="nav">
					<NavList data={data.navItems} />
				</nav>
			</div>
		);
	}
});

module.exports = Nav;