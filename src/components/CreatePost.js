import React, { Component } from 'react'
import PostForm from './PostForm'
import * as ReadableAPI from '../utils/api'

class CreatePost extends Component {
    submitCreatePost = (id, newTimestamp, title, body, author, category) => {
        ReadableAPI.postNewPost(id, newTimestamp, title, body, author, category) //see if you can bring this in as a prop because this doesn't take into account i
        .then(
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

export default CreatePost;