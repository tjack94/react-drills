import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      textToDisplay: "",
    }
  }
  handleChange(string){
    this.setState( { textToDisplay: string } )
  }
  render() {
    return (
      <div>
      <input className= "inputBox"onChange= {e => this.handleChange(e.target.value)}/>
      <p>{this.state.textToDisplay}</p>
    </div>
    );
  }
}

export default App;
