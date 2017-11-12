import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Navbar extends Component {

    render() {
        return (
            <nav className='navbar navbar-expand-lg navbar-light bg-light rounded'>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample10" aria-controls="navbarsExample10" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-md-center" id='navbarsExample10'>
                    <ul className='navbar-nav' onSelect={this.handleSelect} >
                        {
                            this.props.categories.map((category) => (
                                <li eventKey={category} className='nav-item'><Link className='nav-link' to={`/${category}`}>{category}</Link></li>
                            ))
                        }
                        <li eventKey="create" className='nav-item'><Link className='nav-link' to='/create'>Create Post</Link></li>
                    </ul >
                </div>
            </nav>
        )
    }
}

export default Navbar;
