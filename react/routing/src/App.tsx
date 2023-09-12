import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CreateProject } from "./component/CreateProject/CreateProject";
import { CreateTalent } from "./component/CreateTalent/CreateTalent";
import { NotFound } from "./component/NotFound/NotFound";
import { Home } from "./component/Home/Home";
import { ListTalent } from "./component/ListTalent/ListTalent";
import { ListProject } from "./component/ListProject/ListProject";
import { ProjectDetails } from "./component/ProjectDetail/ProjectDetails";
import { EditProject } from "./component/EditProject/EditProject";
import { TalentDetails } from "./component/TalentDetail/TalentDetails";
import { EditTalnet } from "./component/EditTalent/EditTalent";
import { ProtectedRoute } from "./component/ProtectedRoute";
import { Login } from "./component/Login/Login";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/createProject",
        element: (
          <ProtectedRoute>
            <CreateProject />
          </ProtectedRoute>
        ),
      },
      {
        path: "/createtalent",
        element: <CreateTalent />,
      },
      {
        path: "/talents",
        element: <ListTalent />,
      },
      {
        path: "/talents/:talentId",
        element: <TalentDetails />,
      },
      {
        path: "/talents/:talentId/edit",
        element: <EditTalnet />,
      },
      {
        path: "/projects",
        element: <ListProject />,
      },
      {
        path: "/projects/:projectId",
        element: <ProjectDetails />,
      },
      {
        path: "/projects/:projectId/edit",
        element: <EditProject />,
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <ThemeProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
