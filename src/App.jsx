import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom"
import Circles from './containers/Circles'
import CircleForm from './containers/CircleForm'
import CircleShow from './containers/CircleShow'
import NewPost from './containers/NewPost'
import NavBar from './components/NavBar'

function App() {
    return (
        <div className="App">
          <Router>
            <NavBar />
            <Switch>
              <Route exact path="/">
                <Circles />
              </Route>
              <Route path="/circles/new" component={CircleForm}/>
              <Route path="/circles/:circleId/posts/new" component={NewPost}/>
              <Route path="/circles/:circleId" component={CircleShow}/>
            </Switch>
          </Router>
        </div>
    );
}

export default App;
