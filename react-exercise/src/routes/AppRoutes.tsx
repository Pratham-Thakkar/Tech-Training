import { createBrowserRouter } from "react-router-dom";
import { CharacterCounter } from "../components/CharacterCounter/CharacterCounter";
import { Home } from "../components/Home/Home";
import { ResetPassword } from "../components/ResetPassword/ResetPassword";
import { ListProducts } from "../components/ListProducts/ListProducts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/character-counter",
        element: <CharacterCounter />,
      },
      {
        path: "/reset-password",
        element: <ResetPassword />,
      },
      {
        path: "/list-products",
        element: <ListProducts />,
      },
    ],
  },
]);
