import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const TopTitleBox = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 5%;
    align-items: center;
    .newPostButton{
        
    }
`
const ImageAndPosts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    line-spacing: 10%;
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
    render() {
        const cityId = this.props.match.params.id
        const postState = this.state.posts.reverse()
        const cityPostTextBox = postState.map((post) => {
            return (
                <div key={post.id}>
                    <div  className='postsForCity' >
                    <Link to={`/cities/${cityId}/posts/${post.id}`}>{post.title}</Link>
                    </div>
                    
                    <div>
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
                        <h4 className='logo'>Travel Buddy</h4>
                    </div>

                    <div>
                        <h4 className='cityName'>{this.state.city.name}</h4>
                    </div>

                </TopTitleBox>

                <ImageAndPosts>
                <div>


                        <img className='cityPhoto' src={this.state.city.image} alt="" />

                    <div>
                        {cityPostTextBox}
                    </div>
                </div>

                <button className="newPostButton">
                        <a className="newPostLink" href={newPostLinkAddress}>New Post</a>
                </button>
                </ImageAndPosts>
            </div>
        );
    }
}

export default CityHomePage;