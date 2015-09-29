import React from 'react';
import { Route, Link } from 'react-router';
import { ReduxRouter } from 'redux-router';

import App from '../components/App.jsx';

const routes = (
    <ReduxRouter>
        <Route path="/" component={App}></Route>
    </ReduxRouter>
);

export default routes;