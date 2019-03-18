import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import AddVentForm from './AddVentForm'
import '../../App.css'
import NavBar from '../NavBar';
class VentList extends Component {

    state = {
        vents: [{}],
        addVentFormVisible: false
    }

    componentDidMount(){
        this.getAllVents()
    }

    getAllVents = () => {
        axios.get('/api/vents')
        .then((res) => {
            this.setState({ vents: res.data })
            console.log("res" + res.data)
            console.log("state" + this.state)
    })
        
        console.log(this.state)
    }

    toggleAddVentForm = () => {
        this.setState({ addVentFormVisible: !this.state.addVentFormVisible })
    }


    render() {
        return (
            <div className="ventListBG align-middle d-flex flex-column align-items-center align-self-center justify-content-center" >
                <NavBar/>
                 <h1 className="ventiFont">Speak your mind</h1>
                <button onClick={this.toggleAddVentForm} type="button" className="btn-light">Create New Vent</button>
                {this.state.addVentFormVisible ? <AddVentForm getAllVents={this.getAllVents} toggleAddVentForm={this.toggleAddVentForm}/> : null}

                

                {this.state.vents.map((vent , i) => (
                    <div key={i} className="App">
                        <Link to={`/vents/${vent._id}`}>
                        <h2 className="whiteText2">{vent.author}</h2>
                        <h3 className="whiteText2">{vent.mood}</h3>
                        <h4 className="whiteText2">{vent.body}</h4>
                        </Link>
                    </div>


                ))}
            

            </div>
        );
    }
}

export default VentList;