import React from 'react'

export default class CircleShow extends React.Component{

    componentDidMount = () =>{
        const circleId = this.props.match.params.circleId
        fetch(`http://localhost:3001/circles/${circleId}`)
                .then(response => response.json())
                .then(circle =>{
                    console.log(circle)
        })
    }

    render(){
        return(
            <section>Circle Show</section>
        )
    }
}
