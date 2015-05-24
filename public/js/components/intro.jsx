var React = require('react'),
		Skills = require('./skills');

var Intro = React.createClass({
	render: function() {
		return (
			<section id="intro">
				<img className="kitteh" src="../../images/kittenComp.jpg" />
				<div className="intro-copy">
					<div className="logo">
						<h1>$(<span className="bold">SRSLY</span>);</h1>
						<h2>seriously good &lsaquo;code&rsaquo;</h2>
					</div>
					<div className="intro-text">
						<h3 className="intro-title skew">Hello World!</h3>
							<p>Welcome to my small corner of the interwebs. I&apos;m a front end web developer who&apos;s serious about making great web experiences across all manner of platforms and projects. I&apos;ve been lucky enough to work for some of the world&apos;s biggest brands inlcluding Toyota, M&amp;S, Nivea, MINI, Premier Inn, Colgate etc - scroll down to see some examples of projects that I&apos;ve worked on.
							</p>
					</div>
					<Skills />
				</div>
			</section>
		);
	}
});

module.exports = Intro;