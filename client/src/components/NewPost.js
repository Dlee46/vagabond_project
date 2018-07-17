import React, { Component } from 'react';

class NewPost extends Component {

    handleChangeInInputFields = (event) =>{
        event.preventDefault
    }
    handleSubmitNewPost = (event)=>{
        event.preventDefault
    }
    render() {
        return (
            <div>
                {/* <form onSubmit={this.handleSubmitNewPost}> 
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
                            <input 
                            className="passInput"
                            name="password"
                            onChange={this.handleChangeInInputFields}/>
                        </div>
                        <UserButtons type="submit">Save Changes</UserButtons>
                        </form> */}
            </div>
        );
    }
}

export default NewPost;