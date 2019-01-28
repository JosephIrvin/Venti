import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import AddVentForm from './AddVentForm'

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
        .then((res) => this.setState({ vents: res.data }))
        console.log(this.state)
    }

    toggleAddVentForm = () => {
        this.setState({ addVentFormVisible: !this.state.addVentFormVisible })
    }


    render() {
        return (
            <div>
                 <h1>Vents</h1>
                <button onClick={this.toggleAddVentForm}>Create New Vent</button>
                {this.state.addVentFormVisible ? <AddVentForm getAllVents={this.getAllVents} toggleAddVentForm={this.toggleAddVentForm}/> : null}

                

                {this.state.vents.map((vent , i) => (
                    <div key={i}>
                        <Link to={`/vents/${vent._id}`}>
                        <h2>{vent.author}</h2>
                        <h3>{vent.mood}</h3>
                        <h4>{vent.body}</h4>
                        </Link>
                    </div>
                ))}
            

            </div>
        );
    }
}

export default VentList;