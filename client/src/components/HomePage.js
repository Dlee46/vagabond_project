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
`
class HomePage extends Component {
    render() {
        return (
            <div>
                <SplashImage>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Atlanta_Downtown_Skyline.jpg" alt="" />
                </SplashImage>
                <Content>
                    <Item.Group divided>
                        <Item>
                            <Item.Image size='tiny' src='/images/wireframe/image.png' />
                            <Item.Content verticalAlign='middle'>Content A</Item.Content>
                        </Item>

                        <Item>
                            <Item.Image size='tiny' src='/images/wireframe/image.png' />
                            <Item.Content verticalAlign='middle'>Content B</Item.Content>
                        </Item>

                        <Item>
                            <Item.Image size='tiny' src='/images/wireframe/image.png' />
                            <Item.Content content='Content C' verticalAlign='middle' />
                        </Item>
                    </Item.Group>
                </Content>
            </div>
        );
    }
}

export default HomePage;