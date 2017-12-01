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
                    <div className='post-summary-header'>
                        <div className='post-title'>{post.title}</div>
                        <p className='post-author'>{post.author}</p>
                        <p className='post-summary-timestamp'>date: {post.formattedDate}</p>
                    </div>
                    <div className='post-stats'>
                        <p>category: {post.category}</p>                        
                        <p>votes: {post.voteScore}</p>
                        <p>comments: {post.commentCount}</p>
                    </div>
                </Link> 
            </div>
        )
    }
}

export default withRouter(PostSummary) 