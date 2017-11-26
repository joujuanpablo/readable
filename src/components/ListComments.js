import React, { Component } from 'react'
import * as ReadableAPI from '../utils/api';
import Loading from 'react-loading'
import CommentSummary from './CommentSummary'

class ListComments extends Component {
    state = {
        comments: [],
        loadingComments: true,
    }

    componentDidMount() {
        ReadableAPI.getPostComments(this.props.id)
            .then((comments) => {
                this.setState({
                    comments: comments,
                    loadingComments: false,
                })
            })
    }

    render() {
        const { comments, loadingComments } = this.state
        return (
            <div className='comments-wrapper'>
                {loadingComments === true
                    ? <Loading delay={200} type='spin' color='#222' className='loading' />
                    : <div>
                        {comments.map((entry) => (
                            <CommentSummary key={entry.id} comment={entry}/>
                        ))}
                    </div>

                }
            </div>
        )
    }
}

export default ListComments