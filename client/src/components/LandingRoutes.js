import React from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Landing from './Landing'


const LandingRoutes = () => {

    return (
        <Router>
            <Switch>
                <Route exact path = "/" component={Landing}></Route>
            </Switch>
        </Router>
    )
}

export default LandingRoutes
