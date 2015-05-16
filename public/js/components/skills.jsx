var React = require('react'),
		data = require('../../data.json');

var SkillList = React.createClass({
	render: function() {
		var skills = this.props.data.map(function (skill) {
			var id = skill.replace(/ /g,'').toLowerCase();
			return (
				<li key={id}>{skill}</li>
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