import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import TiThumbsUp from 'react-icons/lib/ti/thumbs-up'
import TiThumbsDown from 'react-icons/lib/ti/thumbs-down'
import FaTrash from 'react-icons/lib/fa/trash-o'
import TiEdit from 'react-icons/lib/ti/edit'
import { voteOnComment, deleteComment, editComment } from '../actions/actions'
import * as ReadableAPI from '../utils/api'
import Modal from 'react-modal'
import CommentForm from './CommentForm'

class CommentSummary extends Component {

    state = {
        editModalOpen: false,
    }

    handleCommentVote = (vote) => {
        ReadableAPI.commentVote(vote.id, vote.option)
        .then(
            this.props.voteComment(vote)
        )
    }

    handleDeleteComment = (id) => {
        ReadableAPI.deleteComment(id)
        .then(
            this.props.deleteComment(id)
        )
    }

    handleCommentEdit = () => {
        this.setState({editModalOpen: true})
    }

    submitEditComment = (id, newTimestamp, body, author, parentId, formattedDate, voteScore) => {
        ReadableAPI.editComment(id, newTimestamp, body)
        .then(
            this.props.editComment({id, newTimestamp, body, author, parentId, formattedDate, voteScore}),
            this.editModalClose()
        )
        
    }

    editModalClose = () => this.setState(() => ({ editModalOpen: false }))
    editModalOpen = () => this.setState(() => ({ editModalOpen: true }))

    render() {
        const { comment } = this.props
        return (
            <div className="comment-summary">
                <div className="comment-author">
                    {comment.author}
                </div>
                <div className="comment-time">
                    {comment.formattedDate}
                </div>
                <div className="comment-time">
                    Vote score: {comment.voteScore}
                </div>
                <div className="comment-body">
                    {comment.body}
                </div>
                <button className="vote-up icon-btn action-button" onClick={() => this.handleCommentVote({ id: comment.id, option: 'upVote' })}><TiThumbsUp size={30} /></button>
                <button className="vote-down icon-btn action-button" onClick={() => this.handleCommentVote({ id: comment.id, option: 'downVote' })}><TiThumbsDown size={30}/></button>
                <button className="edit icon-btn action-button" onClick={() => this.handleCommentEdit(comment)}><TiEdit size={30} /></button>
                <button title='delete comment' className="delete icon-btn action-button" onClick={() => this.handleDeleteComment(comment.id)}><FaTrash size={30} /></button>
                <Modal
                    className='new-comment comment modal'
                    overlayClassName='overlay'
                    isOpen={this.state.editModalOpen}
                    onRequestClose={this.editModalClose}
                >
                    <CommentForm type={'Edit comment'} comment={comment} parentId={comment.parentId} submit={this.submitEditComment}/>
                </Modal>
            </div>
        )

    }
}

const mapStateProps = ({comments}) => {
    return {
        comments,
    }
}
const mapDispatchToProps = (dispatch) => ({
    voteComment: (data) => dispatch(voteOnComment(data)),
    deleteComment: (data) => dispatch(deleteComment(data)),
    editComment: (data) => dispatch(editComment(data)),
})

export default withRouter(connect(mapStateProps, mapDispatchToProps)(CommentSummary))