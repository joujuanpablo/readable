import React, { Component } from 'react';
import PostForm from './PostForm'

class CreatePost extends Component {
    render(){
        return(
            <div className='create-post'>
                <PostForm title='title' author='author' content='..write your post here'/>
            </div>
        )
    }
}

export default CreatePost;