import {
  GET_RESULT_LEND_NFT_SUCCESS,
  GET_RESULT_LEND_NFT_FAIL,
} from 'app/actions/types';
const initialState = {};
export const resultLendNftReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_RESULT_LEND_NFT_SUCCESS:
      return {
        type: type,
        result: payload.data,
      };
    case GET_RESULT_LEND_NFT_FAIL:
      return {
        type: type,
        result: payload,
      };
    default:
      return state;
  }
};
