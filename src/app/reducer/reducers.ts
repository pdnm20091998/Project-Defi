/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './auth';
import { userReducer } from './userReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
