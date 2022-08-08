import { createAction } from '../../utils/reducers/reducer.utils';
import { USER_ACTIONS } from './user.actions.types';

export const setCurrentUser = (user) =>
  createAction(USER_ACTIONS.SET_CURRENT_USER, user);

export const checkUserSession = () =>
  createAction(USER_ACTIONS.CHECK_USER_SESSION);
export const googleSignIn = () => createAction(USER_ACTIONS.GOOGLE_SIGN_IN);
export const emailSignIn = (email, password) =>
  createAction(USER_ACTIONS.EMAIL_SIGN_IN, { email, password });
export const signInSuccess = (userAuth) =>
  createAction(USER_ACTIONS.SIGN_IN_SUCCESS, userAuth);
export const signInFailure = (error) =>
  createAction(USER_ACTIONS.SIGN_IN_FAILURE, error);
