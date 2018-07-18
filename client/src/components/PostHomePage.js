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
        const cityId = this.props.match.params.id
        try {
            let cityRes = await axios.get(`/datab/cities/${cityId}`)
            let postRes = await axios.get(`/datab/cities/${cityId}/posts`)
            console.log(postRes)
            this.setState({
                city: cityRes.data,
                posts: postRes.data
            })
        } catch (error) {
            console.error(error)
        }
    }
    render() {
        console.log(this.state.posts)
        // const postInfo = this.state.posts.map((post) => {
        //     return (
        //         <div key={post.id}>
        //             {post.title}
        //             {post.description}
        //         </div>
        //     )
        // })
        return (
            <div>
                Hello World
            </div>
        );
    }
}

export default PostHomePage;