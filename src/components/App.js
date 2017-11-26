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
import PostDetails from './PostDetails'


class App extends Component {
  state = {
    categories: [],
    posts: [],
    comments: [],

  }
  // componentWillMount() {
  //   ReadableAPI.getPosts() //grab data from the api
  //     .then((posts) => {
  //       this.props.receivedPosts(posts) //now send the data to the function we have from mapDispatchToPros which wraps the app
  //       this.setState({ posts: this.props.posts })
  //     })
  // }
  componentDidMount() {
    ReadableAPI.getPosts() //grab data from the api
      .then((posts) => {
        console.log('component did mount app.js')
        this.setState({
          posts: posts
        })
    //     this.props.receivedPosts(posts) //now send the data to the function we have from mapDispatchToPros which wraps the app
    //     // this.setState({ posts: })
      })
    ReadableAPI.getCategories().then((Categories) => {
      this.setState({ categories: Categories });
    })
    console.log('component did mount app.js')
  }

  render() {
    const { posts } = this.props;
    console.log('appjs-props', this.props)
    console.log('appjs-state', this.state)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Readable</h1>
          <Navbar categories={this.state.categories}></Navbar>
        </header>
        <div className="App-body container">
          <Route exact path='/all' render={() => (
            <ListPosts category='all' posts={posts.posts} />
          )} />
          <Route path='/create' render={() => (
            <CreatePost />
          )} />
          {this.state.categories.map((category) => (
            <Route exact path={`/${category.name}`} key={category.name} render={() => (
              <ListPosts category={category.name} />
            )} />
          ))}
          {this.state.posts.map((entry) => (
            <Route path={`/post-${entry.id}`} key={`post-${entry.id}`} render={() => (
              <div>
                <PostDetails post={entry} />
              </div>
            )} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ posts, ui }) => { //grabs from the store and makes available as props
  return {
    posts: posts,
    ui: ui
  }
}

const mapDispatchToProps = (dispatch) => ({ //sends to the store
  newPost: (data) => dispatch(createPost(data)),
  receivedPosts: (posts) => dispatch(handleReceivedPosts(posts)) //handleReceivedPosts lives in the actions ... should this not be for the new posts?
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
