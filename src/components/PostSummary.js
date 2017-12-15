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
import Modal from 'react-modal'
import PostForm from './PostForm'

class PostSummary extends Component {
    state = {
        postModalOpen: false,
    }

    componentWillMount() {
        Modal.setAppElement('body');
    }

    handlePostVote = (vote) => {
        ReadableAPI.postVote(vote.id, vote.option).then(
            this.props.votePost(vote)
        )
    }
    handleDeletePost = (id) => {
        ReadableAPI.deletePost(id)
            .then(
            window.alert('This post has been deleted!'),
            this.props.deletePost(id),
            )
    }
    closePostsModal = () => this.setState(() => ({ postModalOpen: false }))
    openPostsModal = () => this.setState(() => ({ postModalOpen: true }))

    submitEditPost = (id, newTimestamp, title, body, author, category) => {
        ReadableAPI.editPost(id, title, body)
            .then(
                this.props.editPost({id, title, body})
            )
            .then( 
                this.closePostsModal(),
                window.alert('Your post edits have been submitted')
            )
    }

    render() {
        const { post } = this.props
        return (
            <div className='post-summary-wrapper'>
                <Link to={`/${post.category}/post-${post.id}`} className='post-summary btn btn-outline-info '>
                    <div className='post-summary-header'>
                        <div className='post-title'>{post.title}</div>
                        <p className='post-author'>{post.author}</p>
                        <p className='post-summary-timestamp'>date: {post.formattedDate}</p>
                    </div>
                    <div className='post-stats'>
                        <p>Category: {post.category}</p>
                        <p>Votes: {post.voteScore}</p>
                        <p>Comments: {post.commentCount}</p>
                    </div>
                </Link>
                <div className='post-buttons'>
                    <button title='vote up' className="vote-up icon-btn action-button"><TiThumbsUp size={30} onClick={() => this.handlePostVote({ id: post.id, option: 'upVote' })} /></button>
                    <button title='vote down' className="vote-down icon-btn action-button"><TiThumbsDown size={30} onClick={() => this.handlePostVote({ id: post.id, option: 'downVote' })} /></button>
                    <button title='edit post' className="edit icon-btn action-button" onClick={() => this.openPostsModal()}><TiEdit size={30} /></button>
                    <button title='delete post' className="delete icon-btn action-button" onClick={() => this.handleDeletePost(post.id)}><FaTrash size={30} /></button>

                </div>
                <Modal
                    className='modal'
                    overlayClassName='overlay'
                    isOpen={this.state.postModalOpen}
                    onRequestClose={this.closePostsModal}
                >
                    <h2>Edit Post</h2>
                    <PostForm post={post} submit={this.submitEditPost} />
                </Modal>
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