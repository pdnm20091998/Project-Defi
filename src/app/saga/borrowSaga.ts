import { put, call } from 'redux-saga/effects';
import {
  GET_RESULT_BORROW_SUCCESS,
  GET_RESULT_BORROW_FAIL,
  GET_RESULT_PERSONAL_BORROW_SUCCESS,
  GET_RESULT_PERSONAL_BORROW_FAIL,
} from 'app/actions/types';
import {
  ResultBorrowCryptoService,
  ResultPersonalCryptoService,
} from 'app/service/apiBorrowCrypto/borrowCrypto.service';
// get api result
export function* resultBorrow(payload) {
  try {
    const response = yield call(ResultBorrowCryptoService, payload);
    yield put({ type: GET_RESULT_BORROW_SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: GET_RESULT_BORROW_FAIL, error });
  }
}

export function* resultPersonBorrow(payload) {
  try {
    const response = yield call(ResultPersonalCryptoService, payload);
    yield put({ type: GET_RESULT_PERSONAL_BORROW_SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: GET_RESULT_PERSONAL_BORROW_FAIL, error });
  }
}
