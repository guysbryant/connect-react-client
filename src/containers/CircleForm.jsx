import React from 'react'
import { connect } from 'react-redux'
import {createCircle} from '../actions/circles'

class CircleForm extends React.Component{
    state={
        name: '',
        errors: {}
    }

    submitHandler = (event) =>{
        event.preventDefault()
        this.props.createCircle(this.state)
            .then(circle => {
                this.props.history.push('/')
            })
            .catch(errors => {
                this.setState({
                    errors
                })
            })
    }

    changeHandler = (event) =>{
        const { name, value } = event.target
        this.setState({[name]: value})
    }

    render(){
        return(
            <form onSubmit={this.submitHandler} className="max-w-6xl w-3/4 mx-auto mt-16 shadow-lg-4 py-6">
              <h1 className="text-center text-3xl font-semibold mb-2">New Circle</h1>
              <fieldset>
                <p className="h-8 pl-4 text-red-400">{this.state.errors.name}</p>
                <input type="text"
                       name="name"
                       onChange={this.changeHandler}
                       value={this.state.name}
                       placeholder="Circle Name"
                       className={'w-full border-2 focus:outline-none focus:ring-2 p-4 mb-4 ${this.state.errors.name && "focus:ring-red-400 border-red-400"}'}
                />
              </fieldset>
              <button className="w-full p-4 bg-blue-300 mt-4 hover:bg-blue-400 transition:all duration-200" type="submit">Add Circle</button>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        createCircle: (formData) => dispatch(createCircle(formData))
    }
}

export default connect(null, mapDispatchToProps)(CircleForm)
