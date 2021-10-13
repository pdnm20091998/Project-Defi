import axios from 'axios';
// Get Api results Lend Nft
export const ResultLendNftService = request => {
  const page = 0;
  const BASE_API_URL =
    'https://staginggw.defiforyou.uk/defi-pawn-crypto-service/public-api/v1.0.0/account/collaterals/nfts/search';
  return axios
    .get(
      BASE_API_URL + `?loanSymbol=&durationType=&loanAmount=&${page}=0&size=10`,
      request,
    )
    .then((res: any) => {
      return res.data;
    })
    .catch((req: any) => {
      return req.response;
    });
};
