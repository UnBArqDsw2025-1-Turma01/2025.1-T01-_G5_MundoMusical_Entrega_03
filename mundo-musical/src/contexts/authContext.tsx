import { createContext, useContext, type Dispatch, type SetStateAction } from 'react';

interface IAuthContext {
  isAuthenticated: boolean;
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  return { ...context };
};