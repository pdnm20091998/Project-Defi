import { put, call } from 'redux-saga/effects';
import {
  GET_RESULT_BORROW_SUCCESS,
  GET_RESULT_BORROW_FAIL,
} from 'app/actions/types';

// get api result
export function* resultBorrow(payload) {
  try {
    yield put({ type: GET_RESULT_BORROW_SUCCESS, payload: payload });
  } catch (error) {
    yield put({ type: GET_RESULT_BORROW_FAIL, error });
  }
}
