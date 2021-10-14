import {
  GET_FILTER_LEND_NFT_SUCCESS,
  GET_FILTER_LEND_NFT_FAIL,
} from 'app/actions/types';

const initialState = {};
export const filterLendNftReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_FILTER_LEND_NFT_SUCCESS:
      return {
        type: type,
        result: payload.data,
      };
    case GET_FILTER_LEND_NFT_FAIL:
      return {
        type: type,
        result: payload,
      };
    default:
      return state;
  }
};
