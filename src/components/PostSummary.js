import React, { Component } from 'react'
import '../index.css'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import TiThumbsUp from 'react-icons/lib/ti/thumbs-up'
import TiThumbsDown from 'react-icons/lib/ti/thumbs-down'
import TiEdit from 'react-icons/lib/ti/edit'
import FaTrash from 'react-icons/lib/fa/trash-o'
import { voteOnPost, deletePost, createComment, editPost } from '../actions/actions'
import * as ReadableAPI from '../utils/api'

//delete and vote on post should be fine, for edit you need to take into account the modal

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
                <div className='post-buttons'>
                    <button title='vote up' className="vote-up icon-btn action-button"><TiThumbsUp size={30} onClick={() => this.handlePostVote({ id: post.id, option: 'upVote' })} /></button>
                    <button title='vote down' className="vote-down icon-btn action-button"><TiThumbsDown size={30} onClick={() => this.handlePostVote({ id: post.id, option: 'downVote' })} /></button>
                    <button title='edit post' className="edit icon-btn action-button" onClick={() => this.openPostsModal()}><TiEdit size={30} /></button>
                    <button title='delete post' className="delete icon-btn action-button" onClick={() => this.handleDeletePost(post.id)}><FaTrash size={30} /></button>

                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ posts }) => {
    return {
        posts,
    }
}
const mapDispatchToProps = (dispatch) => ({
    votePost: (data) => dispatch(voteOnPost(data)),
    deletePost: (data) => dispatch(deletePost(data)),
    editPost: (data) => dispatch(editPost(data)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostSummary)) 