import React from 'react'
import { connect } from 'react-redux'
import { fetchCircles } from '../actions/circles'
import CirclesList from '../components/CirclesList'

class Circles extends React.Component {

    // state = {
    //     circles: [],
    //     loading: true
    // }

    componentDidMount(){
        this.props.fetchCircles()
    }

    render(){
        if(this.props.loading === "Not Loading"){
            return null
        }
        return (
            <section className="max-w-6xl w-11/12 mx-auto mt-16">
            {this.props.loading === "Begin" ? 'loading spinner' : <CirclesList circles={this.props.circles} />}
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        circles: state.circles.list,
        loading: state.circles.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCircles : () => dispatch(fetchCircles())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Circles)
