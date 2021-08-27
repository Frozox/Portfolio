import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './Pages/App';
// import Portfolio from './Pages/Portfolio';
import NotFound from './Pages/NotFound';

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={App}></Route>
            {/* <Route exact path='/portfolio' component={Portfolio}></Route> */}
            <Route component={NotFound}></Route>
        </Switch>
    );
}

export default Routes;