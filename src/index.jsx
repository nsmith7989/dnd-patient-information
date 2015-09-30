import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { DevTools, DebugPanel } from 'redux-devtools/lib/react';
import DiffMonitor from 'redux-devtools-diff-monitor';
// import a11y from 'react-a11y';

import routes from './routes';
import action from './constants/constants.js';
import store from './store/createStore.js';

let tools = null;

if(__DEV__){
    // a11y(React);
    tools = <DevTools store={store} monitor={DiffMonitor} />;
}

render(
    <div>
        <Provider store={store}>
            { routes }
        </Provider>
        { tools }
    </div>
    ,
    document.getElementById('root')
);