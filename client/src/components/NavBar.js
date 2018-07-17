import React, { Component } from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const NavBar = styled.div`
    min-height: 10vh;
    display: grid;
    grid-template-columns: 60vw 15vw 15vw;
    justify-content: space-between;
    padding: 1vh 0; 
    .siteName{
        text-align: left;
        margin-left: 10vw;
        font-weight: bold;
        align-self: center;
    }
    border: 1px solid gray;
    a {
      font-size: larger;
      align-self: center;
    }
`

class NavBar extends Component {
    render() {
        const NavBarWrapper = (props) =>{

          }
        return (
            <div>
                <NavBar>
                    <div className="siteName">
                    Travel Buddy
                    </div>
                    <Link to='/signup'>Sign Up</Link>
                    <Link to='/login'>Log In</Link>
                </NavBar>
            </div>
        );
    }
}

export default NavBar;