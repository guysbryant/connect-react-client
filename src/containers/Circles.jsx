import React from 'react'
import CirclesList from '../components/CirclesList'

export default class Circles extends React.Component {

    state = {
        circles: [],
        loading: true
    }

    componentDidMount(){
        fetch('http://localhost:3001/circles', {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(circles => {
                console.log(circles)
            this.setState({
                circles: circles,
                loading: false
            })
        })
    }

    render(){
        return (
            <section className="max-w-6xl w-11/12 mx-auto mt-16">
            {this.state.loading ? 'loading spinner' : <CirclesList circles={this.state.circles} />}
            </section>
        )
    }
}
