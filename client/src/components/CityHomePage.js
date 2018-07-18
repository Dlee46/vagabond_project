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
                this.setState({ city, posts })
            })
    }
    render() {
        const cityId = this.props.match.params.id
        const postState = this.state.posts.reverse()
        const cityPostTextBox = postState.map((post) => {
            return (

                <div  className='postsForCity' key={post.id}>
                    <Link to={`/cities/${cityId}/posts/${post.id}`}>{post.title}</Link>
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