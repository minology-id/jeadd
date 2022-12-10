import React from 'react';
import { AiOutlinePoweroff } from 'react-icons/ai';

import { AuthContext } from 'context/Auth.context';
import { useAuth } from 'hooks/useAuth';

const Logout = ({ isDesktop }) => {
  const { setToken, setUser, token } = React.useContext(AuthContext);
  const { logout } = useAuth();
  const { mutate: doLogout } = logout();

  const onLogout = () => {
    doLogout(token);
    setToken(null);
    setUser(null);
  };

  if (isDesktop) {
    return (
      <button
        className="dropdown-item user-select-none text-danger"
        onClick={onLogout}
      >
        <AiOutlinePoweroff className="me-2" />
        Logout
      </button>
    );
  } else {
    return (
      <span onClick={onLogout} className="text-danger mx-2">
        <AiOutlinePoweroff className="my-auto" /> Logout
      </span>
    );
  }
};

Logout.defaultProps = {
  isDesktop: true,
};

export default Logout;
