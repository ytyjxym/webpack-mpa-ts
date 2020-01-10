import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../pages/home'
import Layout from '../layout/layout';
export default class RootRoute extends React.Component{
    render(){
        return (
            <Router>
                <Switch>
                    <Layout>
                    <Route path='/' component={Home}></Route>
                    </Layout>
                </Switch>
            </Router>

        )
    }
}