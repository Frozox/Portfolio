import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import App from './Pages/App';
import PortfolioDetails from './Pages/PortfolioDetails';
import NotFound from './Pages/NotFound';

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={App}></Route>
            <Route exact path='/portfolio/:id(\d+)' component={PortfolioDetails}></Route>
            <Route exact path='/404' component={NotFound}></Route>
            <Redirect to='/404' />
        </Switch>
    );
}

export default Routes;