var React = require('react'),
		ProjectDetail = require('./project-detail'),
		Arrow = require('./arrow'),
		data = require('../../data.json'),
		projectSize = 250,
		projectMargin = 10,
		containerSize;

var ProjectList = React.createClass({
	filterProjects: function(array) {
		var newArray = [],
				brandArray = [],
				skillArray = [];
		if(this.props.brandFilters.length) {
			brandArray = this.filterByBrand(array);
		}
		if(this.props.skillFilters.length) {
			skillArray = this.filterBySkill(array);
		}
		newArray = this.deDupeProjects(brandArray, skillArray);

		return newArray;
	},
	filterByBrand: function(array) {
		var newArray = [];
		this.props.brandFilters.map(function (brand) {
			var tmp = array.filter(function (i) {
				return i.brand === brand;
			});
			newArray = newArray.concat(tmp);
		});
		return newArray;
	},
	filterBySkill: function(array) {
		var newArray = [],
				tmp = {};
		this.props.skillFilters.map(function (skill) {
			array.forEach(function (project) {
				if(project.skills.indexOf(skill) > -1) {
					newArray.push(project);
				}
			});

			for ( var i=0; i < newArray.length; i++ ) {
			    tmp[newArray[i]['id']] = newArray[i];
			}

			newArray = [];
			for ( var key in tmp ) {
			    newArray.push(tmp[key]);
			}
		});
		return newArray;
	},
	deDupeProjects: function(arr1, arr2) {
	  var arr3 = [];
	  for(var i in arr1){
	     var shared = false;
	     for (var j in arr2) {
	        if (arr2[j].id === arr1[i].id) {
	            shared = true;
	            break;
	        }
	      }
	    if(!shared) {
	      arr3.push(arr1[i]);
	    }
	  }
	  arr3 = arr3.concat(arr2);

		return arr3;
	},
	handleClick: function(id) {
		if (id == this.props.currentId) {
			this.props.onUserInput(null, null);
		} else {
			for (var i = this.props.data.length - 1; i >= 0; i--) {
				if (this.props.data[i].id === id) {
					project = this.props.data[i];
				}
			};
			this.props.onUserInput(id, project);
		}
	},
	calcProjectsPerRow: function() {
		var projectWidth = projectSize + (projectMargin * 2),
				perRow = Math.floor(this.props.componentWidth / projectWidth);
		containerSize = projectWidth * perRow;

		return perRow;
	},
	calcRows: function(array) {
		var projectsPerRow = this.calcProjectsPerRow(),
				rows = [],
				count = 0;
		for (var i = array.length - 1; i >= 0; i--) {
			if (i % projectsPerRow === 0) {
				rows.push([]);
			}
		};
		for (var i = array.length - 1; i >= 0; i--) {
			rows[count].push(array[i]);
			if (i % projectsPerRow === 0) {
				count ++;
			}
		};
		return rows.reverse();
	},
	renderProject: function(project) {
		var isCurrent = project.id === this.props.currentId,
				brand = 'brand-'+project.brand_code,
				classString = 'project-tile '+brand;
		return (
				<div className={classString} key={project.id} onClick={this.handleClick.bind(this, project.id)}>
					<h4>{project.title}</h4>
					{isCurrent ? <Arrow id={project.id} /> : null}
				</div>
			)
	},
	renderRow: function(row, index) {
		var self = this;
		var hasCurrent = row.filter(function (project) {
				return project.id === self.props.currentId;
			}).length > 0;
		return (
			<div className="project-row" key={index}>
				{row.map(this.renderProject)}
				{hasCurrent ? <ProjectDetail project={this.props.currentProject} /> : null}
			</div>
		)
	},
	render: function() {
		var projectArray;
		if(this.props.brandFilters.length || this.props.skillFilters.length) {
			projectArray = this.filterProjects(this.props.data);
		} else {
			projectArray = this.props.data;
		}

		var projects = this.calcRows(projectArray).map(this.renderRow);
		var styles = {
			width: containerSize
		}
		return (
			<div className="project-list">
				<div style={styles}>{projects}</div>
			</div>
		)
	}
});

module.exports = ProjectList;