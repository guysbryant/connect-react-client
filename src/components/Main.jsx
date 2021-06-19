import React from 'react'
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom"
import Circles from '../containers/Circles'
import CircleForm from '../containers/CircleForm'
import CircleShow from '../containers/CircleShow'
import NewPost from '../containers/NewPost'


const Main = () =>{
  return(
    <main className="flex-1 overflow-y-auto p5">
        <Switch>
            <Route exact path="/">
                <Circles />
            </Route>
            <Route path="/circles/new" component={CircleForm}/>
            <Route path="/circles/:circleId/posts/new" component={NewPost}/>
            <Route path="/circles/:circleId" component={CircleShow}/>
        </Switch>
    </main>
  )
}

export default Main
