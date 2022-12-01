import { createContext } from 'react';

export const defaultValue = {
  user: null,
  token: null,
  setUser: () => {},
  setToken: () => {},
};
const AuthContext = createContext(defaultValue);
AuthContext.displayName = 'AuthContext';

export { AuthContext };
