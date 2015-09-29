import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';

const mainState = (state = {}, action = {}) => {
    return state;
}

export default combineReducers({
    mainState,
    router: routerStateReducer
});