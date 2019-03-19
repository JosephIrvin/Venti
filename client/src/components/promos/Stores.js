import React, { Component } from 'react';
import NavBar from '../NavBar';
import Map from './Map';

class Stores extends Component {
    render() {
        return (
            <div className="storeBG d-flex flex-column align-items-center align-self-center justify-content-around">
                <NavBar/>
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d51244.9492791867!2d-84.3806951937817!3d33.748540996483115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sCoffee!5e0!3m2!1sen!2sus!4v1552518990706" width="600" height="450" frameborder="0"  allowfullscreen></iframe> */}
                <Map/>
                <h2 className="whiteText2 storetextbg">Map of stores where you can get a discount for using the app</h2>

                <div id="map"></div>
            </div>
        );
    }
}

export default Stores;