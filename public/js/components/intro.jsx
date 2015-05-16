var React = require('react'),
		Skills = require('./skills'),
		data = require('../../data.json');

var Intro = React.createClass({
	render: function() {
		return (
			<section id="intro">
				<img src="../../images/kittenComp.jpg" />
				<div className="logo">
					<h1>$(<span>SRSLY</span>);</h1>
					<h2>seriously good &lsaquo;code&rsaquo;</h2>
				</div>
				<div className="intro-text">
					<h3 className="inline-title">Hello World!</h3>
						<p>Welcome to my small corner of the interwebs. I&apos;m a front end web developer who&apos;s serious about making great web experiences across all manner of platforms and projects. I&apos;ve been lucky enough to work for some of the world&apos;s biggest brands inlcluding Toyota, M&amp;S, Nivea, MINI, Premier Inn, Colgate etc - you can take a look at my <a href="#work">WORK</a> here. When I&apos;m not coding, I&apos;m generally... coding, so take a look at some of my &apos;for fun&apos; projects in the <a href="#labs">LABS</a> section.
						</p>
				</div>
				<Skills />
			</section>
		);
	}
});

module.exports = Intro;