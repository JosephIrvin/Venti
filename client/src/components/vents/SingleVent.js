import React, { Component } from 'react';
import axios from 'axios'
import EditVentForm from './EditVentForm';

class SingleVent extends Component {
    state = {
        vent: {
            comments: [{}]
        }
    }

    componentDidMount() {
        this.getSingleVent()
    }

    getSingleVent = () => {
        const ventId = this.props.match.params.ventId
        axios.get(`/api/vents/${ventId}`)
        .then((res) => {
            this.setState({ vent: res.data })
        })
    }

    deleteVent = () => {
        const ventId = this.props.match.params.ventId
        axios.delete(`/api/vents/${ventId}`)
        .then(() => this.props.history.goBack())
    }


    render() {
        return (
            <div>
                <h1>{this.state.vent.author} is feeling</h1>
                <h2>{this.state.vent.mood}</h2>
                <EditVentForm
                getSingleVent={this.getSingleVent}
                ventId={this.state.vent._id}
                />
                <div><button onClick={this.deleteVent}>Delete Vent</button></div>
                {this.state.vent.comments.map((comment, i) => (
                    <div key={i}>
                        <h3>{comment.author}</h3>
                        <p>{comment.body}</p>
                    </div>
                ))}
            </div>
        );
    }
}
export default SingleVent;