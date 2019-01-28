import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>Hello, welcome to the landing page</h1>
                <Link to="/vents"> 
                <button>Log In</button>
                </Link>
            </div>
        );
    }
}

export default HomePage;