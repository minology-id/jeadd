import jwtAxios from './jwtAxios';

export function getSession(token) {
  return jwtAxios.get(`${process.env.REACT_APP_BASE_API}auth/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
