import {fork, all} from 'redux-saga/effects';
// Saga Imports
import authSagas from './authSagas';
export default function* rootSaga() {
  yield all([
    // Sagas
    fork(authSagas),
  ]);
}
