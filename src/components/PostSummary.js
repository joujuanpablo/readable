import React, { Component } from 'react'
import ReactDom from 'react-dom'
import '../index.css'
import { BrowserRouter, withRouter } from 'react-router-dom'

class PostSummary extends Component {
    render() {
        const { post } = this.props
        return(
            <div className='post-summary-wrapper'>
                <div className='post-summary btn btn-outline-info '>
                    <h1 className='post-title'>{post.title}</h1>
                <div className='post-stats'>
                    <p>by: {post.author}</p>
                    <p>category: {post.category}</p>                    
                    <p>date: {post.timestamp}</p>
                    <p>votes: {post.voteScore}</p>
                    <p>comments: {post.votes}</p>
                </div></div>
            </div>
        )
    }
}

export default PostSummary