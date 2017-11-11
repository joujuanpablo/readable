import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Route } from 'react-router-dom';

import Navbar from './Navbar'

class App extends Component {
  state= {
      categories: ['Politics', 'Art', 'Music', 'Science', 'Sports'],
    }
    
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Readable</h1>
        </header>
        <Navbar></Navbar>
      </div>
    );
  }
}

export default App;
