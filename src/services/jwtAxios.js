import axios from 'axios';

const jwtAxios = axios.create({
  baseURL: process.env.REACT_APP_BASE_API,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setAuthToken = (token) => {
  if (token) {
    jwtAxios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete jwtAxios.defaults.headers.common['Authorization'];
  }
};

export default jwtAxios;
