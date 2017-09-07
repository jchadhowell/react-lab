import React from 'react';
import PropTypes from 'prop-types'

class App extends React.Component {

  render(){
    let txt = this.props.txt;
    return (
      <div>
        <h1>{txt}</h1>
        <b>bold</b>
        </div>
    )
  }
}

App.propTypes = {
  txt: PropTypes.string.isRequired,
  num: PropTypes.number.isRequired
}

App.defaultProps ={
  txt: "Hello Default"
}

export default App;
