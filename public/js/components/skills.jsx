var React = require('react'),
		data = require('../../data.json');

var SkillList = React.createClass({
	render: function() {
		var skills = this.props.data.map(function (skill) {
			return (
				<li>{skill}</li>
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
	getInitialState: function () {
    return {
       data: data.skills
    };
	},
	render: function() {
		return (
			<SkillList data={this.state.data} />
		);
	}
});

module.exports = Skills;