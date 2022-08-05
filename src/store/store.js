import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { rootReducer } from './root-reducer';

const middlewares = [
  process.env.NODE_ENV === 'development' && logger,
  thunk,
].filter(Boolean);


const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user', 'categories'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

// in other for the middlewares to work you must compose the middlewares
const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares));

// the second argument is if you want to add any additional default states

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);
