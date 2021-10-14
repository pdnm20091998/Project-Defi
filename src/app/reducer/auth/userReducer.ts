import { GET_USER } from 'app/actions/types';

const initialState = {};

export const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USER:
      return {
        user: payload.data,
      };
    default:
      return state;
  }
};
