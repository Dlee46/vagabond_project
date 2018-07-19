import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'

const NewPostPage = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 5%;
    align-items: center;
    text-align: center;
    input{
        border: inset;
    }
    textarea{
        border: inset;
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
    left: 0px;
    width:100%;
    background-color: rgb(249 247 247);
    box-shadow: .2px .2px .2px .2px;
`
const BottomNavBar = styled.div`
    z-index: 10000;
    position: fixed;
    background-color: rgb(249 247 247);
    bottom: 0px;
    width:100%;
    div{
        text-align: center;
    }
    margin-left: -40px;
`

class NewPost extends Component {

    state = {
        post: {
            title: "",
            description: ""
        }
    }

    handleChangeInInputFields = (event) => {
        event.preventDefault()
        const inputField = event.target.name
        const newValue = event.target.value
        const alteredPost = { ...this.state.post }
        alteredPost[inputField] = newValue
        this.setState({ post: alteredPost })
    }

    handleSubmitNewPost = (event) => {
        event.preventDefault()
        let newPost = this.state.post
        axios.post(`/datab/cities/${this.props.match.params.id}/posts`, newPost)
            .then((response) => {
                return (
                    this.props.history.push(`/cities/${this.props.match.params.id}/posts/${response.data.id}`)
                )
            })

    }
    goBack = () => {
        this.props.history.goBack()
    }
    render() {
        return (

            <NewPostPage>
                <TopTitleBox>
                    <div>
                        <h2 className='pageTitle'>New Post</h2>
                    </div>
                    <div>
                        <h4 className='logo'>Travel Buddy</h4>
                    </div>
                </TopTitleBox>
                <div className='newPostPage'>

                    <form onSubmit={this.handleSubmitNewPost}>
                        <div className='newPostForm' >
                            <label className='descriptiveTitle' >Post Title</label>
                            <br />
                            <input className='titleField'
                                type="string"
                                name="title"
                                onChange={this.handleChangeInInputFields}
                            />

                        </div>
                        <br />

                        <div className='descriptionContainer'>
                            <label className='descriptiveTitle' >Post Description</label>
                            <br />
                            <textarea className='descriptionBox' name="description" onChange={this.handleChangeInInputFields}>
                            </textarea>
                        </div>
                        <button className='newPostButton' type="submit">Save Changes</button>
                    </form>
                    <BottomNavBar>
                        <button className="backButton" onClick={() => this.goBack()}>Back</button>
                    </BottomNavBar>
                </div>
            </NewPostPage>
        );
    }
}

export default NewPost;