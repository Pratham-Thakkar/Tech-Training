import { createBrowserRouter } from "react-router-dom";
import { CharacterCounter } from "../components/CharacterCounter/CharacterCounter";
import { Home } from "../components/Home/Home";
import { ResetPassword } from "../components/ResetPassword/ResetPassword";
import { ListProducts } from "../components/ListProducts/ListProducts";
import { SignUp } from "../components/Sign Up/SignUp";
import { Login } from "../components/Sign In/Login";
import { ProtectedRoutes } from "./ProtectedRoute";
import { CreateBlog } from "../components/Blog/CreateBlog/CreateBlog";
import { ListBlog } from "../components/Blog/ListBlog/ListBlog";
import { ListSpecificBlog } from "../components/Blog/ListSpecificBlog/ListSpecificBlog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/create-blog",
        element: (
          <ProtectedRoutes>
            <CreateBlog />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/list-blog",
        element: (
          <ProtectedRoutes>
            <ListBlog />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/blog/:createBy/:id",
        element: (
          <ProtectedRoutes>
            <ListSpecificBlog />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/:createBy/my-blog",
        element:(
          <ProtectedRoutes>
            
          </ProtectedRoutes>
        )
      },
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
    ],
  },
]);
