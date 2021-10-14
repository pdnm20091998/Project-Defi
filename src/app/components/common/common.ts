// Check token localstorage
export const getToken = () => {
  const userToken = localStorage.getItem('token');
  if (userToken) {
    return userToken;
  } else {
    return null;
  }
};

// Check name localstorage

export const getNameLocal = () => {
  const userName = localStorage.getItem('name');
  if (userName) {
    return JSON.parse(userName);
  } else {
    return null;
  }
};
