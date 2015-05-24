var React = require('react'),
		data = require('../../data.json');

var FilterSkills = React.createClass({
	handleChange: function(e) {
		this.props.onUserInput(
			'skill',
			e.target.name,
			e.target.checked
		);
	},
	render: function() {
		var self = this;
		var skills = this.props.data.map(function (skill) {
			var id = 'filter-'+skill.replace(/ /g,'').toLowerCase();
			return (
				<li key={id}>
					<input type="checkbox" name={skill} id={id} onChange={self.handleChange} />
					<label htmlFor={id}>{skill}</label>
				</li>
			)
		});
		return (
			<div className="filter-grp">
				<h6>Filter by skill:</h6>
				<ul className="filter-skills">
					{skills}
				</ul>
			</div>
		)
	}
});

var FilterBrands = React.createClass({
	handleChange: function(e) {
		this.props.onUserInput(
			'brand',
			e.target.name,
			e.target.checked
		);
	},
	render: function() {
		var self = this;
		var brands = this.props.data.map(function (brand) {
			var id = 'filter-'+brand.replace(/ /g,'').toLowerCase();
			return (
				<li key={id}>
					<input type="checkbox" name={brand} id={id} onChange={self.handleChange} />
					<label htmlFor={id}>{brand}</label>
				</li>
			)
		});
		return (
			<div className="filter-grp">
				<h6>Filter by brand:</h6>
				<ul className="filter-brands">
					{brands}
				</ul>
			</div>
		)
	}
});

var FilterType = React.createClass({
	render: function() {
		return (
			<div className="filter-grp">
				<h6>Filter by type:</h6>
				<ul className="filter-type">
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
			</div>
		)
	}
});

var Filters = React.createClass({
	handleUserInput: function(type, name, value) {
		this.props.onUserInput(type, name, value);
	},
	render: function() {
		return (
			<aside className="filters">
				<FilterType />
				<FilterSkills onUserInput={this.handleUserInput} data={data.skills} />
				<FilterBrands onUserInput={this.handleUserInput} data={data.brands} />
			</aside>
		);
	}
});

module.exports = Filters;