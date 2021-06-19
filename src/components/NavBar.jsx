import React from 'react'
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="text-center bg-blue-900 text-yellow-100" >
            <NavLink
                className="inline-block px-4 py-2"
                exact
                to="/"
                activeClassName="text-yellow-300"
            >
                Circles
            </NavLink>
            <NavLink
                className="inline-block px-4 py-2"
                to="/circles/new"
                activeClassName="text-yellow-300"
            >
                New Circle
            </NavLink>
        </nav>
    )
}

export default NavBar
