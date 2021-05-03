import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '@http/api';

interface User {
  nome: string;
  sobrenome: string;
  nomeFantasia: string;
  role: string;
  id: number;
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  senha: string;
}

interface AuthContextData {
  user: User;
  token: string;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  updateUser(user: User): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@app:token');
    const user = localStorage.getItem('@app:user');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, senha }) => {
    const response = await api.post('api/Home/login', {
      email,
      senha,
    });

    const { token, nome, sobrenome, role, id } = response.data.user;
    const nomeFantasia = nome.split(' ');
    const user: User = {
      nomeFantasia: nomeFantasia[0],
      nome,
      sobrenome,
      role,
      id,
    };

    localStorage.setItem('@app:token', token);
    localStorage.setItem('@app:user', JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@app:token');
    localStorage.removeItem('@app:user');

    setData({} as AuthState);
  }, []);

  const updateUser = useCallback(
    (user: User) => {
      setData({
        token: data.token,
        user,
      });
      localStorage.setItem('@app:user', JSON.stringify(user));
    },
    [setData, data.token],
  );

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        token: data.token,
        updateUser,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
