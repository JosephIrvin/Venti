import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import VentList from './components/vents/VentList'
import SingleVent from './components/vents/SingleVent'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/vents" component={VentList} />
          <Route exact path="/vents/:ventId" component={SingleVent} />
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
