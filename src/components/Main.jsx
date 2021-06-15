import React from 'react'
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom"
import Circles from '../containers/Circles'
import CircleForm from '../containers/CircleForm'
import CircleShow from '../containers/CircleShow'
import NewPost from '../containers/NewPost'


const Main = () =>{
  return(
    <main className="flex-1 overflow-y-auto p5">
        <Router>
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
          <Switch>
            <Route exact path="/">
              <Circles />
            </Route>
            <Route path="/circles/new" component={CircleForm}/>
            <Route path="/circles/:circleId/posts/new" component={NewPost}/>
            <Route path="/circles/:circleId" component={CircleShow}/>
          </Switch>
        </Router>
    </main>
  )
}

export default Main
