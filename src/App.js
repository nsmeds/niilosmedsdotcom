import React, { Component } from 'react';
import Bandcamp from './components/Bandcamp';
import Tracklist from './components/Tracklist';
import Liners from './components/Liners';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="wrap">
        <div id="main">
          <header>
            <h1>NIILO SMEDS</h1>
            <h1>ONCE YOU WERE A BABY</h1>
          </header>
          <Bandcamp></Bandcamp>
          <Tracklist></Tracklist>
        </div>
        <Liners></Liners>
      </div>
    );
  }
}           

export default App;
