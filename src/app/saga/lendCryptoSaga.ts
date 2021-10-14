import { put, call } from 'redux-saga/effects';
import {
  GET_RESULT_LEND_CRYPTO_SUCCESS,
  GET_RESULT_LEND_CRYPTO_FAIL,
} from 'app/actions/types';
import { getResultLenCrypto } from 'app/service/apiLendCrypto/apiLendCypto';
// get api result
export function* resultLendCrypto(payload) {
  try {
    const response = yield call(getResultLenCrypto, payload);
    yield put({ type: GET_RESULT_LEND_CRYPTO_SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: GET_RESULT_LEND_CRYPTO_FAIL, error });
  }
}
