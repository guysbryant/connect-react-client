import React from 'react'
import {Link} from 'react-router-dom'

const CircleListItem = ({circle}) =>{
    return(
        <Link className="inline-flex flex m-2 text-white font-bold items-center rounded-full h-24 w-24 justify-center bg-blue-900" to={`/circles/${circle.id}`}>{circle.name}
          <li  key={circle.id} />
        </Link>
    )
}

export default CircleListItem
