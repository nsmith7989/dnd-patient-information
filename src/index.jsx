import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import routes from './routes/routes.jsx'
import action from './constants/constants.js';
import store from './store/createStore.js';


render(
    <Provider store={store}>
        { routes }
    </Provider>,
    document.getElementById('root')
);