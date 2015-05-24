var React = require('react');

var Arrow = React.createClass({
  render: function() {
    var styles = {
      bottom: -30,
      width: 0,
      height: 0,
      borderLeft: '20px solid transparent',
      borderRight: '20px solid transparent',
      borderBottom: '20px solid #fff',
      marginLeft: 105,
      position: 'absolute'
    }
    return <div className="arrow" style={styles}/>
  }
})

module.exports = Arrow