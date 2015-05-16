var React = require('react'),
		data = require('../../data.json');

var SkillList = React.createClass({
	render: function() {
		var skills = this.props.data.map(function (skill) {
			return (
				<li key={skill}>{skill}</li>
			)
		});
		return (
			<ul className="skills-list">
				{skills}
			</ul>
		)
	}
});

var Skills = React.createClass({
	render: function() {
		return (
			<SkillList data={data.skills} />
		);
	}
});

module.exports = Skills;