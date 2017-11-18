import React, { Component } from 'react'
import PostSummary from './PostSummary'

class ListPosts extends Component {

    render() {
        console.log("yoyo", this.props)
        const thePosts = this.props.posts.entries
        return (
            <div className='posts-list'>
                {thePosts.map((entry) => (
                    <PostSummary key={entry.id} post={entry}/>
                ))}
            </div>

        )
    }
}

export default ListPosts 