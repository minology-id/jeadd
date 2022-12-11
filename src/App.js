import React from 'react';

import Routes from './routes';
import { AuthContext } from 'context/Auth.context';
import { refreshToken } from 'services/refreshToken';
import { getSession } from 'services/session';

import Login from 'pages/Login';
import FullSpinnerGrow from 'components/Spinner/FullSpinnerGrow';

// import useTracer from 'hooks/useTracer';

function App() {
  const [token, setToken] = React.useState(null);
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  const verifyUser = React.useCallback(() => {
    refreshToken()
      .then((res) => {
        if (!res.data.payload) throw new Error('null token');

        setToken(res.data.payload);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        setToken(false);
      });

    setTimeout(verifyUser, 5 * 60 * 1000);
  }, [setToken]);

  React.useEffect(() => {
    verifyUser();
  }, [verifyUser]);

  const getToken = React.useCallback(() => {
    getSession(token)
      .then((res) => {
        if (!res.data.payload) throw new Error('null token');

        setUser(res.data.payload);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, [token]);

  React.useEffect(() => {
    if (token) {
      getToken();
    }
  }, [getToken, token]);

  if (loading) {
    return <FullSpinnerGrow />;
  } else {
    return (
      <AuthContext.Provider value={{ loading, token, user, setToken, setUser }}>
        {token ? <Routes /> : <Login />}
      </AuthContext.Provider>
    );
  }
}

export default App;
