import React from 'react'
import {Link} from 'react-router-dom'

const CircleListItem = ({circle}) =>{
    return(
        <li className="inline-flex flex m-2 text-white font-bold items-center rounded-full h-24 w-24 justify-center bg-blue-900" key={circle.id}>
          <Link to={`/circles/${circle.id}`}>{circle.name}</Link>
        </li>
    )
}

export default CircleListItem
