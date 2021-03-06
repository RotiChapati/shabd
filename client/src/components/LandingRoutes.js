import React from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Collage from './Collage'
import Landing from './Landing'
import Question from './Question'


const LandingRoutes = () => {

    return (
        <Router>
            <Switch>
                <Route exact path = "/" component={Landing}></Route>
                <Route exact path = "/question" component={Question}></Route>
                <Route exact path = "/adulipuff-is-perfect" component={Collage}></Route>
            </Switch>
        </Router>
    )
}

export default LandingRoutes
