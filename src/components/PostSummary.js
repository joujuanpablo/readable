import React, { Component } from 'react'
import '../index.css'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'


class PostSummary extends Component {
    render() {
        const { post } = this.props
        return (
            <div className='post-summary-wrapper'>
                <Link to={`/post-${post.id}`} className='post-summary btn btn-outline-info '>
                    <h1 className='post-title'>{post.title}</h1>
                    <div className='post-stats'>
                        <p>by: {post.author}</p>
                        <p>category: {post.category}</p>
                        <p>date: {post.formattedDate}</p>
                        <p>votes: {post.voteScore}</p>
                        <p>comments: {post.commentCount}</p>
                    </div>
                </Link> 
            </div>
        )
    }
}

export default withRouter(PostSummary) 