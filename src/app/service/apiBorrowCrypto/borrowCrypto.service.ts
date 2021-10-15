import axios from 'axios';

export const ResultBorrowCryptoService = request => {
  const BASE_API_URL =
    'https://staginggw.defiforyou.uk/defi-pawn-crypto-service/public-api/v1.0.0/pawn-shop-package/search';
  return axios
    .get(
      BASE_API_URL +
        `?${
          request.data.collateralAmount
            ? `&collateralAmount=${request.data.collateralAmount}`
            : ''
        }${
          request.data.collateralSymbols
            ? `&collateralSymbols=${request.data.collateralSymbols}`
            : ''
        }${
          request.data.durationQty
            ? `&durationQty=${request.data.durationQty}`
            : ''
        }${
          request.data.durationTypes
            ? `&durationTypes=${request.data.durationTypes}`
            : ''
        }${
          request.data.loanAmount
            ? `&loanAmount=${request.data.loanAmount}`
            : ''
        }${
          request.data.loanSymbols
            ? `&loanSymbols=${request.data.loanSymbols}`
            : ''
        }${
          request.data.interestRanges
            ? `&interestRanges=${request.data.interestRanges}`
            : ''
        }${
          request.data.loanToValueRanges
            ? `&loanToValueRanges=${request.data.loanToValueRanges}`
            : ''
        }${
          request.data.loanTypes ? `&loanTypes=${request.data.loanTypes}` : ''
        }${request.data.cusSort ? `&cusSort=${request.data.cusSort}` : ''}${
          request.data.name ? `&name=${request.data.name}` : ''
        }&page=${request.data.page + 1}&size=10
      `,
    )
    .then((response: any) => {
      return response.data;
    })
    .catch((request: any) => {
      return request.response;
    });
};

export const ResultPersonalCryptoService = request => {
  const BASE_API_URL =
    'https://staginggw.defiforyou.uk/defi-pawn-crypto-service/public-api/v1.0.0/pawn-shop/search-p2p-lenders';
  return axios
    .get(
      BASE_API_URL +
        `?${
          request.data.collateralAmount
            ? `&collateralAmount=${request.data.collateralAmount}`
            : ''
        }${
          request.data.collateralSymbols
            ? `&collateralSymbols=${request.data.collateralSymbols}`
            : ''
        }${
          request.data.durationQty
            ? `&durationQty=${request.data.durationQty}`
            : ''
        }${
          request.data.durationTypes
            ? `&durationTypes=${request.data.durationTypes}`
            : ''
        }${
          request.data.loanAmount
            ? `&loanAmount=${request.data.loanAmount}`
            : ''
        }${
          request.data.loanSymbols
            ? `&loanSymbols=${request.data.loanSymbols}`
            : ''
        }${
          request.data.interestRanges
            ? `&interestRanges=${request.data.interestRanges}`
            : ''
        }${
          request.data.loanToValueRanges
            ? `&loanToValueRanges=${request.data.loanToValueRanges}`
            : ''
        }${
          request.data.loanTypes ? `&loanTypes=${request.data.loanTypes}` : ''
        }${request.data.cusSort ? `&cusSort=${request.data.cusSort}` : ''}${
          request.data.name ? `&name=${request.data.name}` : ''
        }&size=10&status=3
      `,
    )
    .then((response: any) => {
      return response.data;
    })
    .catch((request: any) => {
      return request.response;
    });
};
