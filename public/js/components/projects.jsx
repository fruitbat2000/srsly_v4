var React = require('react'),
		Filters = require('./filters'),
		ProjectList = require('./project-list'),
		data = require('../../data.json');

var Projects = React.createClass({
	getInitialState: function () {
    return {
      data: data.projects,
      skillFilters: [],
      brandFilters: [],
      componentWidth: 900,
      currentProject: null
    };
	},
	componentDidMount: function() {
		var self = this,
				$el = $(React.findDOMNode(this.refs.projectList));
		this.setState({
			componentWidth: $el.innerWidth()
		});
		window.addEventListener('resize', function() {
      self.setState({ componentWidth: $el.innerWidth() })
    });
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
	handleFilters: function(type, name, value) {
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
	handleSelection: function(id, project) {
		this.setState({
			currentProject: project,
			currentId: id
		});
	},
	render: function() {
		return (
			<section id="projects">
				<h3 className="project-title skew">Projects</h3>
				<div>
				<Filters onUserInput={this.handleFilters} />
				<ProjectList
					data={this.state.data}
					skillFilters={this.state.skillFilters}
					brandFilters={this.state.brandFilters}
					componentWidth={this.state.componentWidth}
					onUserInput={this.handleSelection}
					currentId={this.state.currentId}
					currentProject={this.state.currentProject}
					ref="projectList" />
					</div>
			</section>
		)
	}
});

module.exports = Projects;