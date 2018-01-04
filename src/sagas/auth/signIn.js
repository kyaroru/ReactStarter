import { takeLatest, all, fork, call, put } from 'redux-saga/effects';
import Actions from 'actions';
import { delay } from 'redux-saga';
// import * as api from 'api';

function* signIn({ credentials }) {
  console.log(credentials);
  yield call(delay, 1000);
  yield put(Actions.signInSuccess('fake-token'));
}

function* watchSignIn() {
  yield takeLatest(Actions.SIGN_IN, signIn);
}

export default function* auth() {
  yield all([
    fork(watchSignIn),
  ]);
}
