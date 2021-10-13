import { takeLatest } from 'redux-saga/effects';
import { registerSaga, LoginSaga } from './authenticationSaga';
import { filterLendNFT } from './lendNftSaga';
import {
  REGISTER_USER,
  LOGIN_USER,
  GET_FILTER_LEND_NFT,
} from 'app/actions/types';

export default function* watchUserAuthentication() {
  yield takeLatest(REGISTER_USER, registerSaga);
  yield takeLatest(LOGIN_USER, LoginSaga);
  yield takeLatest(GET_FILTER_LEND_NFT, filterLendNFT);
}
