import React, { Component } from 'react'
import PostSummary from './PostSummary'
import FilterBy from './FilterBy'
import sortBy from 'sort-by'
import * as ReadableAPI from '../utils/api'
import { connect } from 'react-redux'

class ListPosts extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        if (this.props.category === 'all') {
            ReadableAPI.getPosts()
                .then((posts) => {
                    var sortedPosts = posts.sort(sortBy(this.props.ui.sortBy)).reverse()

                    var stampedPosts = sortedPosts.map((post) => {
                        let dateTime = new Date(post.timestamp)
                        dateTime = dateTime.toISOString()
                        post['formattedDate'] = dateTime
                    })

                    this.setState({
                        posts: sortedPosts
                    })
                })
        } else {
            ReadableAPI.getCategoryPosts(this.props.category)
                .then((posts) => {
                    var sortedPosts = posts.sort(sortBy(this.props.ui.sortBy)).reverse()
                    var stampedPosts = sortedPosts.map((post) => {
                        let dateTime = new Date(post.timestamp)
                        dateTime = dateTime.toISOString()
                        post['formattedDate'] = dateTime
                    }

                    )
                    this.setState({
                        posts: sortedPosts
                    })
                })
        }
    }

    changeSort = (sortType) => {
        var sortedPosts = this.state.posts.sort(sortBy(sortType)).reverse()
        this.setState({
            posts: sortedPosts
        })
    }

    render() {

        return (
            <div className='posts-list'>
                <FilterBy changeSort={this.changeSort} />
                {this.state.posts.map((entry) => (
                    <PostSummary key={entry.id} post={entry} />
                ))}
            </div>

        )
    }
}
const mapStateToProps = ({ ui }) => { //grabs from the store and makes available as props
    return {
        ui: ui
    }
}

export default connect(mapStateToProps)(ListPosts)