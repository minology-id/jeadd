import jwtAxios from './jwtAxios';

export function refreshToken({ onSuccess, onError }) {
  return jwtAxios.post(
    `${process.env.REACT_APP_BASE_API}auth/refreshToken`,
    {},
    {
      onSuccess,
      onError,
    }
  );
}
