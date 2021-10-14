import { takeLatest } from 'redux-saga/effects';
import { registerSaga, LoginSaga } from './authenticationSaga';
import { resultBorrow } from './borrowSaga';
import { resultLendCrypto } from './lendCryptoSaga';
import { resultLendNFT } from './lendNftSaga';
import {
  REGISTER_USER,
  LOGIN_USER,
  GET_RESULT_BORROW,
  GET_RESULT_LEND_CRYPTO,
  GET_RESULT_LEND_NFT,
} from 'app/actions/types';

export default function* watchUserAuthentication() {
  yield takeLatest(REGISTER_USER, registerSaga);
  yield takeLatest(LOGIN_USER, LoginSaga);
  yield takeLatest(GET_RESULT_BORROW, resultBorrow);
  yield takeLatest(GET_RESULT_LEND_CRYPTO, resultLendCrypto);
  yield takeLatest(GET_RESULT_LEND_NFT, resultLendNFT);
}
