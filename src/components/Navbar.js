import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as ReadableAPI from '../utils/api';
import { capitalize } from '../utils/helpers'


class Navbar extends Component {
    state = {
        categories: [],
    }

    componentDidMount() {
        ReadableAPI.getCategories().then((categories) => {
            const categoryNames = categories.map((category) => capitalize(category.name))
            console.log(categoryNames)
            this.setState({ categories: categoryNames });
        })
    }

    render() {
        return (
            <nav className='navbar navbar-expand-lg navbar-light bg-light rounded'>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample10" aria-controls="navbarsExample10" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-md-center" id='navbarsExample10'>
                    <ul className='navbar-nav' onSelect={this.handleSelect} >
                        {
                            this.state.categories.map((category) => (
                                <li key={category} className='nav-item'><Link className='nav-link' to={`/${category}`}>{category}</Link></li>
                            ))
                        }
                        <li key="create" className='nav-item'><Link className='nav-link' to='/create'>Create Post</Link></li>
                    </ul >
                </div>
            </nav>
        )
    }
}

export default Navbar;
