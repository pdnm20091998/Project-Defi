import { GET_RESULT_BORROW } from '../types';
export const resultBorrowAction = data => {
  return {
    type: GET_RESULT_BORROW,
    data,
  };
};
