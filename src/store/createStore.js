import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-router';
import thunk from 'redux-thunk';
import createHistory from 'history/lib/createBrowserHistory';

import { devTools, persistState } from 'redux-devtools';

import logger from '../middlware/logger.js';
import reducer from '../reducers/root.js';
import initialState from './initialState.js';
import routes from '../routes/routes.js';

let middleWare = [thunk];
let finalStore;



if(__DEV__) {
    // add additional dev middlware
    middleWare = [...middleWare, logger];
    finalStore = compose(
        applyMiddleware(...middleWare),
        reduxReactRouter({
          routes,
          createHistory
        }),
        devTools(),
        persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
    )(createStore)(reducer);
} else {
    finalStore = compose(
        applyMiddleware(...middleWare),
        reduxReactRouter({
          routes,
          createHistory
        })
    )(createStore)(reducer);
}


export default finalStore;