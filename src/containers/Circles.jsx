import React from 'react'
import { connect } from 'react-redux'
import { fetchCircles } from '../actions/circles'
import CirclesList from '../components/CirclesList'

class Circles extends React.Component {

    componentDidMount(){
        this.props.fetchCircles()
    }

    render(){
        if(this.props.status === "Not Loading"){
            return null
        }
        return (
            <section className="max-w-6xl w-11/12 mx-auto mt-16">
            {this.props.status === "Not Loading" ? 'loading spinner' : <CirclesList circles={this.props.circles} />}
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        circles: state.circles.list,
        status: state.circles.status,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCircles : () => dispatch(fetchCircles())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Circles)
