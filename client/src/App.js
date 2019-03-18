import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import VentList from './components/vents/VentList'
import SingleVent from './components/vents/SingleVent'
import Stores from './components/promos/Stores';
import Coupons from './components/promos/Coupons';

class App extends Component {
  render() {
    return (
      <div className="scale d-flex flex-column justify-content-center align-items-center">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/vents" component={VentList} />
          <Route exact path="/vents/:ventId" component={SingleVent} />
          <Route exact path="/stores" component={Stores}/>
          <Route exact path="/coupons" component={Coupons}/>
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
