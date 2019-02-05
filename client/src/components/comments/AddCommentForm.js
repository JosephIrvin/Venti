import React, { Component } from 'react';
import axios from 'axios'

class AddCommentForm extends Component {
    state = {
        comment: {
            author: '',
            body: ''
        }
    }

    handleChange = (event) => {
        const newState = {...this.state.comment}
        newState[event.target.name] = event.target.value
        this.setState({ comment: newState})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const ventId = this.props.ventId
        console.log(ventId)
        const payload = this.state.comment
        axios.post(`/vents/${ventId}/comments`, payload)
        .then((res) => {
            this.props.getSingleVent()
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                    <input type="text" name="author" placeholder="Your Alias" value={this.state.comment.author} onChange={this.handleChange} />
                    </div>
                    <div>
                    <input type="text" name="body" value={this.state.comment.body} onChange={this.handleChange} placeholder="Give your insight" />
                    </div>
                    <button>Submit Comment</button>
                </form>
            </div>
        );
    }
}

export default AddCommentForm;