import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import HomePage from './components/HomePage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>Travel Buddy</h1>
          <Link to='/signup'>Sign Up</Link>
          <Link to='/login'>Log In</Link>
          <Switch>
            <Route exact path='/' component={HomePage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
