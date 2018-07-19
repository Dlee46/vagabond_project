import React, { Component } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'



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
            <div className='navBarStyle'>
                <h4 className='logo'>Travel Buddy</h4>
                <div>
                    <Button color='red' className='newPostButton'><Link className='newPostLink' to='/signup'>Sign Up</Link></Button>
                    <Button  color ='red' className='newPostButton'><Link className='newPostLink' to='/login'>Log In</Link></Button>
                </div>
            </div>
        );
    }
}

export default NavBar;