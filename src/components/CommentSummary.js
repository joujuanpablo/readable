import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import TiThumbsUp from 'react-icons/lib/ti/thumbs-up'
import TiThumbsDown from 'react-icons/lib/ti/thumbs-down'
import FaTrash from 'react-icons/lib/fa/trash-o'
import TiEdit from 'react-icons/lib/ti/edit'
import { voteOnComment, deleteComment } from '../actions/actions'
import * as ReadableAPI from '../utils/api'

class CommentSummary extends Component {

    handleCommentVote = (vote) => {
        ReadableAPI.commentVote(vote.id, vote.option)
        .then(
            this.props.voteComment(vote)
        )
    }

    handleDeleteComment = (id) => {
        console.log('this is the id od the comment', id);
        ReadableAPI.deleteComment(id)
        .then(
            this.props.deleteComment(id)
        )
    }

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
                <button className="vote-up icon-btn"><TiThumbsUp size={30} onClick={() => this.handleCommentVote({ id: comment.id, option: 'upVote' })}/></button>
                <button className="vote-down icon-btn"><TiThumbsDown size={30} onClick={() => this.handleCommentVote({ id: comment.id, option: 'downVote' })}/></button>
                <button className="edit icon-btn"><TiEdit size={30} /></button>
                <button title='delete comment' className="delete icon-btn" onClick={() => this.handleDeleteComment(comment.id)}><FaTrash size={30} /></button>

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
    deleteComment: (data) => dispatch(deleteComment(data))
})

export default withRouter(connect(mapStateProps, mapDispatchToProps)(CommentSummary))