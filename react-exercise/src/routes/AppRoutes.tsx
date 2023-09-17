import { createBrowserRouter } from "react-router-dom";
import { CharacterCounter } from "../components/CharacterCounter/CharacterCounter";
import { Home } from "../components/Home/Home";
import { ResetPassword } from "../components/ResetPassword/ResetPassword";
import { ListProducts } from "../components/ListProducts/ListProducts";
import { SignUp } from "../components/Sign Up/SignUp";
import { Login } from "../components/Sign In/Login";
import { ProtectedRoutes } from "./ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/character-counter",
        element: (
          <ProtectedRoutes>
            <CharacterCounter />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/reset-password",
        element: (
          <ProtectedRoutes>
            <ResetPassword />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/list-products",
        element: (
          <ProtectedRoutes>
            <ListProducts />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
