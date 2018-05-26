import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor(){
    super()
    this.state= {
      tatooine:''
    }
  }
  componentDidMount(){
    axios.get('https://swapi.co/api/planets/1').then(response => {
      this.setState( { tatooine: response.data } )
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Name: {this.state.tatooine["name"]}</h1>
        <h1>Climate: {this.state.tatooine.climate}</h1>
        <h1>Population: {this.state.tatooine.population}</h1>
      </div>
    );
  }
}

export default App;
