import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar fixed-top navbar-dark bg-dark">
                    <a class="nav-link" href="/coupons">Promos</a>
                    <a class="navbar-brand" href="/vents">Venti</a>
                    <a class='nav-link' href="/stores">Find a Store</a>
                </nav>
            </div>
        );
    }
}

export default NavBar;