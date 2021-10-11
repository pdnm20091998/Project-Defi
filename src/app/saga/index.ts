import { all, fork } from 'redux-saga/effects';
import watchUserAuthentication from './watchers';

export default function* startForman() {
  yield all([fork(watchUserAuthentication)]);
}
