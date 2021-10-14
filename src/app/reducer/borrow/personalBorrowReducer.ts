import {
  GET_RESULT_PERSONAL_BORROW_SUCCESS,
  GET_RESULT_PERSONAL_BORROW_FAIL,
} from 'app/actions/types';
const initialState = {};
export const resultPersonalBorrowReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_RESULT_PERSONAL_BORROW_SUCCESS:
      return {
        type: type,
        result: payload.data,
      };
    case GET_RESULT_PERSONAL_BORROW_FAIL:
      return {
        type: type,
        result: payload,
      };
    default:
      return state;
  }
};
