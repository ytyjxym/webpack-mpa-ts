import React from 'react'
import { Switch, BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
import Home from '../pages/home'

export default class RootRoute extends React.Component{
    render(){
        return (
            <Router>
                <Switch>
                    <Route path='/' component={Home}></Route>
                </Switch>
            </Router>

        )
    }
}