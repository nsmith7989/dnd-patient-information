import React from 'react';
import { Route } from 'react-router';
import { ReduxRouter } from 'redux-router';

import App from '../components/App.jsx';

const routes = (
    <ReduxRouter>
        <Route path='/' component={App} />
    </ReduxRouter>
);

export default routes;