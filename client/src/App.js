import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import HomePage from './components/HomePage';
import styled from 'styled-components'

const NavBar = styled.div`

    display: grid;
    grid-template-columns: 60vw 15vw 15vw;
    justify-content: space-between;
    padding: 1vh 0;
    .login{
        margin-right: 5vw
    }
    .siteName{
        text-align: left;
        margin-left: 10vw
        font-weight: 900;
    }
    border: 1px solid gray;
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
            <Link className=".login" to='/login'>Log In</Link>
          </NavBar>
          <Switch>
            <Route exact path='/' component={HomePage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
