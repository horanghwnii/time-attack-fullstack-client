'use client';

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

type AuthContext = {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
};

const initialValue: AuthContext = {
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  email: '',
  setEmail: () => {},
};

const AuthContext = createContext(initialValue);

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');

  const value = {
    isLoggedIn,
    setIsLoggedIn,
    email,
    setEmail,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
