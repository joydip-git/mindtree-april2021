import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { routePaths } from './routePaths'

const RouteGenerator = () => {
    return (
        <Switch>
            {
                routePaths.map(r => {
                    return <Route key={r.routeId} path={r.routePath} component={r.routeComponent} exact />
                })
            }
        </Switch>
    )
}

export default RouteGenerator
