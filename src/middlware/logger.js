const logger = store => next => action => {
    console.group(action.type);
    console.info('action dispatched', action);
    console.info('change state', next);
    let result = next(action);
    console.info('new state', store.getState());
    console.groupEnd(action.type);
    return result;
};

export default logger;