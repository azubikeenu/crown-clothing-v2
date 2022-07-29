import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';

const middlewares = [logger];

// in other for the middlewares to work you must compose the middlewares
const composedEnhancers = compose(applyMiddleware(...middlewares));

// the second argument is if you want to add any additional default states

export const store = createStore(rootReducer, undefined, composedEnhancers);
