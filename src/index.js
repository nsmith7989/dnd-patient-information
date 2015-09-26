import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App.jsx'
import action from './constants/constants.js';
import store from './store/createStore.js';


render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);