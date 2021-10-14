import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from 'app/actions/types';

const initialState = {};

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
      return {
        isLoggedIn: false,
        access: payload,
      };
    case REGISTER_FAIL:
      return {
        isLoggedIn: false,
        access: payload,
      };
    case LOGIN_SUCCESS:
      return {
        isLoggedIn: true,
        access: payload,
      };
    case LOGIN_FAIL:
      return {
        isLoggedIn: true,
        access: payload,
      };
    default:
      return state;
  }
};
