import React, { createContext, useContext, useState, useCallback } from 'react';
import api from '../services/api';

interface AuthState {
  ticket: string;
  user: object;
}

interface LoginCredentials {
  username: string;
  password: string;
}

interface AuthContextData {
  user: object;
  login(credentials: LoginCredentials): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const ticket = localStorage.getItem('@GED:ticket');
    const user = localStorage.getItem('@GED:user');

    if (ticket && user) {
      return { ticket, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const login = useCallback(async ({ username, password }) => {
    const response = await api.post('/sessions', {
      username,
      password,
    });

    const { ticket, user } = response.data;

    localStorage.setItem('@GED:ticket', ticket);
    localStorage.setItem('@GED:user', JSON.stringify(user));

    setData({ ticket, user });
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, login }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};

export { AuthProvider, useAuth };
