import React, { Component } from 'react';
import styled from 'styled-components'
import { Item } from 'semantic-ui-react'


const SplashImage = styled.div`
    margin-top: 6vh;
    
    img{
        max-width: 100vw;
        min-height: 25vh;
        border: 1px solid black;
    }
`
const Content = styled.div`
margin-top: 7vw;
display: flex;
flex-direction: column;
align-items: center;
`
class HomePage extends Component {
    render() {
        return (
            <div>
                <SplashImage>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Atlanta_Downtown_Skyline.jpg" alt="" />
                </SplashImage>
                <Content>
                    <div>
                        <a href="" alt="">Atlanta</a>
                    </div>
                    <div>
                        <a href="" alt="">London</a>
                    </div>
                    <div>
                        <a href="" alt="">San Francisco</a>
                    </div>
                </Content>
            </div>
        );
    }
}

export default HomePage;