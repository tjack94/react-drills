import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      names: ["Bob", "Bill", "Fred", "John", "James"],
      userInput: ""
    }
  }
  handleChange(string){
this.setState( {userInput: string } )
  }

  
  render() {
    let listDisplay = this.state.names.filter( (element, index) => {
      return element.includes(this.state.userInput)
    }).map( (element, index) => {
      return <h2 key={ index }>{ element }</h2>
    })
    return (
      <div className="App">
       <input onChange={e => this.handleChange(e.target.value)} type="text"/>

       {listDisplay}

      </div>
    );
  }
}

export default App;
