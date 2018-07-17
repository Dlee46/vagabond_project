import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import HomePage from './components/HomePage';
import CityHomePage from './components/CityHomePage';



class App extends Component {
  render() {
    const HomePageWrapper = (props) => (
      <HomePage {...props} />
    )

    const CityHomePageWrapper = (props) => {
      return (
        <CityHomePage {...props} />
      )
    }
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' render={HomePageWrapper} />
            <Route exact path='/cities/:id' render={CityHomePageWrapper} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
