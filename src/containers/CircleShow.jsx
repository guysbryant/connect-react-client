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
        })
    }

    render(){
        if (this.state.loading){
            return <div>Loading Spinner</div>
        }
        return(
            <section className="max-w-6xl w-11/12 mx-auto mt-16">
              <h1 className="text-3xl font-bold text-center mb-8">{this.state.circle.name}</h1>
              <div className="">
                {this.state.posts.map(post =>
                    <p>{post.text}</p>
                )}
              </div>
            </section>
        )
    }
}
