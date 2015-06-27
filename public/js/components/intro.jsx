var React = require('react'),
		Skills = require('./skills');

var Intro = React.createClass({
	getInitialState: function() {
		return {
			$parallax: null,
			$introCopy: null
		}
	},
	setHeight: function() {
		 this.state.$parallax.height(this.state.$introCopy.outerHeight());
	},
	parallax: function(e) {
		var scrollTop = window.pageYOffset,
				$el = this.state.$parallax,
				newTop = -scrollTop * .5 + 'px';

		window.requestAnimationFrame(function(){
			$el.css('top', newTop);
		});
	},
	componentDidMount: function() {
		var $el = $(React.findDOMNode(this.refs.kittenLines)),
				$paths = $el.find('path'),
				$container = $el.parents('#intro');

		this.setState({
			$parallax: $container.find('.parallax'),
			$introCopy: $container.find('.intro-copy')
		}, this.setHeight);

		$(window).on('scroll', this.parallax);
		$(window).on('resize', this.setHeight);
	},
	componentWillUnmount: function() {
		$(window).off('scroll', this.parallax);
		$(window).off('resize', this.setHeight);
	},
	render: function() {
		return (
			<section id="intro">
				<div className="parallax">
					<figure>
						<svg className="kitten-lines" ref="kittenLines" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1156.2934 656.3441" id="svg2">
						  <path d="m 702.71038,519.6989 -1.44876,13.76325 c 0.39884,1.93888 1.38303,2.70705 2.41461,3.38044 l 43.46289,6.51944 c 1.57972,-0.03 3.62945,0.40998 3.38045,-1.44876 l 0.24146,-13.52179 c 0.68116,-0.80487 -1.62817,-1.60974 -4.10483,-2.41461 l -42.25559,-6.76089" id="path4190"></path>
						  <path d="M 1154.2849,557.11527 1154.6244,3.1082506 641.36197,1.5041706 592.04118,417.42393 c -1.44162,13.32425 -1.33672,31.46952 3.89698,35.70833 14.55445,-6.23778 68.41937,4.95881 97.26554,9.47761 l -1.76047,21.09297 463.10567,76.59048 0.075,94.4149 -638.93417,-0.21051 65.4347,-186.64831 c 3.03099,-9.15927 9.03017,-12.11563 12.90039,-13.74395" id="path3347"></path>
						  <path d="m 679.40532,3.2230406 -51,406.9999994 522.99998,81" id="path4160"></path>
						  <path d="m 669.40532,649.22304 18,-136 c 1.92323,-5.81645 6.62765,-4.48129 11,-4 l 453.99998,75" id="path4162"></path>
						  <path d="M 628.23924,83.999247 C 625.15517,79.59791 622.20975,71.69726 614.18665,70.31483 606.60462,69.00841 600.84606,60.72545 593.01787,55.7115 577.2589,36.57745 545.87004,29.37228 530.34054,21.21951 c -9.81307,7.41762 -5.01737,17.27004 -6.93522,26.00353 -3.02611,20.82028 10.61713,49.97523 16,75 -2.72997,9.68249 -11.51208,20.87802 -20,32 -9.89324,11.34639 -15.83926,10.85111 -23,14 -21.59207,0.58567 -43.18414,-4.62966 -64.77621,2.55595 -10.31893,2.46808 -16.31269,7.53127 -19.22379,14.44405 24.31664,46.31156 34.34217,33.85596 47.22772,49.25743 l 16.94555,14.31683 c 8.10327,16.54287 17.84383,13.4384 26.82673,19.42574 7.711,7.494 15.23322,14.98752 35.22772,24.37129 7.92409,2.24073 15.84819,2.72879 23.77228,7.62871 19.13804,10.67255 30.74805,6.5514 42.71287,8.25743 l -2.85644,23.48514 c -3.69443,3.34661 -14.37873,4.85378 -36.85643,3.25743 -15.28713,-5.91419 -24.22306,-22.94297 -36,-35 -43.26079,-13.92198 -51,18 -51,18 -2.72638,27.81756 0.80506,41.05879 11,51 14.43408,14.21332 30.61543,20.56392 47,26 30.69138,3.89713 39.65194,0.55065 57,0" id="path4169"></path>
						  <path d="m 698.60556,544.81079 -2.41461,28.49235 c 0.31505,1.04633 0.60377,2.09265 2.17315,3.13898 l 43.70435,7.9682 c 2.01283,0.72604 3.84681,1.00494 4.58775,-1.44876 l 0.72439,-27.28504 c -0.2485,-2.43674 -1.93602,-3.91414 -4.10483,-5.07067 l -42.2556,-6.7609" id="path4192"></path>
						  <path d="m 695.46657,585.61762 -3.86337,34.52886 c 0.66893,1.21839 -0.2186,2.74808 3.38045,3.38045 l 83.30388,16.41932 c 4.53482,0.14585 3.27962,-1.36259 3.62191,-2.41461 l -0.72438,-33.32155 c -0.98333,-2.20465 -2.04863,-4.36831 -5.55359,-5.31214 l -77.7503,-14.00471" id="path4194"></path>
						  <path d="m 688.02252,652.84377 1.25364,-15.1054 c 1.47734,-0.63717 1.6846,-3.79232 6.36538,-3.14812 L 796.3853,653.9274" id="path4196"></path>
						  <path d="m 764.14737,532.01927 0.27091,12.46172 c 0.91481,1.43306 1.89289,1.99012 3.52179,2.70908 l 45.78327,8.1272 c 1.55226,0.38689 2.33057,-0.38713 2.43816,-2.16725 l -1.89634,-12.73263 c -0.90284,-2.07733 -2.76559,-2.23484 -4.33452,-2.97998 l -44.15783,-7.04358" id="path4198"></path>
						  <path d="m 761.16739,557.21362 -0.2709,28.98704 c 0.63705,2.42337 1.90143,2.96474 3.25088,3.25089 l 44.69965,7.31448 c 1.80605,0.5054 3.61209,0.86644 5.41814,-2.16725 l -2.70907,-29.79977 c -0.66774,-2.49284 -3.14987,-3.17129 -5.95996,-3.52179 l -43.0742,-6.77267" id="path4200"></path>
						  <path d="m 795.30167,605.70596 1.62544,35.21791 c 0.31031,0.77878 -0.83304,0.58846 3.52179,4.0636 l 48.76325,7.8563 c 1.24254,-0.76933 1.53703,0.35744 4.06361,-2.97997 l -3.52179,-33.86337 c -0.61784,-1.95624 -1.52014,-3.7987 -5.68905,-4.33451 l -47.13781,-7.85631" id="path4202"></path>
						  <path d="m 826.28509,568.27272 1.99568,28.16127 c 0.65835,3.12503 2.12715,3.81868 3.32613,5.32181 l 46.56588,7.76098 c 2.42353,0.70112 3.93033,0.25632 3.99136,-1.99568 l -5.32181,-30.37869 c -1.19945,-2.75826 -3.12244,-3.34591 -4.87833,-4.43485 l -44.12671,-7.31749" id="path4204"></path>
						  <path d="m 864.86824,619.93867 4.43485,34.59179 55.57451,-0.0828 -4.13031,-24.53059 c -0.59175,-3.47287 -2.23543,-4.31591 -3.99136,-4.87833 l -51.00072,-7.98272" id="path4206"></path>
						  <path d="m 828.28077,542.77236 0.66523,14.1915 c 0.22892,1.14387 1.18365,2.1063 3.76962,2.66091 l 44.57019,7.76098 c 2.09321,0.10934 4.60255,0.84287 4.43484,-2.43917 l -2.21742,-13.08279 c -1.62611,-3.44476 -3.25222,-2.53321 -4.87833,-3.32613 l -44.79193,-6.87401" id="path4208"></path>
						  <path d="m 892.36428,579.80332 5.54356,29.9352 c 0.57128,1.29454 1.23649,2.52645 3.54788,2.66091 l 46.56587,8.86969 c 3.15234,0.31097 3.93381,-1.35378 3.54788,-3.99136 l -6.87401,-28.60475 c -2.99653,-3.68476 -4.0409,-2.4891 -5.98704,-3.54788 l -44.79194,-7.53924" id="path4212"></path>
						  <path d="m 893.6753,554.58373 2.43628,12.48597 c 0.93679,1.40957 1.4838,3.01404 3.95897,3.65442 l 46.89848,7.91793 c 1.42474,-0.29918 2.61622,-0.94824 2.43629,-3.65443 l -3.04536,-11.57235 c -0.87963,-2.36875 -3.31849,-3.17827 -5.78617,-3.95897 l -45.07128,-7.30885" id="path4214"></path>
						  <path d="m 936.31029,632.54486 5.1771,22.2311 53.59831,-0.30454 -2.7409,-12.18142 c -1.1256,-1.72269 -1.7344,-3.61769 -5.17706,-4.56804 l -49.33477,-8.22246" id="path4216"></path>
						  <path d="m 959.15046,591.12801 7.91793,29.23542 c 0.6134,1.53887 0.49854,3.19912 5.78617,3.95896 l 46.59394,9.13607 c 1.9287,0.50757 3.0453,-0.60908 3.3499,-3.34989 l -10.6588,-29.53996 c -3.9516,-5.56127 -5.4111,-3.64594 -7.9179,-4.87257 l -44.15763,-7.30885" id="path4218"></path>
						  <path d="m 1008.7897,644.72628 3.6545,9.44061 51.4665,0.60907 c -0.9167,-2.63314 -2.9003,-3.13241 -4.568,-4.2635 l -49.9439,-7.91793" id="path4220"></path>
						  <path d="m 1026.7573,603.61397 12.1815,31.67171 c 1.3212,2.63446 3.3606,3.11481 5.4816,3.34989 l 46.2894,7.00432 c 3.6591,-0.68935 2.7398,-3.3907 2.4363,-4.87257 l -11.2678,-28.01728 c -2.7408,-3.70646 -5.4816,-4.34761 -8.2225,-4.87257 l -45.6803,-6.69978" id="path4222"></path>
						  <path d="m 960.43594,566.22422 3.73734,12.78563 c 0.81684,1.04908 0.40415,2.09815 4.13074,3.14723 l 45.43818,8.06478 c 2.9701,0.872 4.1689,-0.0274 4.5241,-1.77031 l -4.5241,-13.57244 c -0.8131,-1.72224 -2.9456,-2.1427 -6.8846,-3.34394 l -45.43815,-7.86808" id="path4224"></path>
						  <path d="m 1027.708,578.02634 6.2945,13.57244 c 1.003,1.1697 2.5704,1.83824 4.5241,2.16372 l 44.6514,7.27797 c 4.7138,0.91445 4.3607,-0.70457 5.1142,-1.77031 l -5.3109,-13.17904 c -0.9651,-1.6859 -2.1591,-3.28022 -5.7044,-3.93404 l -47.9953,-7.27797" id="path4226"></path>
						  <path d="m 1096.1603,614.41621 16.1296,33.24264 c 2.0326,3.36692 4.0651,3.63615 6.0977,3.93404 l 36.2368,3.11533 -0.2403,-24.55585 -3.3439,-7.27797 c -1.7366,-2.49284 -4.5636,-3.53182 -7.8681,-3.93404 l -45.4382,-7.27798" id="path4228"></path>
						  <path d="m 1096.7504,588.05814 7.278,13.96584 c 0.9472,1.2821 2.2679,2.19068 3.7373,2.95053 l 46.6184,7.67138 0.3934,-11.99882 -3.5406,-4.91755 c -1.6668,-0.85238 -1.5978,-1.70475 -6.0978,-2.55713 l -48.5854,-7.47467" id="path4230"></path>
						  <path d="M 640.20985,1.5969906 2.6243899,1.6124906 1.5025799,654.70821 514.84441,654.47516" id="path3369"></path>
						  <path d="m 574.75985,228.05461 c -10.03181,-9.24639 -20.62298,-15.50953 -34.14016,-6.16726 -8.1607,9.53451 -7.40411,17.63076 2.64311,24.22851 7.01708,2.54947 13.02565,2.0734 18.28151,-0.66078 6.27923,-4.17758 7.39235,-10.23374 7.26855,-16.73969 0.91526,-1.64228 1.89673,-3.05282 3.96466,-0.66078" id="path4232"></path>
						  <path d="m 599.64914,189.06874 c -5.398,-7.04671 -11.5169,-13.02664 -9.91166,-25.3298 4.06358,-8.48813 9.37983,-11.96555 15.19788,-13.4358 13.32275,-2.53996 13.23704,4.97641 18.06124,8.81036 l -2.42285,16.29918 c -4.78921,2.75504 -5.11951,5.91543 -15.63839,8.14959 -1.39646,1.09385 -3.09942,0.65526 -3.96467,4.40518" id="path4234"></path>
						  <path d="m 615.94831,215.49984 c -1.61523,-1.01512 -3.23047,-3.66302 -4.8457,-0.88104 -5.81583,7.82039 -5.3415,9.02245 -6.16725,10.57244 -4.97547,3.11753 -10.04149,6.22213 -11.01296,9.91166 0.14431,2.28358 0.0576,5.26034 1.32155,4.18492 1.1013,0.93775 2.20259,0.88363 3.30389,0.66078 l 1.76207,-3.08363 c 5.56508,-1.35074 9.63101,-0.70261 11.67374,2.64311" id="path4238"></path>
						</svg>
						<img className="kitteh" src="../../images/kittenComp.jpg" alt="everything on the internet is better with kittens" />
					</figure>
				</div>
				<div className="intro-copy">
					<div className="logo">
						<h1>$(<span className="bold">SRSLY</span>);</h1>
						<h2>seriously good &lsaquo;code&rsaquo;</h2>
					</div>
					<div className="intro-text">
						<h3 className="intro-title skew">Hello World!</h3>
							<p>Welcome to my small corner of the interwebs. I&apos;m a front end web developer who&apos;s serious about making great web experiences across all manner of platforms and projects. I&apos;ve been lucky enough to work for some of the world&apos;s biggest brands including Toyota, M&amp;S, Nivea, MINI, Premier Inn, Colgate etc - scroll down to see some examples of projects that I&apos;ve worked on.
							</p>
					</div>
					<Skills />
				</div>
			</section>
		);
	}
});

module.exports = Intro;