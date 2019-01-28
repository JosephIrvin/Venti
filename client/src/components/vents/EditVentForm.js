import React, { Component } from 'react';
import axios from 'axios'

class EditVentForm extends Component {
    state = {
        vent: {
            mood: '',
            body: ''
        }
    }

    handleChange = (event) => {
        const newState = { ...this.state.user }
        newState[event.target.name] = event.target.value
        this.setState({ user: newState })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const payload = this.state.vent
        const ventId = this.props.ventId
        axios.patch(`/api/vents/${ventId}`, payload)
        .then((res) => {
            this.props.getSingleVent()
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text"
                        placeholder="Mood Changed?"
                        name="mood"
                        value={this.state.vent.mood}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input type="text"
                        placeholder="Update Story"
                        value={this.state.user.body}
                        onChange={this.handleChange}
                        name="body"/>
                    </div>
                    <button>Edit Vent</button>
                </form>
            </div>
        );
    }
}

export default EditVentForm;