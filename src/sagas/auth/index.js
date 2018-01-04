import { all, fork } from 'redux-saga/effects';
import signIn from './signIn';

export default function* auth() {
  yield all([
    fork(signIn),
  ]);
}
