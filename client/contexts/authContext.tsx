import React, { Dispatch, FC, SetStateAction } from 'react';

interface AuthProviderProps {
  value: {
    isAuthenticated: boolean;
    setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
  };
}

const AuthContext = React.createContext<Partial<AuthProviderProps['value']>>(
  {}
);

const useAuth = () => React.useContext(AuthContext);

const AuthProvider: FC<AuthProviderProps> = ({ value, children }) => {
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, useAuth, AuthProvider };
