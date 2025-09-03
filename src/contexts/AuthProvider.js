"use client";
import React from "react";
import { api } from "@/lib/api";

const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = React.useState(null);
  const [emailState, setEmailState] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = () => {
    try {
      const token = localStorage.getItem("auth-token");
      const userData = localStorage.getItem("user-data");
      const savedEmail = localStorage.getItem("user-email");

      if(token && userData) {
        setUser(JSON.parse(userData));
      }

      if(savedEmail) {
        setEmailState(savedEmail)
      }

    } catch (error) {
      console.log("Auth check failed:", error);
      localStorage.removeItem("auth-token");
      localStorage.removeItem("user-data");
      localStorage.removeItem("user-email");
    } finally {
      setIsLoading(false);
    }
  };

  const setEmail = React.useCallback((newEmail) => {
    setEmailState(newEmail)
    if(newEmail) {
      localStorage.setItem('user-email', newEmail)
    } else {
      localStorage.removeItem('user-email')
    }
  }, [])

  const login = async (email, password) => {
    const result = await api.login(email, password);

    console.log("Login API response:", result);

    localStorage.setItem("auth-token", result.access_token);
    localStorage.setItem("user-data", JSON.stringify(result.user));

    setUser(result.user);

    setEmailState(email);

    return result;
  };

  const logout = () => {
    localStorage.removeItem("auth-token");
    localStorage.removeItem("user-data");
    localStorage.removeItem("user-email");
    setUser(null);
    setEmailState('');
  };

  const updateUser = (userData) => {
    localStorage.setItem("user-data", JSON.stringify(userData))
    setUser(userData)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        email: emailState,
        setEmail,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => React.useContext(AuthContext);
