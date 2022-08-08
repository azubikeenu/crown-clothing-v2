import { call, takeLatest, all, put } from 'redux-saga/effects';
import { USER_ACTIONS } from './user.actions.types';
import { getCurrentUser, createUserDoc } from '../../utils/firebase.utils';
import { signInFailure, signInSuccess } from './user.actions';

function* getUserSnapShot(userAuth, userProperties) {
  try {
    const userSnapShot = yield call(createUserDoc, userAuth, userProperties);
    if (userSnapShot)
      yield put(signInSuccess({ id: userSnapShot.id, ...userSnapShot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}
function* isUserAuthenticated() {
  const userAuth = yield call(getCurrentUser);
  console.log(userAuth);
  if (!userAuth) return;
  yield call(getUserSnapShot, userAuth);
}

function* onCheckCurrentUser() {
  yield takeLatest(USER_ACTIONS.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSaga() {
  yield all([call(onCheckCurrentUser)]);
}
