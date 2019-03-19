import React, { Component } from 'react';
import Control from './components/Control';
import Element from './components/Element';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Control />
        <Element id="element_01" />
      </div>
    );
  }
}

export default App;
