import React, { Component } from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const NavBarStyle = styled.div`
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
        return (
            <div>
                <NavBarStyle>
                    <div className="siteName">
                    Travel Buddy
                    </div>
                    <Link to='/signup'>Sign Up</Link>
                    <Link to='/login'>Log In</Link>
                </NavBarStyle>
            </div>
        );
    }
}

export default NavBar;