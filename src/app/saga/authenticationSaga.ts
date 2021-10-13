import { put, call } from 'redux-saga/effects';
import {
  registerUserService,
  loginUserService,
  getUser,
} from '../service/apiAuth/auth.service';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  GET_USER,
} from 'app/actions/types';

export function* registerSaga(payload) {
  try {
    const response = yield call(registerUserService, payload);
    yield put({ type: REGISTER_SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: REGISTER_FAIL, error });
  }
}
export function* LoginSaga(payload) {
  try {
    const response = yield call(loginUserService, payload);
    if (response.access_token) {
      const getUserinfor = yield call(getUser, response.access_token);
      yield put({ type: GET_USER, payload: getUserinfor });
    }
    yield put({ type: LOGIN_SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: LOGIN_FAIL, error });
  }
}
