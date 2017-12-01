import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as ReadableAPI from '../utils/api';
import { handleReceivedCategories } from '../actions/actions'



class Navbar extends Component {

    componentDidMount() {
        ReadableAPI.getCategories().then((categories) => {
            this.props.receivedCategories(categories)
        })
    }

    render() {
        return (
            <nav className='navbar navbar-expand-lg navbar-light bg-light rounded container'>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample10" aria-controls="navbarsExample10" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-md-center" id='navbarsExample10'>
                    <ul className='navbar-nav' onSelect={this.handleSelect} >
                         <li key="all" className='nav-item'><NavLink className='nav-link' to='/all'>All Posts</NavLink></li>
                        {
                            this.props.categories.capitalizedCategories.map((category) => (
                                <li key={category} className='nav-item'><NavLink className='nav-link' to={`/${category}`}>{category}</NavLink></li>
                            ))
                        }
                        <li key="create" className='nav-item'><NavLink className='nav-link' to='/create'>Create Post</NavLink></li>
                    </ul >
                </div>
            </nav>
        )
    }
}
const mapStateToProps = ({ categories}) =>  {
    return {
        categories,
    } 
}

const mapDispatchToProps = (dispatch) => ({
    receivedCategories: (categories) => dispatch(handleReceivedCategories(categories))
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
