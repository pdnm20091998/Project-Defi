import { REGISTER_USER, LOGIN_USER } from './types';

export const registerUserAction = user => {
  return {
    type: REGISTER_USER,
    user,
  };
};

export const loginUserAction = user => {
  return {
    type: LOGIN_USER,
    user,
  };
};
