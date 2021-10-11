import { put, call } from 'redux-saga/effects';
import { registerUserService, loginUserService } from '../service/auth.service';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from 'app/actions/types';

export function* registerSaga(payload) {
  try {
    const response = yield call(registerUserService, payload);
    yield put({ type: REGISTER_SUCCESS, response });
  } catch (error) {
    yield put({ type: REGISTER_FAIL, error });
  }
}
export function* LoginSaga(payload) {
  try {
    const response = yield call(loginUserService, payload);
    yield [put({ type: LOGIN_SUCCESS, user: response })];
  } catch (error) {
    yield put({ type: LOGIN_FAIL, error });
  }
}
