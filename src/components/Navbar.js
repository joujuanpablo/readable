import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';



class Navbar extends Component {

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
                            this.props.categories.map((category) => (
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

export default Navbar
