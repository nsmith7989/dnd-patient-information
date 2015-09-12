import { createStore, applyMiddleware, compose } from 'redux';
import { devTools, persistState } from 'redux-devtools';
import thunk from 'redux-thunk';

import logger from '../middlware/logger.js';
import rootReducer from '../reducers/root.js';
import initialState from './initialState.js';

let middleWare = [thunk];
let finalStore;
if(__DEV__) {
    // add additional dev middlware
    middleWare = [...middleWare, logger];
    finalStore = compose(
        applyMiddleware(...middleWare),
        devTools(),
        persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
    )(createStore);
} else {
    finalStore = applyMiddleware(...middleWare)(createStore);
}


export default finalStore(rootReducer, initialState);