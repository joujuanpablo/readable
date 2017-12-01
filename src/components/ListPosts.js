import React, { Component } from 'react'
import PostSummary from './PostSummary'
import FilterBy from './FilterBy'
import sortBy from 'sort-by'
import * as ReadableAPI from '../utils/api'
import { connect } from 'react-redux'

class ListPosts extends Component {
    state = {
        sortedPosts: []
    }
    componentDidMount() {
       const { posts, ui, category } = this.props

        console.log('list posts props posts', posts.posts)
        if (category === 'all') {
            var sortedPosts = posts.posts.sort(sortBy(ui.sortBy)).reverse()
            this.setState({
                sortedPosts: sortedPosts
            })
        } else {
            var categoryPosts = posts.posts.filter((post) => (post.category === this.props.category))
            var sortedPosts = categoryPosts.sort(sortBy(ui.sortBy)).reverse()

            this.setState({
                sortedPosts: sortedPosts
            })
        }
    }

    changeSort = (sortType) => {
        var sortedPosts = this.state.sortedPosts.sort(sortBy(sortType)).reverse()
        this.setState({
            sortedPosts: sortedPosts
        })
    }

    render() {

        return (
            <div className='posts-list'>
                <FilterBy changeSort={this.changeSort} />
                {this.state.sortedPosts.map((entry) => (
                    <PostSummary key={entry.id} post={entry} />
                ))}
            </div>

        )
    }
}
const mapStateToProps = ({ ui, posts }) => { //grabs from the store and makes available as props
    return {
        ui,
        posts,
    }
}

export default connect(mapStateToProps)(ListPosts)