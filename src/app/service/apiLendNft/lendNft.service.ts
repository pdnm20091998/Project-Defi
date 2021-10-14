import axios from 'axios';
// Get Api results Lend Nft
export const ResultLendNftService = request => {
  const BASE_API_URL =
    'https://staginggw.defiforyou.uk/defi-pawn-crypto-service/public-api/v1.0.0/account/collaterals/nfts/search';
  return axios
    .get(
      BASE_API_URL +
        `?${
          request.data.loanSymbol
            ? `&loanSymbol=${request.data.loanSymbol}`
            : ''
        }${
          request.data.loanDurationType !== undefined
            ? `&durationType=${request.data.loanDurationType}`
            : ''
        }${
          request.data.loanAmount
            ? `&loanAmount=${request.data.loanAmount}`
            : ''
        }${request.data.name ? `&name=${request.data.name}` : ''}${
          request.data.nftType ? `&nftType=${request.data.nftType}` : ''
        }${
          request.data.assetType ? `&assetType=${request.data.assetType}` : ''
        }&page=${request.data.page}&size=10`,
    )
    .then((res: any) => {
      return res.data;
    })
    .catch((req: any) => {
      return req.response;
    });
};
