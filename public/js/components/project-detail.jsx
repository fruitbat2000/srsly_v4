var React = require('react'),
		data = require('../../data.json');

var ProjectDetail = React.createClass({
	getInitialState: function() {
		return {
			styles: {
				height: 'auto'
			}
		}
	},
	componentDidMount: function() {
		var self = this,
				$el = $(React.findDOMNode(this.refs.projectDetail)),
				img = React.findDOMNode(this.refs.projectDetailImg),
				$container = $el.parents('#projects');

		this.setState({
			styles: {
				height: $el.height()
			}
		});

		img.addEventListener('load', function(){
			var vibrant = new Vibrant(img, 64, 5),
					swatches = vibrant.swatches(),
					colour = swatches['Vibrant'].getRgb(),
					bg = 'rgba('+colour[0]+','+colour[1]+','+colour[2]+',0.8)';

			$container.css('background-color', bg);
		});

	},
	render: function() {
		var project = this.props.project,
				imgSrc;

		if (project.images) {
			imgSrc = 'images/folio/'+project.images[0];
		}

		var projectSkills = project.skills.map(function (skill) {
			var id = skill.replace(/ /g,'').toLowerCase();
			return (
				<li key={id}>{skill}</li>
			)
		});
		return (
			<div className="project-detail" ref="projectDetail">
				<figure className="project-img" style={this.state.styles}>
					<img src={imgSrc} alt={project.title} ref="projectDetailImg" />
				</figure>
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