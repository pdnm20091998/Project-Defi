import axios from 'axios';
export const registerUserService = request => {
  const REGISTER_API_ENDPOINT =
    'https://staginggw.defiforyou.uk/defi-user-service/public-api/v1.0.0/users/signup';

  return axios
    .post(REGISTER_API_ENDPOINT, JSON.parse(JSON.stringify(request.user)))
    .then(response => {
      return response.data;
    });
};

export const loginUserService = request => {
  const LOGIN_API_ENDPOINT =
    'https://staginggw.defiforyou.uk/defi-user-service/public-api/v1.0.0/users/login';

  return axios
    .post(LOGIN_API_ENDPOINT, JSON.parse(JSON.stringify(request.user)))
    .then((response: any) => {
      const history = request.user.history;
      if (response.data.access_token) {
        localStorage.setItem(
          'token',
          JSON.stringify(response.data.access_token),
        );

        axios
          .get(
            'https://staginggw.defiforyou.uk/defi-user-service/api/v1.0.0/users/profile',
            {
              headers: {
                Authorization: `Bearer ${response.data.access_token}`,
              },
            },
          )
          .then((res: any) => {
            localStorage.setItem('name', JSON.stringify(res.data.data.name));
          });
        history.push('/');
      }
      return response.data;
    })
    .catch((req: any) => {
      if (req.response.status === 401) {
        alert('Your username or password is not correct, please try again');
      }
      if (req.response.status === 404) {
        alert(
          'This account has not been activated yet. Please confirm email to activate your account',
        );
      }
    });
};

export const logout = () => {
  localStorage.removeItem('user');
};

export const getAsset = async () => {
  return await axios.get(
    'https://staginggw.defiforyou.uk/defi-pawn-crypto-service/public-api/v1.0.0/crypto-asset',
  );
};
export const getResultLenCrypto = async () => {
  return await axios.get(
    'https://staginggw.defiforyou.uk/defi-pawn-crypto-service/public-api/v1.0.0/collaterals/search',
  );
};
