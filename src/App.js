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
        <Widget update={this.update.bind(this)} />
        <Button>I<Heart/>React</Button>
      </div> 
    )
  }

  update(e){
    this.setState({txt:e.target.value});
  }


}

const Button = (props) => (
  <button> {props.children}</button>
  )

class Heart extends React.Component {
  render(){
    return <span>&hearts;</span>
  }
}

const Widget = (props) => (
      <div>
        <input type="text" onChange={props.update}/> 
      </div>)

App.propTypes = {
  txt: PropTypes.string.isRequired,
  num: PropTypes.number.isRequired
}

App.defaultProps ={
  txt: "Hello Default"
}

export default App;
