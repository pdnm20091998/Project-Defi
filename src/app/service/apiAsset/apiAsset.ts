import axios from 'axios';

export const getAsset = async () => {
  return await axios.get(
    'https://staginggw.defiforyou.uk/defi-pawn-crypto-service/public-api/v1.0.0/crypto-asset',
  );
};
