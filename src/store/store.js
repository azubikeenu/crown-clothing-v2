import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';

const middlewares = [logger];

// const customLogger = (store) => (next) => (action) => {
//   if (!action.type) {
//     return next(action);
//   }
//   console.log('initial state', store.getState());
//   console.log('payload', action.payload);
//   console.log('type', action.type);
//   next(action);
//   console.log('next state', store.getState());
//   console.log('payload', action.payload);
//   console.log('type', action.type);
// };



// in other for the middlewares to work you must compose the middlewares
const composedEnhancers = compose(applyMiddleware(...middlewares));

// the second argument is if you want to add any additional default states

export const store = createStore(rootReducer, undefined, composedEnhancers);
