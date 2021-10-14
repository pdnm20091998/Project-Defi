import { GET_RESULT_LEND_CRYPTO } from '../types';
export const resultLendCryptoAction = data => {
  return {
    type: GET_RESULT_LEND_CRYPTO,
    data,
  };
};
