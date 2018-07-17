import React, { Component } from 'react';
import styled from 'styled-components'
import { Card, Image } from 'semantic-ui-react'
import NavBar from './NavBar'


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
const Cardbox = styled.div`
 
 max-width: 100vw;
 min-height: 10vh;
 margin:50px;
 box-shadow: 0px 57px 34px -40px rgba(0, 0, 0, 0.3), 0px 3px 40px 2px rgba(0, 0, 0, 0.2);
 a{
     align-self: center;
 }
 


`

class HomePage extends Component {
    state = {
        showHomeView: true,
    }
    render() {
        return (
            <div>
                <NavBar />
                <SplashImage>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Atlanta_Downtown_Skyline.jpg" alt="" />
                </SplashImage>
                <Content>
                    <Cardbox>
                        <Card>
                            <Image src="https://secondcropcreative.com/perfectloops/images/chicago-timelapse.gif" height={200} />
                            <a href="/cities/1" alt="">Atlanta</a>
                        </Card>
                    </Cardbox>



                    <Cardbox>
                        <Card>
                            <Image src=" https://static.wixstatic.com/media/92dd1d_f6e95de6a63c4021ba96391bcdf27a15~mv2_d_2560_1338_s_2.gif" height={200} />
                            <a href="" alt="">London</a>
                        </Card>
                    </Cardbox>

                    <Cardbox>
                        <Card>
                            <Image src="https://i.pinimg.com/originals/3c/76/ef/3c76ef5230967fe6ef22c07e126f4697.gif" height={200} />
                            <a href="" alt="">San Francisco</a>
                        </Card>
                    </Cardbox>

                </Content>
            </div>
        );
    }
}

export default HomePage;