import React, { Component } from 'react'
import logo from '../images/logo.png';
import '../App.css'
import { Route, withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import * as ReadableAPI from '../utils/api';
import { handleReceivedPosts, handleReceivedCategories, voteOnPost } from '../actions/actions'



//Components
import Navbar from './Navbar';
import ListPosts from './ListPosts';
import CreatePost from './CreatePost';
import PostDetails from './PostDetails'


class App extends Component {

  componentDidMount() {
    ReadableAPI.getCategories().then((categories) => {
      this.props.receivedCategories(categories)
    })
    ReadableAPI.getPosts()
      .then((Posts) => {
        this.props.receivedPosts(Posts)

      })
  }

  render() {
    const { categories, posts } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Readable</h1>
          <Navbar categories={categories}></Navbar>
        </header>
        <div className="App-body container">
          {/* <Route exact path=''render= {() => (
              <Redirect from='/' to='/all'/>
            )}/>           */}
          <Route exact path='/all' render={() => (
            <ListPosts category='all' />
          )} />
          <Route path='/create' render={() => (
            <CreatePost />
          )} />
          {categories.map((category) => (
            <Route exact path={`/${category}`} key={category} render={() => (
              <ListPosts category={category} />
            )} />
          ))}
          {posts.map((post) => (
            <Route path={`/post-${post.id}`} key={`post-${post.id}`} render={() => (
              <div>
                <PostDetails post={post} />
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
  receivedPosts: (posts) => dispatch(handleReceivedPosts(posts)),
  votePost: (data) => dispatch(voteOnPost(data)),
  receivedCategories: (categories) => dispatch(handleReceivedCategories(categories))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
