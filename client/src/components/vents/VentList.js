import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import AddVentForm from './AddVentForm'
import '../../App.css'
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
            <div className="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle uk-flex-column ventListBG" >
                 <h1 className="ventiFont"> Vents </h1>
                <button onClick={this.toggleAddVentForm}>Create New Vent</button>
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