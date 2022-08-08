import { USER_ACTIONS } from './user.actions.types';

const INITIAL_STATE = { currentUser: null, isLoading: false, error: null };

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTIONS.SIGN_IN_SUCCESS:
      return { ...state, currentUser: payload };
    case USER_ACTIONS.SIGN_IN_FAILURE:
      return { ...state, error: payload };
    default:
      return state;
  }
};
