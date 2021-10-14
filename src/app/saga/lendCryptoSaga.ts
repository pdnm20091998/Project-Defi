import { put, call } from 'redux-saga/effects';
import {
  GET_RESULT_LEND_CRYPTO_SUCCESS,
  GET_RESULT_LEND_CRYPTO_FAIL,
} from 'app/actions/types';

// get api result
export function* resultLendCrypto(payload) {
  try {
    yield put({ type: GET_RESULT_LEND_CRYPTO_SUCCESS, payload: payload });
  } catch (error) {
    yield put({ type: GET_RESULT_LEND_CRYPTO_FAIL, error });
  }
}
