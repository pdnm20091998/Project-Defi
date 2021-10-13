import axios from 'axios';

export const getResultLenCrypto = async (page, size) => {
  return await axios.get(
    `https://staginggw.defiforyou.uk/defi-pawn-crypto-service/public-api/v1.0.0/collaterals/search?page=${page}&size=${size}`,
  );
};
