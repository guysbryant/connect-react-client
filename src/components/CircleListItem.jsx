import React from 'react'

const CircleListItem = ({circle}) =>{
    return(
         <li className="" key={circle.id}>{circle.name}</li>
    )
}

export default CircleListItem
