import { combineReducers } from 'redux';
import { userReducer } from './user/user.reducer';
import { categoriesReducer } from './categories/categories.reducer';

// this is the combination of all our reducers
export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
});
