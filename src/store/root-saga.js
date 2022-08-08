import { all, call } from 'redux-saga/effects';
import { categorySaga } from './categories/category.saga';

export function* rootSaga() {
  yield all([call(categorySaga)]);
}
