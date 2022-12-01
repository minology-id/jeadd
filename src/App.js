import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router from 'Routes';
import { AuthContext } from 'context/Auth.context';
import { refreshToken } from 'services/refreshToken';

function App() {
  const [token, setToken] = React.useState();
  const [user, setUser] = React.useState();

  React.useEffect(() => {
    refreshToken({
      onSuccess: (res) => {
        console.log(res);
      },
      onError: (err) => console.log(err),
    });
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, user, setToken, setUser }}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
