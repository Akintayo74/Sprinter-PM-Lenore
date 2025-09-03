"use client";
import React from "react";
import { api } from "@/lib/api";

const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = () => {
    try {
      const token = localStorage.getItem("auth-token");
      const userData = localStorage.getItem("user-data");

      if (token && userData) {
        setUser(JSON.parse(userData));
      }
    } catch (error) {
      console.log("Auth check failed:", error);
      localStorage.removeItem("auth-token");
      localStorage.removeItem("user-data");
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email, password) => {
    const result = await api.login(email, password);

    console.log("Login API response:", result);

    localStorage.setItem("auth-token", result.access_token);
    localStorage.setItem("user-data", JSON.stringify(result.user));

    setUser(result.user);
    return result;
  };

  const logout = () => {
    localStorage.removeItem("auth-token");
    localStorage.removeItem("user-data");
    setUser(null);
  };

  const updateUser = (userData) => {
    localStorage.setItem("user-data", JSON.stringify(userData))
    setUser(userData)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
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
