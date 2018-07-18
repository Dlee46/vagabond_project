import React, { Component } from 'react';
import axios from 'axios'


class PostHomePage extends Component {
    state = {
        city: {},
        posts: [],
        showEdit: false
    }
    componentDidMount = () => {
        this.fetchCityAndPostData()
    }
    handleToggle = () => {
        const editPost = !this.state.showEdit
        this.setState({
            showEdit: editPost
        })
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
    handleChangeInInputFields = (event) => {
        const inputField = event.target.name
        const newValue = event.target.value
        const alteredPost = { ...this.state.post }
        alteredPost[inputField] = newValue
        this.setState({ post: alteredPost })
    }
    handleSubmitNewPost = (event) => {
        event.preventDefault()
        let newPost = this.state.post
        const cityId = this.props.match.params.cityId
        const postId = this.props.match.params.id
        axios.patch(`/datab/cities/${cityId}/posts/${postId}`, newPost)
            .then((response) => {
                this.setState({
                    post: response.data
                })
            })

    }
    render() {
        const city = this.state.city
        const post = this.state.posts
        return (
            <div>

                < div >
                    <h4>Travel Buddy</h4>
                    {city.name}
                </div>
                <div>
                    {post.title}
                    {post.description}
                    <button onClick={() => { if (window.confirm(`Are you sure you want to delete ${post.title}?`)) this.deletePost(post.id) }}>Delete Post</button>
                </div>

                {
                    this.state.showEdit ?
                        <div>
                            <h2>Edit Post</h2>
                            <form onSubmit={this.handleSubmitNewPost}>
                                <div>
                                    <label>Post Title:</label>
                                    <input
                                        type="string"
                                        name="title"
                                        defaultValue={post.title}
                                        onChange={this.handleChangeInInputFields}
                                    />

                                </div>

                                <div>
                                    <label>Post Description:</label>
                                    <textarea name="description"
                                        placeholder={post.description}
                                        onChange={this.handleChangeInInputFields}>
                                    </textarea>
                                </div>
                                <button type="submit">Update Changes</button>
                            </form>
                        </div>
                        : null
                }
                <div>
                    <button onClick={this.handleToggle}>
                        {this.state.showEdit
                            ? 'Finished'
                            : 'Edit Post'
                        }
                    </button>
                </div>
            </div >
        );
    }
}

export default PostHomePage;