import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import ListComments from './ListComments'
import TiThumbsUp from 'react-icons/lib/ti/thumbs-up'
import TiThumbsDown from 'react-icons/lib/ti/thumbs-down'
import TiEdit from 'react-icons/lib/ti/edit'
import FaTrash from 'react-icons/lib/fa/trash-o'
import * as ReadableAPI from '../utils/api'
import { voteOnPost, deletePost, createComment, editPost } from '../actions/actions'
import Modal from 'react-modal'
import PostForm from './PostForm'
import CommentForm from './CommentForm'

class PostDetails extends Component {
    state = {
        postModalOpen: false,
        commentModalOpen: false,
        postDeleted: true,
    }

    componentWillMount() {
        Modal.setAppElement('body');
    }

    componentWillUnmount() {
        if (this.state.postDeleted) {

            this.props.history.push('/all')
        }
    }

    handlePostVote = (vote) => {
        ReadableAPI.postVote(vote.id, vote.option).then(
            this.props.votePost(vote)
        )
    }

    closePostsModal = () => this.setState(() => ({ postModalOpen: false }))
    openPostsModal = () => this.setState(() => ({ postModalOpen: true }))

    openCommentModal = () => this.setState(() => ({ commentModalOpen: true}))
    closeCommentModal = () => this.setState(() => ({ commentModalOpen: false}))

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

    handleDeletePost = (id) => {
        ReadableAPI.deletePost(id)
            .then(
            window.alert('This post has been deleted!'),
            this.props.deletePost(id),
            this.setState({ postDeleted: true })
            )
    }

    submitCreateComment = (id, newTimestamp, body, author, parentId, formattedDate) => {
        ReadableAPI.addComment(id, newTimestamp, body, author, parentId)
        .then(
            this.props.createComment({id, newTimestamp, body, author, parentId, formattedDate}),
            this.closeCommentModal()
        )
    }

    render() {
        const { post } = this.props
        return (
            <div className="post-detail">
                <div className="post-detail-body">
                    <div className="post-detail-head">
                        <div className="post-detail-author">{post.author}</div>
                        <div className="post-detail-title">{post.title}</div>
                        <div className="post-detail-timestamp">{post.formattedDate}</div>
                        <div className="post-detail-votes">Votes: {post.voteScore}</div>
                        <div className="post-detail-comment-count">Comments: {post.commentCount}</div>
                    </div>
                    <div className="post-detail-content">
                        <p>{post.body}</p>
                    </div>
                    <hr />
                    <button title='vote up' className="vote-up icon-btn action-button"><TiThumbsUp size={35} onClick={() => this.handlePostVote({ id: post.id, option: 'upVote' })} /></button>
                    <button title='vote down' className="vote-down icon-btn action-button"><TiThumbsDown size={35} onClick={() => this.handlePostVote({ id: post.id, option: 'downVote' })} /></button>
                    <button title='edit post' className="edit icon-btn action-button" onClick={() => this.openPostsModal()}><TiEdit size={35} /></button>
                    <button title='delete post' className="delete icon-btn action-button" onClick={() => this.handleDeletePost(post.id)}><FaTrash size={35} /></button>
                </div>
                <div className="post-detail-comments">
                    <ListComments id={this.props.post.id} />
                    <div className="add-comment">
                        <input type="text" onClick={() => this.openCommentModal()} placeholder="write a comment..." />
                    </div>
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
                <Modal
                    className='new-comment comment modal'
                    overlayClassName='overlay'
                    isOpen={this.state.commentModalOpen}
                    onRequestClose={this.closeCommentModal}
                >
                    <CommentForm type={'Create comment'} parentId={post.id} submit={this.submitCreateComment}/>
                </Modal>

            </div>
        )
    }
}
const mapStateToProps = ({ posts, ui, comments }) => {
    return {
        posts,
        ui,
        comments,
    }
}
const mapDispatchToProps = (dispatch) => ({
    votePost: (data) => dispatch(voteOnPost(data)),
    deletePost: (data) => dispatch(deletePost(data)),
    editPost: (data) => dispatch(editPost(data)),
    createComment: (data) => dispatch(createComment(data))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostDetails))  