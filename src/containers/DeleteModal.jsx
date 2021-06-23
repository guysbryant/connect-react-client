import React from 'react'

export default class DeleteModal extends React.Component{
    render(){
        if (!this.props.show){
            return null
        }else{
            return(
                <>
                  <p>Are you sure you want to delete this circle?</p>
                  <button onClick={this.props.deleteCircle}>Delete</button>
                </>
            )
        }
    }
}
