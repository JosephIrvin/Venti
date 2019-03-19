import React, { Component } from 'react';
import NavBar from '../NavBar';
import axios from 'axios'

class Coupons extends Component {

    state = {
        coupons: [{}],
    }

    componentDidMount(){
        this.getAllCoupons()
    }

    getAllCoupons = () => {
        axios.get('/api/coupons')
        .then((res) => {
            this.setState({ coupons: res.data })
            console.log("res" + res.data)
            console.log("state" + this.state)
    })
        
        console.log(this.state)
    }



    render() {
        return (
                <div className="couponsBG d-flex flex-row align-items-center justify-content-around">
                    <NavBar/>
                        {this.state.coupons.map((coupon, i) => (
                            <div key={i} class="card" className="cardStyle">
                                <div class="card-body">
                                    <h5 class="card-title whiteText2">{coupon.title}</h5>
                                        <h6 class="card-subtitle mb-2  whiteText2">{coupon.date}</h6>
                                        <p class="card-text whiteText2">{coupon.desc}</p>
                                </div>
                            </div>
                        ))}

                </div>
        );
    }
}

export default Coupons;