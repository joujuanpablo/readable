import React, { Component } from 'react'
import logo from '../images/logo.png';
import '../App.css'
import { Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleReceivedPosts, createPost } from '../actions'
import { capitalize } from '../utils/helpers'

import * as ReadableAPI from '../utils/api';

//Components
import Navbar from './Navbar';
import ListPosts from './ListPosts';
import CreatePost from './CreatePost';

class App extends Component {
  state= {
      categories: [],
      posts: [],
      comments: [],
    
    }
  componentDidMount() {
        ReadableAPI.getCategories().then((categories) => {
            const categoryNames = categories.map((category) => capitalize(category.name))
            this.setState({ categories: categoryNames });
        })

        ReadableAPI.getPosts() //grab data from the api
        .then((posts) => this.props.receivedPosts(posts)) //now send the data to the function we have from mapDispatchToPros which wraps the app
    }
    
  render() {
    const { posts } = this.props;
    console.log('props', this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Readable</h1>
          <Navbar categories={this.state.categories}></Navbar>
        </header>
        <Route exact path='/all' render={() => (
          <ListPosts posts={posts}/>
        )}/>
        <Route path='/create' render={() => (
          <CreatePost/>
        )}/>
        {this.state.categories.map((category) => (
          <Route exact path={`/${category}`} key={category} render={() => (
            <ListPosts category={category} posts={posts}/>
          )}/>
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({posts, ui: { currentCategory }}) => { //grabs from the store and makes available as props
  return { 
    posts: currentCategory !== '' ? posts.map((post) => post.category === currentCategory) : posts
  }  //we should be doing this with props send inline
}

const mapDispatchToProps = (dispatch) => ({ //sends to the store
  newPost: (data) => dispatch(createPost(data)),
  receivedPosts: (posts) =>  dispatch(handleReceivedPosts(posts)) //handleReceivedPosts lives in the actions
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
