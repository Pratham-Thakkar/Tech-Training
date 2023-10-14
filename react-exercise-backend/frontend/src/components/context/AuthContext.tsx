import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext<{
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
} | null>(null);

export const AuthProvider = ({ children }: any) => {
  const [token, setToken] = useState(sessionStorage.getItem("token"));

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      sessionStorage.setItem("token", token);
    } else {
      sessionStorage.removeItem("token");
      delete axios.defaults.headers.common["Authorization"];
    }
  });
  const contextValue = { token, setToken };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
