import React, { Component } from 'react';
import NavBar from '../NavBar';

class Coupons extends Component {
    render() {
        return (
            <div className="couponsBG d-flex flex-row align-items-center justify-content-around">
                <NavBar/>
                <div class="card" className="cardStyle">
                    <div class="card-body">
                         <h5 class="card-title whiteText2">Size Upgrade</h5>
                            <h6 class="card-subtitle mb-2  whiteText2">Expires 4/10/2020</h6>
                            <p class="card-text whiteText2">Buy a coffee of any size and upsize it for free.</p>
            </div>
</div>

<div class="card" className="cardStyle">
                    <div class="card-body">
                         <h5 class="card-title whiteText2">Free Pastry</h5>
                            <h6 class="card-subtitle mb-2  whiteText2">Expires 5/5/2019</h6>
                            <p class="card-text whiteText2">Grab a free pastry from any viable store with the purchase of a coffee.</p>
            </div>
</div>


<div class="card" className="cardStyle">
                    <div class="card-body">
                         <h5 class="card-title whiteText2">Latte of the Week</h5>
                            <h6 class="card-subtitle mb-2  whiteText2">Expires 7/10/2029</h6>
                            <p class="card-text whiteText2">Get a free small size latte of the participating stores choice of flavor.</p>
            </div>
</div>
            </div>
        );
    }
}

export default Coupons;