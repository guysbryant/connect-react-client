import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom"
import Circles from './containers/Circles'
import CircleForm from './containers/CircleForm'

function App() {
  return (
    <div className="App">
        <Router>
            <nav className="text-center bg-blue-900 text-yellow-100 p-4" >
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
                    New Circles
              </NavLink>
            </nav>
          <Switch>
            <Route exact path="/">
              <Circles />
            </Route>
            <Route path="/circles/new">
              <CircleForm />
            </Route>
          </Switch>
        </Router>
    </div>
);
}

export default App;
