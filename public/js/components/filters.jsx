var React = require('react'),
		data = require('../../data.json');

var FilterSkills = React.createClass({
	render: function() {
		var skills = this.props.data.map(function (skill) {
			var id = 'filter-'+skill.replace(/ /g,'').toLowerCase();
			return (
				<li key={id}>
					<input type="checkbox" name={skill} id={id} />
					<label htmlFor={id}>{skill}</label>
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
			var id = 'filter-'+brand.replace(/ /g,'').toLowerCase();
			return (
				<li key={id}>
					<input type="checkbox" name={brand} id={id} />
					<label htmlFor={id}>{brand}</label>
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

var FilterType = React.createClass({
	render: function() {
		return (
			<ul>
				<li>
					<input type="checkbox" name="filterProjects" id="filter-projects" />
					<label htmlFor="filter-projects">Projects</label>
				</li>
				<li>
					<input type="checkbox" name="filterLabs" id="filter-labs" />
					<label htmlFor="filter-labs">Labs</label>
				</li>
				<li>
					<input type="checkbox" name="filterAll" id="filter-all" />
					<label htmlFor="filter-all">All</label>
				</li>
			</ul>
		)
	}
});

var Filters = React.createClass({
	render: function() {
		return (
			<aside className="filters">
				<FilterType />
				<FilterSkills data={data.skills} />
				<FilterBrands data={data.brands} />
			</aside>
		);
	}
});

module.exports = Filters;