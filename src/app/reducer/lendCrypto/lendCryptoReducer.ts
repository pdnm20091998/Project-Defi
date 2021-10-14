import {
  GET_RESULT_LEND_CRYPTO_SUCCESS,
  GET_RESULT_LEND_CRYPTO_FAIL,
} from 'app/actions/types';
const initialState = {};
export const resultLendCryptoReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_RESULT_LEND_CRYPTO_SUCCESS:
      return {
        type: type,
        result: payload.data,
      };
    case GET_RESULT_LEND_CRYPTO_FAIL:
      return {
        type: type,
        result: payload,
      };
    default:
      return state;
  }
};
