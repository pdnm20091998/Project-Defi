import axios from 'axios';

export const getResultLenCrypto = request => {
  const BASE_API_URL = `https://staginggw.defiforyou.uk/defi-pawn-crypto-service/public-api/v1.0.0/collaterals/search`;
  return axios
    .get(
      BASE_API_URL +
        `?page=${request.data.page}&size=10${
          request.data.item
            ? `&collateralSymbols=${request.data.item}`
            : '&collateralSymbols='
        }${
          request.data.loanSymbol
            ? `&loanSymbols=${request.data.loanSymbol}`
            : '&loanSymbols='
        }${
          request.data.loanDurationType !== undefined
            ? `&durationTypes=${request.data.loanDurationType}`
            : '&durationTypes='
        }`,
    )
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err.response;
    });
};
