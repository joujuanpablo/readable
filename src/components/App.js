import React, { Component } from 'react'
import logo from '../images/logo.png';
import '../App.css'
import { Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleReceivedPosts, createPost } from '../actions/actions'

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
        ReadableAPI.getCategories().then((Categories) => {

            this.setState({ categories: Categories });
        })

        // ReadableAPI.getPosts() //grab data from the api
        // .then((posts) => this.props.receivedPosts(posts)) //now send the data to the function we have from mapDispatchToPros which wraps the app
    }
    
  render() {
    const { posts } = this.props;
    console.log('appjs-props', this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Readable</h1>
          <Navbar categories={this.state.categories}></Navbar>
        </header>
        <Route exact path='/all' render={() => (
          <ListPosts category='all' posts={posts}/>
        )}/>
        <Route path='/create' render={() => (
          <CreatePost/>
        )}/>
        {this.state.categories.map((category) => (
          <Route exact path={`/${category.name}`} key={category.name} render={() => (
            <ListPosts category={category.name}/>
          )}/>
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({posts, ui}) => { //grabs from the store and makes available as props
  return { 
    // posts: currentCategory !== '' ? posts.map((post) => post.category === currentCategory) : posts
    posts: posts,
    ui: ui
  }
}

const mapDispatchToProps = (dispatch) => ({ //sends to the store
  newPost: (data) => dispatch(createPost(data)),
  receivedPosts: (posts) =>  dispatch(handleReceivedPosts(posts)) //handleReceivedPosts lives in the actions ... should this not be for the new posts?
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
