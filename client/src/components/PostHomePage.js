import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


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
`
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
    goBack = () => {
        this.props.history.goBack()
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
                    posts: response.data
                })
            })

    }
    render() {
        const city = this.state.city
        const post = this.state.posts
        const cityId = this.props.match.params.cityid
        const cityAddress = `/cities/${cityId}`
        return (


            <div className='postPageContainer'>

                <div className='logoHeader'>
                    <TopTitleBox>
                        <div>
                            <Link to='/' className='logo'>Travel Buddy</Link>
                        </div>
                        <div>
                            <Link to={city} className='cityName'>{this.state.city.name}</Link>
                        </div>
                    </TopTitleBox>
                </div>
                {!this.state.showEdit ?
                    <div className='confirmationPost'>
                        <h4 className='smallTitle'>Your title is:</h4>
                        {post.title}
                        <br />
                        <h4 className='smallTitle'>Your description is:</h4>
                        {post.description}
                    </div>
                    : null
                }
                {
                    this.state.showEdit ?
                        <div>
                            <form className='editContainer' onSubmit={this.handleSubmitNewPost}>
                            <h2>Edit Post</h2>
                                <div>
                                    <label className='smallTitle'>Post Title:</label>
                                    <br/>
                                    <input className='editName'
                                        type="string"
                                        name="title"
                                        defaultValue={post.title}
                                        onChange={this.handleChangeInInputFields}
                                    />

                                </div>

                                <div>
                                    <label className='smallTitle'>Post Description:</label>
                                    <br/>
                                    <textarea className='editName' name="description"
                                        placeholder={post.description}
                                        onChange={this.handleChangeInInputFields}>
                                    </textarea>
                                </div>
                                <button className="newPostButton" type="submit">Update Changes</button>
                            </form>
                        </div>
                        : null
                }
                <div className='containsButtons'>

                    <button className='newPostButton' onClick={this.handleToggle}>
                        {this.state.showEdit
                            ? 'Finished'
                            : 'Edit Post'
                        }
                    </button>

                </div>
                <BottomNavBar>
                    <div>
                        <button className='newPostButton' onClick={() => { if (window.confirm(`Are you sure you want to delete ${post.title}?`)) this.deletePost(post.id) }}>Delete Post</button>
                    </div>

                    <div>
                        <button className='backButton' onClick={() => this.goBack()}>Back</button>
                    </div>


                </BottomNavBar>
            </div >
        );
    }
}

export default PostHomePage;