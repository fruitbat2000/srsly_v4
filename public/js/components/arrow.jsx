var React = require('react');

var Arrow = React.createClass({
  render: function() {
    var styles = {
      width: 0,
      height: 0,
      borderLeft: '10px solid transparent',
      borderRight: '10px solid transparent',
      borderBottom: '10px solid #fff',
      marginLeft: 40,
      position: 'absolute'
    }
    return <div className="arrow" style={styles}/>
  }
})

module.exports = Arrow