var React = require('react'),
		data = require('../../data.json'),
		width = 0;

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
			offset: null,
			fixed: false
		}
	},
	fixNav: function() {
		var self = this;
		if (window.pageYOffset > self.state.offset && !self.state.fixed) {
			window.requestAnimationFrame(function(){
				self.state.el.css('position', 'fixed');
			});
			self.setState({
				fixed: true
			});
		} else if (window.pageYOffset < self.state.offset && self.state.fixed) {
			window.requestAnimationFrame(function(){
				self.state.el.css('position', 'relative');
			});
			self.setState({
				fixed: false
			});
		}
	},
	updateOffset: function() {
		if($(window).width() != width) {
			this.setState({
				el: $(React.findDOMNode(this.refs.nav)),
				offset: $(React.findDOMNode(this.refs.nav)).offset().top
			});
			width = $(window).width();
		}
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
		console.log('render');
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