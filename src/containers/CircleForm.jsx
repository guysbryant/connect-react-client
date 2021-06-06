import React from 'react'

export default class CircleForm extends React.Component{
    state={
        name: ''
    }

    submitHandler = (event) =>{
        event.preventDefault()
        fetch('http://localhost:3001/circles',{
            method: 'Post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({circle: this.state})
        })
            .then(response => response.json())
            .then(circle => {
                this.props.history.push('/')
            })
    }

    changeHandler = (event) =>{
        const { name, value } = event.target
        this.setState({[name]: value})
    }

    render(){
        return(
            <form onSubmit={this.submitHandler} className="max-w-6xl w-3/4 mx-auto mt-16 shadow-lg-4 py-6">
              <h1 className="text-center text-2xl font-semibold mb-2">New Circle</h1>
              <fieldset>
                <input type="text"
                       name="name"
                       onChange={this.changeHandler}
                       value={this.state.name}
                       placeholder="Circle Name"
                       className="w-full border p-4 my-2"
                />
              </fieldset>
              <button className="w-full p-4 bg-blue-300 mt-4 hover:bg-blue-400 transition:all duration-200" type="submit">Add Circle</button>
            </form>
        )
    }
}
