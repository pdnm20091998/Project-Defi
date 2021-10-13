import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from '../actions/types';

const initialState = {};

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
      return {
        isLoggedIn: false,
      };
    case REGISTER_FAIL:
      return {
        isLoggedIn: false,
      };
    case LOGIN_SUCCESS:
      return {
        isLoggedIn: true,
        access: payload,
      };
    case LOGIN_FAIL:
      return {
        isLoggedIn: true,
        access: null,
      };
    default:
      return state;
  }
};
