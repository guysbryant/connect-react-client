import React from 'react'
import CircleListItem from './CircleListItem'

const CirclesList = ({circles}) =>{
    return(
        <>
          <h1>Circles List</h1>
            <ul>
              {circles.map(circle =>
                  <CircleListItem key={circle.id}
                                  circle={circle} />)}
            </ul>
        </>
    )
}

export default CirclesList
