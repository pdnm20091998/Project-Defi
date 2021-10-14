import { put, call } from 'redux-saga/effects';
import { ResultLendNftService } from '../service/apiLendNft/lendNft.service';
import {
  GET_RESULT_LEND_NFT_SUCCESS,
  GET_RESULT_LEND_NFT_FAIL,
} from 'app/actions/types';

// get api result
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
