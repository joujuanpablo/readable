import React, { Component } from 'react'
import PostSummary from './PostSummary'
import FilterBy from './FilterBy'
import sortBy from 'sort-by'
import { connect } from 'react-redux'
import { handleReceivedPosts } from '../actions/actions'
import * as ReadableAPI from '../utils/api';

class ListPosts extends Component {
    state = {
        sortedPosts: []
    }
    componentDidMount() {
        ReadableAPI.getPosts()
            .then((Posts) => {

                this.props.receivedPosts(Posts)

                const { posts, ui, category } = this.props

                if (category === 'all') {
                    console.log('sort these posts mate', posts.posts)
                    var sortedPosts = posts.posts.sort(sortBy(ui.sortBy)).reverse()
                    this.setState({
                        sortedPosts: sortedPosts
                    })
                } else {
                    var categoryPosts = posts.posts.filter((post) => (post.category === this.props.category))
                    var sortedCategoryPosts = categoryPosts.sort(sortBy(ui.sortBy)).reverse()

                    this.setState({
                        sortedPosts: sortedCategoryPosts
                    })
                }

            })
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