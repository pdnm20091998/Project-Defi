import {
  REGISTER_USER,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_USER,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from '../actions/types';

const token = localStorage.getItem('token');
const initialState = {};

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
      return {
        isLoggedIn: false,
        num: 1,
      };
    case REGISTER_FAIL:
      return {
        isLoggedIn: false,
        num: 2,
      };
    case LOGIN_SUCCESS:
      return {
        isLoggedIn: true,
        user: action.user,
        num: 3,
      };
    case LOGIN_FAIL:
      return {
        isLoggedIn: true,
        user: null,
        num: 4,
      };
    case REGISTER_USER:
      return {
        isLoggedIn: true,
        user: null,
        num: 5,
      };
    case LOGIN_USER:
      return {
        isLoggedIn: true,
        user: action.user,
        num: 6,
      };
    default:
      return state;
  }
};
