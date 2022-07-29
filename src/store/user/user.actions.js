import { createAction } from '../../utils/reducers/reducer.utils';
import { USER_ACTIONS } from './user.actions.types';

export const setCurrentUser = (user) =>
  createAction(USER_ACTIONS.SET_CURRENT_USER, user);
