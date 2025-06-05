
import { createContext, useContext, useState } from 'react';

interface AuthContextType {
  user: any;
  theme: 'light' | 'dark';
  login: (email: string, password: string) => void;
  logout: () => void;
  signup: (email: string, password: string) => void;
  toggleTheme: () => void;
}

const AuthContext = createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const login = (email: string, password: string) => {
    setUser({ email });
  };

  const logout = () => {
    setUser(null);
  };

  const signup = (email: string, password: string) => {
    setUser({ email });
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <AuthContext.Provider value={{ user, theme, login, logout, signup, toggleTheme }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
