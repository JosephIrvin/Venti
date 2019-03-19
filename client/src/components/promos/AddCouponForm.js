import React, { Component } from 'react';
import axios from 'axios'

class AddCouponForm extends Component {

    
        state = {
            coupon: {
                title: '',
                date: '',
                desc: ''
            }
        }
    
        handleChange = (event) => {
            const newState = {...this.state.coupon}
            newState[event.target.name] = event.target.value
            this.setState({ coupon: newState})
        }
    
        handleSubmit = (event) => {
            event.preventDefault()
            const payload = this.state.coupon
            axios.post('api/coupons', payload)
            .then((res) => {
                this.props.getAllCoupons()
            })
        }

    render() {
        return (
            <div>
                 <form onSubmit={this.handleSubmit}>
                    <div>
                    <input type="text" name="title" placeholder="Title of Coupon" value={this.state.coupon.title} onChange={this.handleChange} />
                    </div>
                    <div>
                    <input type="text" name="date" value={this.state.coupon.date} onChange={this.handleChange} placeholder="MM/DD/YY" />
                    </div>
                    <div>
                    <input type="text" name="desc" value={this.state.coupon.desc} onChange={this.handleChange} placeholder="Describe" />
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default AddCouponForm;