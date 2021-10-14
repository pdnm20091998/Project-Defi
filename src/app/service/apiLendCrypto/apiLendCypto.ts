import axios from 'axios';

export const getResultLenCrypto = requet => {
  return axios
    .get(
      `https://staginggw.defiforyou.uk/defi-pawn-crypto-service/public-api/v1.0.0/collaterals/search?page=0&size=10`,
    )
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err.response;
    });
};
