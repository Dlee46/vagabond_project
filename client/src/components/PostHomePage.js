import React, { Component } from 'react';
import axios from 'axios'


class PostHomePage extends Component {
    state = {
        city: {},
        posts: []
    }
    componentDidMount = () => {
        this.fetchCityAndPostData()
    }

    fetchCityAndPostData = async () => {
        const cityId = this.props.match.params.cityid
        const postId = this.props.match.params.id

        try {
            let cityRes = await axios.get(`/datab/cities/${cityId}`)
            let postRes = await axios.get(`/datab/cities/${cityId}/posts/${postId}`)
            this.setState({
                city: cityRes.data,
                posts: postRes.data
            })
        } catch (error) {
            console.error(error)
        }
    }
    deletePost = (postId) => {
        const cityId = this.props.match.params.cityid
        axios.delete(`/datab/cities/${cityId}/posts/${postId}`)
            .then((res) => {
                this.setState({
                    city: res.data,
                    posts: res.data
                })
                return (
                    this.props.history.push(`/cities/${cityId}`)
                )
            })
    }
    render() {
        const city = this.state.city
        const post = this.state.posts
        console.log("Posts", post.id)
        return (
            <div>
                <div>
                    <h4>Travel Buddy</h4>
                    {city.name}
                </div>
                {post.title}
                {post.description}
                <button onClick={() => { if (window.confirm(`Are you sure you want to delete ${post.title}?`)) this.deletePost(post.id) }}>Delete Post</button>
            </div>
        );
    }
}

export default PostHomePage;