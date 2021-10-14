import axios from 'axios';

export const ResultBorrowCryptoService = request => {
  const BASE_API_URL =
    'https://staginggw.defiforyou.uk/defi-pawn-crypto-service/public-api/v1.0.0/pawn-shop-package/search?size=10&status=3';
  return axios
    .get(BASE_API_URL)
    .then((response: any) => {
      return response.data;
    })
    .catch((request: any) => {
      return request.response;
    });
};
