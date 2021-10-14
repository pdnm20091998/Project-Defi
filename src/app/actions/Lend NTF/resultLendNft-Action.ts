import { GET_RESULT_LEND_NFT } from '../types';
export const resultLendNftAction = data => {
  return {
    type: GET_RESULT_LEND_NFT,
    data,
  };
};
