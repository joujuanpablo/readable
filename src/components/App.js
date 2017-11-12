import React, { Component } from 'react';
import logo from '../images/logo.png';
import '../App.css';
import { Route } from 'react-router-dom';
//Components
import Navbar from './Navbar';
import ListPosts from './ListPosts';
import CreatePost from './CreatePost';

class App extends Component {
  state= {
      categories: ['All', 'Politics', 'Art', 'Music', 'Science', 'Sports'],
    }
    
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Readable</h1>
        </header>
        <Navbar categories={this.state.categories}></Navbar>
        {this.state.categories.map((category) => (
          <Route exact path={`/${category}`} key={category} render={() => (
            <ListPosts category={category}/>
          )}/>
        ))}
        <Route exact path='/create' render={() => (
          <CreatePost/>
        )}/>
      </div>
    );
  }
}

export default App;
