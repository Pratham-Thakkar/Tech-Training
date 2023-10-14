import "./App.css";
import { RouterProvider } from "react-router";
import { router } from "./routes/AppRoutes";
import "bootstrap/dist/css/bootstrap.min.css";

import { AuthProvider } from "./components/context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
}

export default App;
