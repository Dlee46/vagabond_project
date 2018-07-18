import React, { Component } from 'react';
import axios from 'axios'
class NewPost extends Component {

    state = {
        post: {
            title: "",
            description: ""
        }
    }

    handleChangeInInputFields = (event) =>{
        event.preventDefault
        const inputField = event.target.name
        const newValue = event.target.value
        const alteredPost = {...this.state.post}
        alteredPost[inputField] = newValue
        this.setState({post: alteredPost})
    }
    handleSubmitNewPost = (event)=>{
        event.preventDefault
        let newPost = this.state.post
        axios.post(`/datab/cities/${this.props.match.params.id}/posts`, newPost)
        .then((response)=>{
            alert(response.data)
        })

    }
    render() {
        return (
            <div>
                <h2>New Post</h2>
                <form onSubmit={this.handleSubmitNewPost}> 
                        <div>
                        <label>Post Title:</label>
                        <input
                        type="string"
                        name="title"
                        onChange={this.handleChangeInInputFields}
                        />

                        </div>

                        <div>
                            <label>Post Description:</label>
                            <textarea name="description" onChange={this.handleChangeInInputFields}> 
                            </textarea>
                        </div>
                        <button type="submit">Save Changes</button>
                        </form>
            </div>
        );
    }
}

export default NewPost;