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

  React.useEffect(() => {
    refreshToken()
      .then((res) => {
        if (!res.data.payload) throw new Error('null token');

        setToken(res.data.payload);
      })
      .catch((err) => {
        console.log(err);
        setToken(false);
      })
      .finally(() => setLoading(false));
  }, []);

  React.useEffect(() => {
    if (token) {
      getSession(token)
        .then((res) => {
          if (!res.data.payload) throw new Error('null token');

          setUser(res.data.payload);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [token]);

  // useTracer('token', token);
  // useTracer('user', user);
  // useTracer('loading', loading);

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
