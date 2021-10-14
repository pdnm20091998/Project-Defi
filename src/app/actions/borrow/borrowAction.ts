import { GET_RESULT_BORROW, GET_RESULT_PERSONAL_BORROW } from '../types';

export const resultBorrowAction = data => {
  return {
    type: GET_RESULT_BORROW,
    data,
  };
};

export const resultPersonalBorrowAction = data => {
  return {
    type: GET_RESULT_PERSONAL_BORROW,
    data,
  };
};
