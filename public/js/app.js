var React = require('react'),
	App = React.createFactory(require('components/app'));

if (typeof window !== "undefined") {
  window.onload = function() {
    React.render(App(), document.getElementById("content"));
  };

  window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function(f){setTimeout(f, 1000/60);};

  $(function() {
    $('body').addClass('ready');
	});
}