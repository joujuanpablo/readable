import React, { Component } from 'react'
import PostSummary from './PostSummary'
import FilterBy from './FilterBy'
import sortBy from 'sort-by'
import { connect } from 'react-redux'
import { handleReceivedPosts } from '../actions/actions'

class ListPosts extends Component {

    render() {

        return (
            <div className='posts-list'>
                <FilterBy />
                {this.props.category === 'all'
                    ? this.props.posts.posts.sort(sortBy(this.props.ui.sortBy)).reverse().map((entry) => (<PostSummary key={entry.id} post={entry} />))
                    : this.props.posts.posts.filter((post) => (post.category === this.props.category)).sort(sortBy(this.props.ui.sortBy)).reverse().map((entry) => (<PostSummary key={entry.id} post={entry} />))
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

export default connect(mapStateToProps, mapDispatchToProps)(ListPosts)