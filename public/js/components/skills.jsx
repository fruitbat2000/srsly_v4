var React = require('react'),
		data = require('../../data.json');

var SkillList = React.createClass({
	render: function() {
		var skills = this.props.data.map(function (skill) {
			var id = skill.replace(/ /g,'').toLowerCase();
			return (
				<li key={id}>{skill},</li>
			)
		});
		return (
			<div className="skills-container">
				<h4>skillsArray:</h4>
				<span>[</span>
				<ul className="skills-list">
					{skills}
					<li>etc</li>
				</ul>
				<span>];</span>
			</div>
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