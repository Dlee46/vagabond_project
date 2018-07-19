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
        border: 1px solid black;
    }
    textarea{
        border: 1px solid black;
    }
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

    handleChangeInInputFields = (event) =>{
        event.preventDefault()
        const inputField = event.target.name
        const newValue = event.target.value
        const alteredPost = {...this.state.post}
        alteredPost[inputField] = newValue
        this.setState({post: alteredPost})
    }

    handleSubmitNewPost = (event)=>{
        event.preventDefault()
        let newPost = this.state.post
        axios.post(`/datab/cities/${this.props.match.params.id}/posts`, newPost)
        .then((response)=>{
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
            <div className='newPostPage'>
                <h4 className='logo'>Travel Buddy</h4>
                <h2 className='pageTitle'>New Post</h2>

                <form onSubmit={this.handleSubmitNewPost}> 
                        <div>
                        <label className='descriptiveTitle' >Post Title</label>
                        <br/>
                        <input className='titleField'
                        type="string"
                        name="title"
                        onChange={this.handleChangeInInputFields}
                        />

                        </div>
                        <br/>

                        <div className='descriptionContainer'>
                            <label className='descriptiveTitle' >Post Description</label>
                            <br/>
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