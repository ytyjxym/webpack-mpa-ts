import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../pages/home'
import User from '../pages/user'
import Layout from '../layout/layout'
export default class RootRoute extends React.Component{
    render(){
        return (
            <Router>
                <Layout>
                    <Switch>
                        <Route path='/' exact component={Home}></Route>
                        <Route path='/user' exact component={User}></Route>
                    </Switch>
                </Layout>
            </Router>
        )
    }
}