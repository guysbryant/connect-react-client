import React from 'react'
import CirclesList from '../components/CirclesList'

export default class Circles extends React.Component {

    state = {
        circles: [],
        loading: true
    }

    componentDidMount(){
        this.setState({
            circles: [
                {name: 'test1'},
                {name: 'test2'}
            ],
            loading: false
        })
    }

    render(){
        return (
            <section className="max-w-6xl mx-auto mt-16">
            {this.state.loading ? 'loading spinner' : <CirclesList circles={this.state.circles} />}
            </section>
        )
    }
}
