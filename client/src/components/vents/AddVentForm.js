import React, { Component } from 'react';
import axios from 'axios'

class AddVentForm extends Component {
    state = {
        vent: {
            author: '',
            mood: '',
            body: ''
        }
    }

    handleChange = (event) => {
        const newState = {...this.state.vent}
        newState[event.target.name] = event.target.value
        this.setState({ vent: newState})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const payload = this.state.vent
        axios.post('api/vents', payload)
        .then((res) => {
            this.props.getAllVents()
            this.props.toggleAddVentForm()
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                    <input type="text" name="author" placeholder="Your Alias" value={this.state.vent.author} onChange={this.handleChange} />
                    </div>
                    <div>
                    <input type="text" name="mood" value={this.state.vent.mood} onChange={this.handleChange} placeholder="Your Mood" />
                    </div>
                    <div>
                    <input type="text" name="body" value={this.state.vent.body} onChange={this.handleChange} placeholder="What's going on?" />
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default AddVentForm;