import { takeLatest } from 'redux-saga/effects';
import { registerSaga, LoginSaga } from './authenticationSaga';

import { REGISTER_USER, LOGIN_USER } from 'app/actions/types';

export default function* watchUserAuthentication() {
  yield takeLatest(REGISTER_USER, registerSaga);
  yield takeLatest(LOGIN_USER, LoginSaga);
}
