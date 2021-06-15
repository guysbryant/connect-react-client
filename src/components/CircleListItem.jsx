import React from 'react'
import {Link} from 'react-router-dom'

const CircleListItem = ({circle}) =>{
    return(
        <li className="" key={circle.id}>
          <Link to={`/circles/${circle.id}`}>{circle.name}</Link>
        </li>
    )
}

export default CircleListItem
