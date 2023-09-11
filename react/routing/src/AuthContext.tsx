import React, { createContext, useContext, useEffect, useState } from "react";
import { myAxios } from "./config/axiosConfig";

const AuthContext = createContext<{
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
} | null>(null);

export const AuthProvider = ({ children }: any) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    if (token) {
      myAxios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
      delete myAxios.defaults.headers.common["Authorization"];
    }
  }, [token]);

  const contextValue = { token, setToken };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
