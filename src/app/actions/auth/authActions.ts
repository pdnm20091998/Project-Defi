import { REGISTER_USER, LOGIN_USER } from '../types';

//Register action
export const registerUserAction = user => {
  return {
    type: REGISTER_USER,
    user,
  };
};

//Login action
export const loginUserAction = user => {
  return {
    type: LOGIN_USER,
    user,
  };
};
