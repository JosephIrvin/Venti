import React, { Component } from 'react';
import axios from 'axios'
import '../../App.css'
import EditVentForm from './EditVentForm';
// import AddCommentForm from '../comments/AddCommentForm';
// import styled from 'styled-components'
import Comment from "../comments/Comment"

// const BGContainer = styled.div`
//     background-image: url('https://images.unsplash.com/photo-1513003604845-103fe8aaf4e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');
// `



class SingleVent extends Component {
    state = {
        vent: {
            author: '',
            body: '',
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

    createNewComment = () => {
        const ventId = this.props.match.params.ventId
        axios.post(`/api/vents/${ventId}/comments`).then((res) => {
            this.getSingleVent()
        })
    }

 

    render() {
        return (
            <div className=" App uk-flex-column uk-flex-middle uk-flex-center singleVentBG">
                <h1 className='whiteText2'>{this.state.vent.author} is feeling</h1>
                <h3 className='whiteText2'>{this.state.vent.mood}</h3>
                <h4 className='whiteText2'>{this.state.vent.body}</h4>
                <EditVentForm
                getSingleVent={this.getSingleVent}
                ventId={this.state.vent._id}
                />
                <div><button onClick={this.deleteVent}>Delete Vent</button></div>
                 <div>
                    <button onClick={this.createNewComment}>Provide Insight</button>
                </div>


                <Comment vent={this.state.vent}
                    getSingleVent={this.getSingleVent}
                    />
                

               

                
            </div>
        );
    }
}
export default SingleVent;