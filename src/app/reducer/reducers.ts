/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './auth/auth';
import { userReducer } from './auth/userReducer';
import { resultLendNftReducer } from './lendNft/resultReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  lendnft: resultLendNftReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
