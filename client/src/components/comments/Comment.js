import React, { Component } from 'react';
import styled from 'styled-components'
import axios from 'axios';

const Insight = styled.form`
    height: 200px;
    width: 200px;
    background-color: rgba(0, 0, 0, 0.5);
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    input {
        background-color: white;
    }

    textarea {
        background-color: white;
    }
`

const FlexContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

class Comment extends Component {
    state = {
        comment: {
            author: '',
            body: ''
        }
    }


    handleChange = (event) => {

        const updatedState = { ...this.state.comment }
        updatedState[event.target.name] = event.target.value
        this.setState({ comment: updatedState })
    }

    handleSubmit = (event, commentId) => {
        event.preventDefault()
        const payload = this.state.comment
        axios.patch(`/api/comments/${commentId}`, payload)
            .then(() => this.props.getSingleVent)
    }

    deleteComment = (event, commentId) => {
        event.preventDefault()
        console.log(commentId)
        axios.delete(`/api/comments/${commentId}`).then(() => {
            this.props.getSingleVent()
        })
    }

    render() {
        return (
            <FlexContainer>

                {this.props.vent.comments.map((comment, i) => (
                    <Insight onBlur={(event) => this.handleSubmit(event, comment._id)} key={i}>
                        
                        <div><input onChange={(event) => this.handleChange(event, comment._id)} type="text" name="author" value={comment.author}></input></div>
                        <div><textarea onChange={(event) => this.handleChange(event, comment._id)} type="text" name="body" value={comment.body}></textarea></div>
                        <button onClick={(event) => this.deleteComment(event, comment._id)}>Delete</button>
                    </Insight>
                ))}
            </FlexContainer>
                );
            }
        }
        
export default Comment;        