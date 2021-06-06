import React from 'react'

export default class CircleShow extends React.Component{
    state={
        circle: {},
        posts: [],
        loading: true
    }

    componentDidMount = () =>{
        const circleId = this.props.match.params.circleId
        fetch(`http://localhost:3001/circles/${circleId}`)
                .then(response => response.json())
            .then(({ circle, posts }) =>{
                    this.setState({circle, posts, loading: false})
                    console.log(this.state)
        })
    }

    render(){
        if (this.state.loading){
            return <div>Loading Spinner</div>
        }
        return(
            <section>Circle Show</section>
        )
    }
}
