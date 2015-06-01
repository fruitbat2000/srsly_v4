var React = require('react'),
		data = require('../../data.json'),
		$el;

var ProjectDetail = React.createClass({
	getInitialState: function() {
		return {
			figureHeight: 0,
			height: 0,
			animate: false
		}
	},
	componentDidMount: function() {
		$el = $(React.findDOMNode(this.refs.projectDetail));

		var img = React.findDOMNode(this.refs.projectDetailImg),
				$container = $el.parents('#projects');

		this.setHeight();

		img.addEventListener('load', function(){
			var vibrant = new Vibrant(img, 64, 5),
					swatches = vibrant.swatches(),
					colour = swatches['Vibrant'].getRgb(),
					bg = 'rgba('+colour[0]+','+colour[1]+','+colour[2]+',0.8)';

			$container.css('background-color', bg);
		});
	},
	componentWillReceiveProps: function() {
		this.setState({animate: true});
	},
	componentDidUpdate: function() {
		if (this.state.animate) {
			this.setHeight();
			this.setState({animate: false});
		}
	},
	setHeight: function() {
		var figureHeight = $el.find('.project-desc').outerHeight(),
				height = figureHeight + 40;

		this.setState({
			figureHeight: figureHeight,
			height: height
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
			<div className="project-detail" ref="projectDetail" style={{height: this.state.height}}>
				<figure className="project-img" style={{height: this.state.figureHeight}}>
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