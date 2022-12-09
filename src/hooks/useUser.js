import { useQuery, useMutation } from '@tanstack/react-query';
import axios from 'axios';

import helper from 'utils/helper';

const get = ({ token, onSuccess, onError, sort, paginate, search }) => {
  const params = helper.createParams(sort, paginate, search);
  return useQuery(
    ['users', sort, paginate, search],
    () =>
      axios.get('http://localhost:5099/v1/user', {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params,
      }),
    {
      onSuccess,
      onError,
    }
  );
};

const create = ({ token, onSuccess, onError }) =>
  useMutation(
    ['user'],
    (data) =>
      axios.post(
        'http://localhost:5099/v1/user',
        { ...data },
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      ),
    { onSuccess, onError }
  );

export default { get, create };
