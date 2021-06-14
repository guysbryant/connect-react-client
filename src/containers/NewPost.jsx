import React from 'react'
import { connect } from 'react-redux'
import { createPost } from '../actions/posts'

class NewPost extends React.Component{
    state={
        text: '',
        circle_id: this.props.match.params.circleId,
        errors: {}
    }

    submitHandler = (event) =>{
        event.preventDefault()
        this.props.createPost(this.state)
            .then(post =>{
                this.props.history.push(`/circles/${this.state.circle_id}`)
            })
            .catch(errors => {
                this.setState({ errors })
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
                <label htmlFor="text" className="block uppercase">
                  Name{" "}
                  <span className="text-red-400">{this.state.errors.nname}</span>
                </label>
                <textarea name="text"
                          onChange={this.changeHandler}
                          value={this.state.text}
                          placeholder="Text"
                          className={`w-full border-2 p-4 my-4 focus:outline-none focus:ring-2 ${this.state.errors.description && "focus:ring-red-400 boreder-red-400"}`}/>
              </fieldset>
              <button type="submit"
                      className="w-full p-4 bg-blue-300 mt-4 hover:bg-blue-400 transition:all duration-200">Add Post</button>
            </form>
        )
    }

}

const mapDispatchToProps = (dispatch) =>{
    return{
        createPost: (formData) => dispatch(createPost(formData))
    }
}

export default connect(null, mapDispatchToProps)(NewPost)
