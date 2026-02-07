/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect } from "react";
import API from "../api/backend_api";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  // Auto load user on refresh
  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setAuthLoading(false);
        return;
      }
      try {
        const res = await API.get("/auth/me");
        setUser({ ...res.data, token });
      } catch {
        localStorage.removeItem("token");
        setUser(null);
      }
      setAuthLoading(false);
    };
    loadUser();
  }, []);

  const login = async (token) => {
    localStorage.setItem("token", token);
    const res = await API.get("/auth/me");
    setUser({ ...res.data, token });
  };

  const logout = async () => {
    try {
      await API.post("/auth/dashboard/logout",{},{
        headers:{Authorization: `Bearer ${user.token}`},
    });
  } catch (err) {
    console.error("Logout error:", err);
  }
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, authLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
