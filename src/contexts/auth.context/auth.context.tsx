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

// const isAccessTokenStored = !!localStorage.getItem('accessToken'); // !! -> boolean으로 바뀜

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

  // useEffect(() => {
  //   let timerId: number | undefined;

  //   if (isLoggedIn) {
  //     timerId = window.setInterval(async () => {
  //       const { data: accessToken } = await client.get<string>(
  //         '/auth/refresh-token'
  //       );

  //       console.log(accessToken);
  //       client.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  //       localStorage.setItem('accessToken', accessToken);
  //     }, 1000 * 60 * (30 / 60));

  //     return () => {
  //       window.clearInterval(timerId);
  //     };
  //   } else {
  //     if (!timerId) return;

  //     window.clearInterval(timerId);
  //   }
  // }, [isLoggedIn]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
