import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import { updateCircle } from '../actions/circles'
import { fetchCircle } from '../actions/circles'
import { deleteCircle } from '../actions/circles'
import DeleteModal from './DeleteModal'

class ManageCircle extends React.Component {
    state={show: false}
    changeHandler = (event) =>{
        const {name, value} = event.target
        this.setState({[name]: value})
    }
    submitHandler = (event) =>{
        event.preventDefault()
        this.props.updateCircle(this.props.url, this.state)
            .then(circle =>{
                this.props.history.push(this.props.url)
            })
            .catch(error => console.log('error: ', error))
    }
    showModal = () =>{
        this.setState({show: !this.state.show})
    }
    deleteCircle = () =>{
        this.props.dispatchDeleteCircle(this.props.url, this.props.circle.id)
            .then(this.props.history.push('/'))
    }
    componentDidMount = () =>{
        const circleId = this.props.match.params.circleId
        this.props.fetchCircle(circleId)
    }

    render(){
        if (this.props.circle){
            return(
                <>
                  <section className="max-w-6xl w-11/12 mx-auto mt-16">
                    <form onSubmit={this.submitHandler}>
                      <label name="name"
                             className="text-3xl font-bold text-center mb-8"
                      >
                        Change Circle Name
                        <input type="text" name="name"
                               name="name"
                               className="border-2 m-2 text-3xl font-bold text-center mb-8"
                               onChange={this.changeHandler}
                               defaultValue={this.props.circle.name}
                               value={this.state.name}
                        />
                        <input type="submit"/>
                      </label>
                    </form></section>
                  <button onClick={this.showModal}>Delete Circle</button>
                  <DeleteModal
                    deleteCircle={this.deleteCircle}
                    show={this.state.show}/>
                </>
            )
        }else{
            return <div>Loading Spinner</div>
        }
    }
}
const mapStateToProps = (state, {match}) => {
    const circleId = match.params.circleId
    const status = state.circles.status
    return {
        circle: state.circles.list.find(circle => circle.id == circleId),
        url:  `http://localhost:3001/circles/${circleId}`,
        posts: state.posts.list.filter(post => post.circle_id == circleId),
        status
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCircle: (circleId) => dispatch(fetchCircle(circleId)),
        updateCircle: (url, formData) => dispatch(updateCircle(url, formData)),
        dispatchDeleteCircle: (url, circleId) => dispatch(deleteCircle(url, circleId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCircle)
