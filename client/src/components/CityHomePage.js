import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const TopTitleBox = styled.div`
    display: grid;
    grid-template-columns: 30vw 50vw 20vw;
    .newPostButton{
        
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
                this.setState({ city, posts })
            })
    }
    render() {
        const cityId = this.props.match.params.id
        const postState = this.state.posts
        const cityPostTextBox = postState.map((post) => {
            return (
                <div key={post.id}>
                    <Link to={`/cities/${cityId}/posts/${post.id}`}>{post.title}</Link>
                </div>
            )
        })
        const newPostLinkAddress = `/cities/${this.props.match.params.id}/posts/new`
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
                        <a href={newPostLinkAddress}>New Post</a>
                    </button>
                </TopTitleBox>

                <div>
                    <div>
                        <img src={this.state.city.image} alt="" />
                    </div>
                    <div>
                        {cityPostTextBox}
                    </div>
                </div>
            </div>
        );
    }
}

export default CityHomePage;