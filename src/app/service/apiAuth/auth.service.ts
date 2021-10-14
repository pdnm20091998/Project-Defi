import axios from 'axios';
// Call Api Sign up
export const registerUserService = request => {
  const REGISTER_API_ENDPOINT =
    'https://staginggw.defiforyou.uk/defi-user-service/public-api/v1.0.0/users/signup';

  return axios
    .post(REGISTER_API_ENDPOINT, JSON.parse(JSON.stringify(request.user)))
    .then(response => {
      return response.data;
    });
};
// Call Api Login
export const loginUserService = request => {
  const LOGIN_API_ENDPOINT =
    'https://staginggw.defiforyou.uk/defi-user-service/public-api/v1.0.0/users/login';

  return axios
    .post(LOGIN_API_ENDPOINT, JSON.parse(JSON.stringify(request.user)))
    .then((response: any) => {
      const history = request.user.history;
      if (response.data.access_token) {
        localStorage.setItem('token', response.data.access_token);
        history.push('/');
      }
      return response.data;
    })
    .catch((req: any) => {
      return req.response;
    });
};
//Cal Api get User
export const getUser = request => {
  const token = request;
  return axios
    .get(
      'https://staginggw.defiforyou.uk/defi-user-service/api/v1.0.0/users/profile',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )
    .then((res: any) => {
      localStorage.setItem('name', JSON.stringify(res.data.data.name));
      return res.data;
    });
};
