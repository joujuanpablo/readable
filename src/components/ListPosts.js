import React, { Component } from 'react';

class ListPosts extends Component {
    render () {
        return(
            <div>{this.props.category}</div>
        )
    }
}

export default ListPosts 