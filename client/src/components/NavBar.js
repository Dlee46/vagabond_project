import React, { Component } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'




class NavBar extends Component {
    render() {
        return (
            <div className='navBarStyle'>
                <h4 className='logo'>Travel Buddy</h4>
                <div>
                    <Button className='newPostButton'><Link className='newPostLink' to='/signup'>Sign Up</Link></Button>
                    <Button className='newPostButton'><Link className='newPostLink' to='/login'>Log In</Link></Button>
                </div>
            </div>
        );
    }
}

export default NavBar;