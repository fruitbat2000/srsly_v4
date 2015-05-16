var React = require('react'),
		data = require('../../data.json');

var FilterSkills = React.createClass({
	render: function() {
		var skills = this.props.data.map(function (skill) {
			return (
				<li>
					<input type="checkbox" name={skill} />
					<label for={skill}>{skill}</label>
				</li>
			)
		});
		return (
			<ul className="filter-skills">
				{skills}
			</ul>
		)
	}
});

var FilterBrands = React.createClass({
	render: function() {
		var brands = this.props.data.map(function (brand) {
			return (
				<li>
					<input type="checkbox" name={brand} />
					<label for={brand}>{brand}</label>
				</li>
			)
		});
		return (
			<ul className="filter-brands">
				{brands}
			</ul>
		)
	}
});

var Filters = React.createClass({
	getInitialState: function () {
    return {
       data: data
    };
	},
	render: function() {
		return (
			<aside className="filters">
				<FilterSkills data={this.state.data.skills} />
				<FilterBrands data={this.state.data.brands} />
			</aside>
		);
	}
});

module.exports = Filters;