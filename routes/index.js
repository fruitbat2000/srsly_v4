var express = require('express');
var router = express.Router();
var React = require('react');

require("node-jsx").install({
    harmony: true,
    extension: ".jsx"
});

App = React.createFactory(require('../public/js/components/app'));

/* GET home page. */
router.get('/', function(req, res, next) {
	var markup = React.renderToString(
		App()
	);
  res.render('index', { title: 'SRSLY Web Development. Seriously good <code>', markup: markup });
});

module.exports = router;
