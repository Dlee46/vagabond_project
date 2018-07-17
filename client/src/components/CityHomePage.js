import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'

const TopTitleBox = styled.div`
    display: grid;
    grid-template-columns: 30vw 50vw 15vw;
    .newPostButton{
        
    }
`

class CityHomePage extends Component {

    state = {
        city:{},
        posts: []
    }

    componentDidMount=() =>{
        this.fetchCityAndPostData()
    }

    fetchCityAndPostData = () =>{
        let city = {}
        let posts = []
        axios.get('/datab/cities/1')
        .then((response)=>{
            city = response.data
            console.log(response.data)
            return axios.get('/datab/cities/1/posts')
        })
        .then((responsePosts)=>{
            posts = responsePosts.data
            this.setState({city,posts})
        })
    }
    render() {
        const cityPostTextBox = this.state.posts.map((post)=>{
            return (
                <div>
                    {post.description}
                </div>
            )
        })
        return (
            <div>
                <TopTitleBox>
                    <div>
                        <h4>Travel Buddy</h4>
                    </div>

                    <div>
                        <h4>{this.state.city.name}</h4>
                    </div>

                    <button className="newPostButton">
                        New Post
                    </button>
                    
                    <div>
                        {cityPostTextBox}
                    </div>
                </TopTitleBox>
            </div>
        );
    }
}

export default CityHomePage;