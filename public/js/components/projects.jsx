var React = require('react'),
		Filters = require('./filters'),
		data = require('../../data.json');

var ProjectList = React.createClass({
	filterProjects: function(array) {
		var newArray = [],
				brandArray = [],
				skillArray = [];
		if(this.props.brandFilters.length) {
			brandArray = this.filterByBrand(array);
		}
		if(this.props.skillFilters.length) {
			skillArray = this.filterBySkill(array);
		}
		tmp = brandArray.concat(skillArray);
		newArray = this.deDupeProjects(tmp);

		console.log(newArray);
		return newArray;
	},
	filterByBrand: function(array) {
		var newArray = [];
		this.props.brandFilters.map(function (brand) {
			var tmp = array.filter(function (i) {
				return i.brand === brand;
			});
			newArray = newArray.concat(tmp);
		});
		return newArray;
	},
	filterBySkill: function(array) {
		var newArray = [];
		this.props.skillFilters.map(function (skill) {
			array.forEach(function (project) {
				if (project.skills.indexOf(skill) > -1) {
					newArray.push(project);
				}
			});
		});
		return newArray;
	},
	deDupeProjects: function(array) {
		console.log('deDupeProjects');
		return array;
	},
	render: function() {
		var projectArray;
		if(this.props.brandFilters.length || this.props.skillFilters.length) {
			projectArray = this.filterProjects(this.props.data);
		} else {
			projectArray = this.props.data;
		}
		var projects = projectArray.map(function (project) {
			var projectSkills = project.skills.map(function (skill) {
				var id = skill.replace(/ /g,'').toLowerCase();
				return (
					<li key={id}>{skill}</li>
				)
			});
			return (
				<li key={project.id}>
					<h3>{project.title}</h3>
					<span>{project.brand}</span>
					<ul>
						{projectSkills}
					</ul>
				</li>
			)
		});
		return (
			<ul className="project-list">
				{projects}
			</ul>
		)
	}
});

var ProjectDetail = React.createClass({
	render: function() {
		return (
			<div className="project-detail"></div>
		)
	}
});

var Projects = React.createClass({
	getInitialState: function () {
    return {
      data: data.projects,
      skillFilters: [],
      brandFilters: []
    };
	},
	updateFilters: function(array, name, value) {
		var newFilters = array;
		if(newFilters.indexOf(name) > -1 && !value) {
			var i = newFilters.indexOf(name);
			newFilters.splice(i, 1);
		} else if (!newFilters[name] && value) {
			newFilters.push(name);
		}
		return newFilters;
	},
	handleUserInput: function(type, name, value) {
		if (type === 'skill') {
			this.setState({
				skillFilters: this.updateFilters(this.state.skillFilters, name, value)
			});
		} else if (type === 'brand') {
			this.setState({
				brandFilters: this.updateFilters(this.state.brandFilters, name, value)
			});
		}
	},
	render: function() {
		return (
			<section id="#projects">
				<Filters onUserInput={this.handleUserInput} />
				<ProjectList
					data={this.state.data}
					skillFilters={this.state.skillFilters}
					brandFilters={this.state.brandFilters} />
			</section>
		)
	}
});

module.exports = Projects;