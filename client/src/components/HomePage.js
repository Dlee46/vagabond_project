import React, { Component } from 'react';
import styled from 'styled-components'

const SplashImage = styled.div`
    margin-top: 6vh;
    
    img{
        max-width: 100vw;
        min-height: 25vh;
        border: 1px solid black;
    }
`

class HomePage extends Component {
    render() {
        return (
            <div>
                <SplashImage>
                    <img src="https://files.slack.com/files-pri/T0351JZQ0-FBR6F14GY/atlanta_downtown_skyline.jpg" alt="" />
                </SplashImage>
                <div>...</div>
            </div>
        );
    }
}

export default HomePage;