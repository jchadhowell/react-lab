import React from 'react';
import PropTypes from 'prop-types'

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      txt: "inital text"
    }

  }

  render(){
    let txt = this.props.txt;
    return (
      <div>
        <h1>{this.state.txt}</h1>
        <input type="text" onChange={this.update.bind(this)}/> 
      </div>
    )
  }

  update(e){
    this.setState({txt:e.target.value});
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
