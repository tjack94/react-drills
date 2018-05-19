import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Image';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image myImage={ "http://a.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fnba%2F500%2Futah.png" } />
      </div>
    );
  }
}

export default App;