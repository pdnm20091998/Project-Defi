import { put, call } from 'redux-saga/effects';
import { ResultLendNftService } from '../service/apiLendNft/lendNft.service';
import {
  GET_FILTER_LEND_NFT_SUCCESS,
  GET_FILTER_LEND_NFT_FAIL,
  GET_RESULT_LEND_NFT_SUCCESS,
  GET_RESULT_LEND_NFT_FAIL,
} from 'app/actions/types';

export function* filterLendNFT(payload) {
  try {
    yield put({ type: GET_FILTER_LEND_NFT_SUCCESS, payload: payload });
  } catch (error) {
    yield put({ type: GET_FILTER_LEND_NFT_FAIL, error });
  }
}

export function* resultLendNFT(payload) {
  try {
    const response = yield call(ResultLendNftService, payload);
    if (response.error === 'success') {
      yield put({ type: GET_RESULT_LEND_NFT_SUCCESS, payload: response });
    }
  } catch (error) {
    yield put({ type: GET_RESULT_LEND_NFT_FAIL, error });
  }
}
