import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar fixed-top navbar-dark bg-dark">
                    <a className="nav-link" href="/coupons">Promos</a>
                    <a className="navbar-brand" href="/vents">Venti</a>
                    <a className='nav-link' href="/stores">Find a Store</a>
                </nav>
            </div>
        );
    }
}

export default NavBar;