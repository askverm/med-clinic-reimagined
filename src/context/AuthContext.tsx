
import React, { createContext, useContext, useEffect, useState } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin' | 'hospital' | 'ambulance' | 'caregiver';
  phone?: string;
  verified: boolean;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role?: string) => Promise<void>;
  register: (userData: RegisterData) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
  phone: string;
  role: 'user' | 'hospital' | 'ambulance' | 'caregiver';
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem('caresaathi_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string, role = 'user') => {
    // Mock login - replace with actual API call
    const mockUser: User = {
      id: '1',
      email,
      name: email.split('@')[0],
      role: role as any,
      verified: true
    };
    
    setUser(mockUser);
    localStorage.setItem('caresaathi_user', JSON.stringify(mockUser));
  };

  const register = async (userData: RegisterData) => {
    // Mock registration - replace with actual API call
    const newUser: User = {
      id: Date.now().toString(),
      ...userData,
      verified: false
    };
    
    setUser(newUser);
    localStorage.setItem('caresaathi_user', JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('caresaathi_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
