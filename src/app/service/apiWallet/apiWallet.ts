import axios from 'axios';

export const getWalletAddress = async address => {
  return await axios.get(
    `https://staginggw.defiforyou.uk/defi-user-service/public-api/v1.0.0/users/reputation/by-wallet?walletAddress=${address}`,
  );
};
