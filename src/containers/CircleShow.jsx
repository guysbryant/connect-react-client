import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCircle } from '../actions/circles'

class CircleShow extends React.Component{
    // state={
    //     circle: {},
    //     posts: [],
    //     status: "Loading"
    // }

    componentDidMount = () =>{
        const circleId = this.props.match.params.circleId
        this.props.fetchCircle(circleId)
    }

    render(){
        if (this.state.loading){
            return <div>Loading Spinner</div>
        }
        return(
            <section className="max-w-6xl w-11/12 mx-auto mt-16">
              <h1 className="text-3xl font-bold text-center mb-8">{this.state.circle.name}</h1>
              <p className="my-2"><Link className="border-4" to={`/circles/${this.state.circle.id}/posts/new`}>Create New Post</Link></p>
              <div className="">
                {this.state.posts.map(post =>
                    <p>{post.text}</p>
                )}
              </div>
            </section>
        )
    }
}

const mapStateToProps = (state, {match}) => {
    const circleId = match.params.circleId
    const status = state.circles.status
    return {
        circle: state.circles.list.find(circle => circle.id == circleId),
        posts: state.posts.list.filter(post => post.circle_id == circleId),
        status
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCircle: (circleId) => dispatch(fetchCircle(circleId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CircleShow)
