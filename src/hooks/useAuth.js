import { useMutation } from '@tanstack/react-query';
import jwtAxios from 'services/jwtAxios';

export const useAuth = () => {
  const apiPath = '/auth';

  const login = ({ onSuccess, onError }) =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useMutation(
      async (payload) => await jwtAxios.post(`${apiPath}/login`, payload),
      {
        onSuccess,
        onError,
      }
    );

  const logout = () =>
    useMutation((token) =>
      jwtAxios.get(`${apiPath}/logout`, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    );

  return { login, logout };
};
