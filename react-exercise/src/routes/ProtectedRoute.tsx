import { Navigate } from "react-router";
import { useAuth } from "../components/context/AuthContext";

export const ProtectedRoutes = ({ children }: any) => {
  const auth = useAuth();
  if (!auth?.token) return <Navigate to={"/login"} />;
  return <>{children}</>;
};
