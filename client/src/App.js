import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import HomePage from './components/HomePage';
import styled from 'styled-components'
import CityHomePage from './components/CityHomePage';

const NavBar = styled.div`
    min-height: 10vh;
    display: grid;
    background-color: #009781;
    grid-template-columns: 60vw 15vw 15vw;
    justify-content: space-between;
    padding: 1vh 0; 
    
    .siteName{
        text-align: left;
        margin-left: 10vw;
        font-weight: bold;
        align-self: center;
        color:#f9f7ed;
    }
    border: 1px solid gray;
    a {
      font-size: larger;
      align-self: center;
      color:#f9f7ed;
    }
`


class App extends Component {
  render() {
    return ( 
      <Router>
        <div>
          <NavBar>
            <div className="siteName">
              Travel Buddy
            </div>
            <Link to='/signup'>Sign Up</Link>
            <Link to='/login'>Log In</Link>
          </NavBar>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/cities/1' component={CityHomePage}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
