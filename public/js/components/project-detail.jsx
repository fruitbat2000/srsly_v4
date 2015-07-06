var React = require('react'),
		data = require('../../data.json'),
		oldId = null,
		$el;

var ProjectDetail = React.createClass({
	getInitialState: function() {
		return {
			figureHeight: 'auto',
			height: 0,
			padding: 0,
			animate: false
		}
	},
	componentDidMount: function() {
		$el = $(React.findDOMNode(this.refs.projectDetail));

		var img = React.findDOMNode(this.refs.projectDetailImg),
				$container = $el.parents('.colour-mask');

		this.setHeight();
		this.scrollTop();

		img.addEventListener('load', function(){
			var vibrant = new Vibrant(img, 64, 5),
					swatches = vibrant.swatches(),
					colour = swatches['Vibrant'].getRgb(),
					bg = 'rgba('+colour[0]+','+colour[1]+','+colour[2]+',0.8)';

			$container.css('background-color', bg);
		});
	},
	componentWillReceiveProps: function(nextProps) {
		this.setState({animate: true});
	},
	componentDidUpdate: function() {
		if (this.state.animate) {
			this.setHeight();
			this.scrollTop();
			this.setState({animate: false});
		}
	},
	scrollTop: function() {
		if (this.props.project.id !== oldId) {
			$('html, body').animate({
			  scrollTop: $el.offset().top + -250
			}, 300);
			
			oldId = this.props.project.id;
		}
	},
	setHeight: function() {
		var figureHeight,
				height;

		if (this.props.viewport === 'wide') {
			figureHeight = $el.find('.project-desc').outerHeight();
			height = figureHeight + 40;
		} else {
			figureHeight = 'auto';
			height = $el.find('.project-detail-wrapper').outerHeight() + 40;		
		}

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
				<div className="project-detail-wrapper">
					<figure className="project-img" style={{minHeight: this.state.figureHeight}}>
						<img src={imgSrc} alt={project.title} ref="projectDetailImg" />
					</figure>
					<div className="project-desc">
						<h3>{project.title}</h3>
						<p>{project.desc}</p>
						<ul>{projectSkills}</ul>
					</div>
				</div>
			</div>
		)
	}
});

module.exports = ProjectDetail;