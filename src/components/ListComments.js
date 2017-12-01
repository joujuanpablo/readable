import React, { Component } from 'react'
import * as ReadableAPI from '../utils/api';
import Loading from 'react-loading'
import CommentSummary from './CommentSummary'

import { connect } from 'react-redux'
import { handleReceivedComments } from '../actions/actions'


class ListComments extends Component {
    state = {
        comments: [],
        loadingComments: true,
    }

    componentDidMount() {
        ReadableAPI.getPostComments(this.props.id)
            .then((comments) => {
                this.props.receivedComments(comments)
                console.log('props for listcomments', this.props)
                this.setState({
                    loadingComments: false,
                })
            })
    }

    render() {
        const { loadingComments } = this.state
        return (
            <div className='comments-wrapper'>
                {loadingComments === true
                    ? <Loading delay={200} type='spin' color='#222' className='loading' />
                    : <div>
                        {this.props.comments.comments.map((entry) => (
                            <CommentSummary key={entry.id} comment={entry}/>
                        ))}
                    </div>

                }
            </div>
        )
    }
}

const mapStateToProps = ({ comments }) => {
    return  {
        comments: comments,
    }
}
const mapDispatchToProps = (dispatch) => ({
    receivedComments: (comments) => dispatch(handleReceivedComments(comments))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListComments)