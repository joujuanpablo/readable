import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import PostForm from './PostForm'
import { handleCreatedPost } from '../actions/actions'
import * as ReadableAPI from '../utils/api'

class CreatePost extends Component {
    submitCreatePost = (id, newTimestamp, title, body, author, category) => {
        ReadableAPI.postNewPost(id, newTimestamp, title, body, author, category) //see if you can bring this in as a prop because this doesn't take into account i
        .then(
            this.props.createPost({id, newTimestamp, title, body, author, category}),
            window.alert('your post has been submitted!')
        )
    }
    render(){
        return(
            <div className='create-post'>
                <h2>Create post</h2>
                <PostForm submit={this.submitCreatePost}/>
            </div>
        )
    }
}

const mapStateToProps = ({posts}) => {
    return {
        posts,
    }
}

const mapDispatchToProps = (dispatch) => ({
        createPost: (data) => dispatch(handleCreatedPost(data))
    })
    

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreatePost));