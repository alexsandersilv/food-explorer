import { createContext, useContext, useState, useEffect } from 'react';

import { api } from '../services/api'


const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
    const response = await api.post('/sessions', { 
      email,
      password
    });

    const { user, token } = response.data;
  

    localStorage.setItem("@foodexplorer:user", JSON.stringify(user));
    localStorage.setItem("@foodexplorer:token", token);

    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    setData({ user, token });
    
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível entrar")
      }
    }
  }

  async function signUp({ name, email, password }) {
    try {
      await api.post('/users', { name, email, password });      

      alert("Usuario Cirado")
      window.location.href = '/';

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível entrar")
      }
    }
  }

  async function signOut() {
    localStorage.removeItem("@foodexplorer:user");
    localStorage.removeItem("@foodexplorer:token");
    window.location.href = '/';
    
    setData({});
  }

  useEffect(() => {
    const token = localStorage.getItem("@foodexplorer:token");
    const user = localStorage.getItem("@foodexplorer:user");

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({ user: JSON.parse(user), token });
    }

  }, []);

  return (
    <AuthContext.Provider value={{ signIn, signOut, signUp, user: data.user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}