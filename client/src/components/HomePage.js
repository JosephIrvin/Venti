import React, { Component } from 'react';
import { Link } from 'react-router-dom'



class HomePage extends Component {
    render() {
        return (
            // <div className="homePageBG scale homeContain">
            //     <h1 className="ventiFont homeText">VENTI</h1>
            //     <h2 className="ventiFont2 homeText">LET OUT YOUR TALL ORDER</h2>
            //     <Link to="/vents"> 
            //     <img className="homeImg" src="https://i.imgur.com/HXDgQ3j.png" alt="ventilogo"></img>
            //     </Link>
            // </div>
            <div className="homePageBG align-middle d-flex flex-column align-items-center align-self-center justify-content-center">
                <h1 className="ventiFont uk-animation-fade uk-animation-kenburns">VENTI</h1>
                <h2 className="ventiFont2 uk-animation-fade uk-animation-kenburns">LET OUT YOUR TALL ORDER</h2>
                <Link to="/vents">
                    <img className="homeImg uk-animation-fade uk-animation-kenburns" src="https://i.imgur.com/HXDgQ3j.png" alt="ventilogo"></img>
                </Link>
            </div>
        );
    }
}

export default HomePage;