import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './container/Home'
import Pedido from './container/Pedido'


function Routes(){
    return (
        <Router>
            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route exact path={'/pedidos'} component={Pedido}/>
            </Switch>
        </Router>
    )
}

export default Routes