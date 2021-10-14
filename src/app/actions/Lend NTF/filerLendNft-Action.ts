import { GET_FILTER_LEND_NFT } from '../types';
export const filerLendNftAction = data => {
  return {
    type: GET_FILTER_LEND_NFT,
    data,
  };
};
