var React = require('react'),
		data = require('../../data.json');

var FilterSkills = React.createClass({
	render: function() {
		var skills = this.props.data.map(function (skill) {
			return (
				<li key={skill}>
					<input type="checkbox" name={skill} />
					<label htmlFor={skill}>{skill}</label>
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
				<li key={brand}>
					<input type="checkbox" name={brand} />
					<label htmlFor={brand}>{brand}</label>
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
	render: function() {
		return (
			<aside className="filters">
				<FilterSkills data={data.skills} />
				<FilterBrands data={data.brands} />
			</aside>
		);
	}
});

module.exports = Filters;