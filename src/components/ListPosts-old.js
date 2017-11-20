import React, { Component } from 'react'
import PostSummary from './PostSummary'
import FilterBy from './FilterBy'
import sortBy from 'sort-by'

class ListPosts extends Component {

    render() {
        console.log("list-posts", this.props)
        const visiblePosts = this.props.posts.entries
        const sortedPosts = visiblePosts.sort(sortBy(this.props.sorting))

        return (
            <div className='posts-list'>
                <FilterBy/>
                {visiblePosts.map((entry) => (
                    <PostSummary key={entry.id} post={entry}/>
                ))}
            </div>

        )
    }
}

export default ListPosts 