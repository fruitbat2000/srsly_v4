var React = require('react');

var Contact = React.createClass({
	render: function() {
		return (
			<section id="contact">
				<h3 className="contact-title skew">Contact Me!</h3>
					<div className="contact-text">
						<p>If you have a project you&apos;d like to discuss or just want to chat about code, you can contact me on:
							<a href="mailto:hello@srsly.me.uk" target="_blank" className="mailto">hello@srsly.me.uk</a>
						</p>
						<p>If you just want to find out a little bit more about me, feel free to stalk me on <a href="http://uk.linkedin.com/in/vickikeeley/" target="_blank">LinkedIn</a>.</p>
						<p>SRSLY - improving the internet, one kitten at a time.</p>
					</div>
					<img src="../../images/kitteh2.png" alt="moar kittehs!" />
			</section>
		);
	}
});

module.exports = Contact;