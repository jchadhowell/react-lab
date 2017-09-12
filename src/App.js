import React from 'react';
import PropTypes from 'prop-types'

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      txt: "inital text",
      currentEvent: "---"
    }
    this.update = this.update.bind(this);
  }

  render(){
    let txt = this.props.txt;
    return (
      <div>
        <h1>{this.state.txt}</h1>
        <Widget update={this.update.bind(this)} />
        <Button>I<Heart/>React</Button>
        <Title text='The Title'/>
        <textarea 
          onKeyPress={this.update}
          onCopy = {this.update}
          onCut = {this.update}
          onPaste = {this.update}
          onFocus = {this.update}
          onBlur = {this.update}
          onDoubleClick = {this.update}
          cols="30"
          rows="10"
        />
        <h1>{this.state.currentEvent}</h1>
      </div> 
    )
  }

  update(e){
    this.setState({currentEvent:e.type});
  }
}

const Title = (props) =><h1>Title:{props.text}</h1>

Title.propTypes = {
  text(props, propName, component){
    if (!(propName in props)){
      return new Error(`missing ${propName}`)
    }
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
