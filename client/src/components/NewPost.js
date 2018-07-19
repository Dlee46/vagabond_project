import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'

const NewPostPage = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 5%;
    align-items: center;
    text-align: center;
    .newPostButton{
        
    }
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
            </div>
            </NewPostPage>
        );
    }
}

export default NewPost;