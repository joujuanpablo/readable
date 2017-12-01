import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import ListComments from './ListComments'
import TiThumbsUp from 'react-icons/lib/ti/thumbs-up';
import TiThumbsDown from 'react-icons/lib/ti/thumbs-down'
import TiEdit from 'react-icons/lib/ti/edit'

class PostDetails extends Component {
    componentDidMount() {
        console.log('post-details props', this.props)
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
                    </div>
                    <div className="post-detail-content">
                        <p>{post.body}</p>
                    </div>
                    <hr />
                    <button className="vote-up icon-btn"><TiThumbsUp size={35} /></button>
                    <button className="vote-down icon-btn"><TiThumbsDown size={35} /></button>
                    <button className="edit icon-btn"><TiEdit size={35} /></button>
                </div>
                <div className="post-detail-comments">
                    <ListComments id={this.props.post.id} />
                    <div className="add-comment">
                        <input type="text" placeholder="write a comment..." />
                    </div>
                </div>
            </div>

        )


    }
}
const mapStateToProps = ({ posts, ui }) => {
    return {
        posts: posts,
        ui: ui
    }
}

export default withRouter(connect(mapStateToProps)(PostDetails))  