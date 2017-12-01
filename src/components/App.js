import React, { Component } from 'react'
import logo from '../images/logo.png';
import '../App.css'
import { Route, withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import * as ReadableAPI from '../utils/api';
import { handleReceivedPosts } from '../actions/actions'



//Components
import Navbar from './Navbar';
import ListPosts from './ListPosts';
import CreatePost from './CreatePost';
import PostDetails from './PostDetails'


class App extends Component {
  state = {
    posts: [],
    comments: [],
  }

  componentDidMount() {
    console.log('the posts in props on app.js', this.props.posts)
    ReadableAPI.getPosts()
    .then((Posts) => {

        this.props.receivedPosts(Posts)

    })
  }

  render() {
    const { posts, categories } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Readable</h1>
          <Navbar></Navbar>
        </header>
        <div className="App-body container">
          {/* <Route exact path=''render= {() => (
              <Redirect from='/' to='/all'/>
            )}/>           */}
          <Route exact path='/all' render={() => (
            <ListPosts category='all' posts={posts.posts} />
          )} />
          <Route path='/create' render={() => (
            <CreatePost />
          )} />
          {categories.categories.map((category) => (
            <Route exact path={`/${category.name}`} key={category.name} render={() => (
              <ListPosts category={category.name} />
            )} />
          ))}
          {posts.posts.map((entry) => (
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

const mapStateToProps = ({ posts, ui, categories }) => { //grabs from the store and makes available as props
  return {
    posts,
    ui,
    categories,
  }
}

const mapDispatchToProps = (dispatch) => ({
  receivedPosts: (posts) => dispatch(handleReceivedPosts(posts))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
