import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const TopTitleBox = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 5%;
    align-items: center;
    z-index: 10000;
    position: fixed;
    top: 0px;
    width:100%;
    background-color: rgb(249 247 247);
    box-shadow: .2px .2px .2px .2px;
    .newPostButton{
        
    }
`
const ImageAndPosts = styled.div`
    margin-top: 70px;
    margin-bottom: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const BottomNavBar = styled.div`
    display: grid;
    grid-template-columns: 40fr 40fr;
    justify-content: space-around;
    z-index: 10000;
    position: fixed;
    background-color: rgb(249 247 247);
    bottom: 0px;
    width:100%;
    div{
        text-align: center;
    }
`

class CityHomePage extends Component {

    state = {
        city: {},
        posts: []
    }

    componentDidMount = () => {
        this.fetchCityAndPostData()
    }

    fetchCityAndPostData = () => {
        let city = {}
        let posts = []
        axios.get(`/datab/cities/${this.props.match.params.id}`)
            .then((response) => {
                city = response.data
                return axios.get(`/datab/cities/${this.props.match.params.id}/posts`)
            })
            .then((responsePosts) => {
                posts = responsePosts.data
                let trimmedPosts = posts.map((post)=>{
                    if (post.description.length <1000){
                        return post
                    }
                    else{
                        let alteredPost = {}
                        let alteredPostDescription = post.description.slice(0,999)
                        alteredPostDescription = `${alteredPostDescription} ...`
                        alteredPost.title = post.title
                        alteredPost.description = alteredPostDescription
                        return alteredPost
                    }
                
                })
                this.setState({ city, posts: trimmedPosts })
            })
    }
    goBack = () => {
        this.props.history.goBack()
    }
    render() {
        const cityId = this.props.match.params.id
        const city = `${cityId}`
        const postState = this.state.posts.reverse()
        const cityPostTextBox = postState.map((post) => {
            return (

                <div key={post.id}>
                    <div  className='postsForCity' >


                        <Link className='linksForPosts' to={`/cities/${cityId}/posts/${post.id}`}>{post.title}</Link>
                        <br/>
                        {post.description}
                    </div>
                </div>
                
            )
        })
        const newPostLinkAddress = `/cities/${this.props.match.params.id}/posts/new`
        return (
            <div>
                <TopTitleBox>
                    <div>
                        <Link to='/' className='logo'>Travel Buddy</Link>
                    </div>
                    <div>
                        <Link to={city} className='cityName'>{this.state.city.name}</Link>
                    </div>
                </TopTitleBox>
                <ImageAndPosts>
                    <div>
                        <img className='cityPhoto' src={this.state.city.image} alt="" />
                        <div>
                            {cityPostTextBox}
                        </div>
                    </div>
                </ImageAndPosts>

                <BottomNavBar>
                    <div>
                        <button className="newPostButton" onClick={() => this.goBack()}>Back</button>
                    </div>
                    <div>
                        <button className="newPostButton">
                            <a className="newPostLink" href={newPostLinkAddress}>New Post</a>
                        </button>
                    </div>
                </BottomNavBar>
            </div>
        );
    }
}

export default CityHomePage;