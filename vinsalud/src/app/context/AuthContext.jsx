"use client";
import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState("");

  const login = async (email, password) => {
    try {
      
      const response = await fetch("/api/users");
      const users = await response.json();
      const user = users.find(
        (user) => user.email === email && user.password === password
      );
      if (user) {
        setIsLoggedIn(true);
        setRole(user.role);
        return true; 
      } else {
        return false; 
      }
    } catch (error) {
      console.error("Error al verificar las credenciales", error);
      return false; 
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setRole("");
        
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);