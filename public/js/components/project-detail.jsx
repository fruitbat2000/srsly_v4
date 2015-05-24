var React = require('react'),
		data = require('../../data.json');

var ProjectDetail = React.createClass({
	render: function() {
		var project = this.props.project;
		var projectSkills = project.skills.map(function (skill) {
			var id = skill.replace(/ /g,'').toLowerCase();
			return (
				<li key={id}>{skill}</li>
			)
		});
		return (
			<div className="project-detail">
				<figure className="project-img">Image goes here</figure>
				<div className="project-desc">
					<h3>{project.title}</h3>
					<p>{project.desc}</p>
					<ul>{projectSkills}</ul>
				</div>
			</div>
		)
	}
});

module.exports = ProjectDetail;