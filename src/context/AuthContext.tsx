import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';
import { api, connectDB } from '../config/database';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string, role: string) => Promise<void>;
  signup: (userData: Partial<User>, password: string) => Promise<void>;
  logout: () => void;
  error: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initDB = async () => {
      try {
        await connectDB();
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          const userData = JSON.parse(storedUser);
          const dbUser = await api.findUserById(userData.id);
          if (dbUser) {
            setUser(dbUser);
          }
        }
      } catch (err) {
        console.error('Error initializing:', err);
      } finally {
        setLoading(false);
      }
    };
    
    initDB();
  }, []);

  const login = async (email: string, password: string, role: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const user = await api.findUserByEmail(email);
      
      if (!user || user.password !== password || user.role !== role) {
        throw new Error('Credenciales inválidas');
      }

      const userData = {
        id: user.id,
        nombre: user.nombre,
        apellido: user.apellido,
        cedula: user.cedula,
        email: user.email,
        telefono: user.telefono,
        role: user.role,
        ...(user.role === 'empresa' && { nombreEmpresa: user.nombreEmpresa }),
        ...(user.role === 'medico' && { especialidad: user.especialidad })
      };
      
      localStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);
    } catch (err: any) {
      setError(err.message || 'Error de autenticación');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const signup = async (userData: Partial<User>, password: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const existingUser = await api.findUserByEmail(userData.email || '');
      if (existingUser) {
        throw new Error('Este correo ya está registrado');
      }

      const newUser = await api.createUser({
        ...userData,
        password
      });

      localStorage.setItem('user', JSON.stringify(newUser));
      setUser(newUser);
    } catch (err: any) {
      setError(err.message || 'Error al registrarse');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
};