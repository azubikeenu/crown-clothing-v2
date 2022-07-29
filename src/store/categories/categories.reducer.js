import { CATEGORIES_ACTION } from './cartegories.action.types';

const INITIAL_STATE = {
  categories: [],
};

export const categoriesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_ACTION.SET_CATEGORIES:
      return { ...state, categories: payload };
    default:
      return state;
  }
};
