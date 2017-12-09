import React, { Component } from 'react'
import format from 'date-fns/format'

class CommentForm extends Component {
    state = {
        newComment: {
            id: "",
            timestamp: 0,
            body: "",
            author: "",
            parentId: "",
        },
    }

    componentDidMount() {
        if (this.state.newComment.id.length < 1) {
            const uuidv4 = require('uuid/v4');
            const theNewId = uuidv4();
            
            this.setState({
                newComment: {
                    ...this.state.newComment,
                    id: theNewId,
                    parentId: this.props.parentId
                }
            })
        }
    }

    updateNewCommentBody (body) {
        this.setState({
            newComment: {
                ...this.state.newComment,
                body,
            }
        })
    }
    
    updateNewCommentAuthor (author) {
        this.setState({
            newComment: {
                ...this.state.newComment,
                author,
            }
        })        
    }
    handleSubmit(e) {
        e.preventDefault();
        const { id, body, author, parentId } = this.state.newComment
        const newTimestamp = Date.now()
        const formattedDate = format(new Date(newTimestamp), "DD/MM/YYYY HH:mm")
        this.props.submit(id, newTimestamp, body, author, parentId, formattedDate) 

    }
    render() {
        return ( 
        <div className='comment-modal'>
            <h1>{this.props.type}</h1>
            <div className='comment-form container'>
                <form action="">
                    <div className='form-group'>
                        <label htmlFor="commentAuthor">Comment author</label>
                        <input className='form-control post-form--author post-form-field' type="text" name="comment author" placeholder='author' onChange={event => this.updateNewCommentAuthor(event.target.value)}/>
                        <small className='form-text text-muted'>This can be whatever you like since this is an annonymous app.</small>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="commentBody">Comment</label>
                        <textarea className='form-control post-form--content form-control' type="text" name="comment author" placeholder='...write your comment here' onChange={event => this.updateNewCommentBody(event.target.value)}/>
                    </div>
                    <div className='form-group'>
                        <button className='form-control post-form-field btn btn-outline-info' onClick={event => this.handleSubmit(event)}>Post</button>
                    </div>
                </form>
            </div>
        </div>
            
        )
    }
}

export default CommentForm