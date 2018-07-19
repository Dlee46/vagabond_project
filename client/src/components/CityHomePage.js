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
                let trimmedPosts = posts.map((post) => {
                    if (post.description.length < 1000) {
                        let today = new Date()
                        let todayDateTime = today.getTime()
                        let postCreateDateTime = Date.parse(post.created_at)
                        // found on stack overflow: https://stackoverflow.com/questions/47274037/finding-number-of-days-between-two-dates-in-javascript-redu         
                        let timeDiff = Math.abs(todayDateTime - postCreateDateTime)
                        let datesDiff = Math.floor(timeDiff / (1000 * 3600 * 24))
                        console.log(datesDiff)
                        post.ageOfPost = datesDiff
                        return post
                    }
                    else {
                        let alteredPost = {}
                        let alteredPostDescription = post.description.slice(0, 999)
                        alteredPostDescription = `${alteredPostDescription} ...`
                        alteredPost.title = post.title
                        alteredPost.description = alteredPostDescription
                        let today = new Date()
                        let todayDateTime = today.getTime()
                        let alteredPostCreateDateTime = Date.parse(post.created_at)
                        let timeDiff = Math.abs(todayDateTime - alteredPostCreateDateTime)
                        let datesDiff = Math.floor(timeDiff / (1000 * 3600 * 24))
                        console.log(datesDiff)
                        alteredPost.ageOfPost = datesDiff
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
        const postState = this.state.posts.reverse()
        const cityPostTextBox = postState.map((post) => {
            return (

                <div key={post.id}>
                    <div className='postsForCity' >

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
                <button className="backButton" onClick={() => this.goBack()}>Back</button>
            </div>
        );
    }
}

export default CityHomePage;