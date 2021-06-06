import React from 'react'

export default class NewPost extends React.Component{
    state={
        text: '',
        circle_id: this.props.match.params.circleId
    }

    submitHandler = (event) =>{
        event.preventDefault()
        fetch('http://localhost:3001/posts',{
            method: 'Post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({post: this.state})
        })
            .then(response => response.json())
            .then(post => {
                console.log(post)
            })
    }

    changeHandler = (event) =>{
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    render(){
        return(
            <form onSubmit={this.submitHandler}
                  className="max-w-6xl w-3/4 mx-auto mt-16 shadow-lg-4 py-6">
              <h1 className="text-center text-2xl font-semibold mb-2">New Post</h1>
              <fieldset className="">
                <textarea name="text"
                          onChange={this.changeHandler}
                          value={this.state.text}
                          placeHolder="Text"
                          className="w-full border p-4 my-2"/>
              </fieldset>
              <button type="submit"
                      className="w-full p-4 bg-blue-300 mt-4 hover:bg-blue-400 transition:all duration-200">Add Post</button>
            </form>
        )
    }

}
