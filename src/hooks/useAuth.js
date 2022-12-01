import { useMutation, useQuery } from '@tanstack/react-query';
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

  return { login };
};
