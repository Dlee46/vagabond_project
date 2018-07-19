import React, { Component } from 'react';
import styled from 'styled-components'
import { Card, Image,Button } from 'semantic-ui-react'
import NavBar from './NavBar'


const SplashImage = styled.div`
    
    
    
    img{
        max-width: 200vw;
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
 text-align: center;
 font-size: 20px;
 max-width: 100vw;
 min-height: 10vh;
 margin:50px;
 box-shadow: 0px 57px 34px -40px rgba(0, 0, 0, 0.3), 0px 3px 40px 2px rgba(0, 0, 0, 0.2);


 
 


`

class HomePage extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <SplashImage>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Atlanta_Downtown_Skyline.jpg" height={250} />
                </SplashImage>
                <Content>
                    <Cardbox>
                        <Card>
                            <Image src="https://secondcropcreative.com/perfectloops/images/chicago-timelapse.gif" height={200} />
                            <a href="/cities/1" alt="">
                                
                                Atlanta
                            </a>
                        </Card>
                    </Cardbox>



                    <Cardbox>
                        <Card>
                            
                            <a href="" alt="">
                                <Image src=" https://static.wixstatic.com/media/92dd1d_f6e95de6a63c4021ba96391bcdf27a15~mv2_d_2560_1338_s_2.gif" height={200} />
                               London
                            </a>
                        </Card>
                    </Cardbox>

                    <Cardbox>
                        <Card>
                            <a href="" alt="">
                                <Image src="http://25.media.tumblr.com/e8a707159978b438ceb551a23bb2d692/tumblr_mszcndDLUl1rkpy56o1_500.gif" height={200} />
                                San Francisco
                            </a>
                        </Card>
                    </Cardbox>

                </Content>
            </div>
        );
    }
}

export default HomePage;