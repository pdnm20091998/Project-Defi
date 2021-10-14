/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './auth/auth';
import { userReducer } from './auth/userReducer';
import { resultBorrowReducer } from './borrow/borrowReducer';
import { resultPersonalBorrowReducer } from './borrow/personalBorrowReducer';
import { resultLendNftReducer } from './lendNft/resultReducer';
import { resultLendCryptoReducer } from './lendCrypto/lendCryptoReducer';

const rootReducer = combineReducers({
  borrow: resultBorrowReducer,
  personborrow: resultPersonalBorrowReducer,
  lendnft: resultLendNftReducer,
  lendcrypto: resultLendCryptoReducer,
  auth: authReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
