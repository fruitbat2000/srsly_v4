var React = require('react'),
		Filters = require('./filters'),
		data = require('../../data.json');

var ProjectList = React.createClass({
	render: function() {
		var projects = this.props.data.map(function (project) {
			var projectSkills = project.skills.map(function (skill) {
				return (
					<li key={skill}>{skill}</li>
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

var Projects = React.createClass({
	getInitialState: function () {
    return {
      data: data.projects
    };
	},
	render: function() {
		return (
			<section id="#projects">
				<Filters />
				<ProjectList data={this.state.data} />
			</section>
		)
	}
});

module.exports = Projects;