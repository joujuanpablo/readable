import React, { Component } from 'react'
import TiThumbsUp from 'react-icons/lib/ti/thumbs-up'
import TiThumbsDown from 'react-icons/lib/ti/thumbs-down'
import TiEdit from 'react-icons/lib/ti/edit'

class CommentSummary extends Component {
    // state = {
    //     comment: {}
    // }
    componentDidMount() {
        // let dateTime = new Date(this.props.comment.timestamp)
        // dateTime = dateTime.toISOString()

        // this.setState({
        //     comment: this.props.comment,
        //     dateTime
        //     }
        // )
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
                <div className="comment-body">
                    {comment.body}
                </div>
                <button className="vote-up icon-btn"><TiThumbsUp size={30} /></button>
                <button className="vote-down icon-btn"><TiThumbsDown size={30} /></button>
                <button className="edit icon-btn"><TiEdit size={30} /></button>
            </div>
        )

    }
}

export default CommentSummary