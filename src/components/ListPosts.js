import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import PostSummary from './PostSummary'
import FilterBy from './FilterBy'
import sortBy from 'sort-by'
import { connect } from 'react-redux'
import { handleReceivedPosts } from '../actions/actions'

class ListPosts extends Component {

    render() {
        const sortedList = this.props.posts.sort(sortBy(this.props.ui.sortBy)).reverse();
        return (
            <div className='posts-list'>
                <FilterBy />
                {this.props.category === 'all'
                    ? sortedList.map(post => <PostSummary key={post.id} post={post} />)
                    : sortedList.filter(post => post.category === this.props.category).map(entry => <PostSummary key={entry.id} post={entry} />)
                }
            </div>

        )
    }
}
const mapStateToProps = ({ ui, posts, categories }) => { //grabs from the store and makes available as props
    return {
        ui,
        posts,
        categories,
    }
}
const mapDispatchToProps = (dispatch) => ({
    receivedPosts: (posts) => dispatch(handleReceivedPosts(posts))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListPosts))