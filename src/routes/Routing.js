import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomeView } from '../view/HomeView'
import { AboutView } from '../view/AboutView'
import { SigninView } from '../view/SignInView'

export const Routing = (props) => {
    return (
        <Router>
            {props.children}
            <Switch>
                <Route exact path="/project" component={HomeView} />
                <Route exact path="/signin" component={SigninView} />
                <Route component={AboutView} />
            </Switch>
            
        </Router>
    )
}
