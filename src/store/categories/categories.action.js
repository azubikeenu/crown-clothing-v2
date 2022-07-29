import { CATEGORIES_ACTION } from './cartegories.action.types';
import { createAction } from '../../utils/reducers/reducer.utils';
export const setCategoriesMap = (payload) =>
  createAction(CATEGORIES_ACTION.SET_CATEGORIES, payload);
