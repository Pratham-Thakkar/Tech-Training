import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CreateProject } from "./component/CreateProject";
import { CreateTalent } from "./component/CreateTalent";
import { NotFound } from "./component/NotFound";
import { Home } from "./component/Home";
import { ListTalent } from "./component/ListTalent";
import { ListProject } from "./component/ListProject";
import { ProjectDetails } from "./component/ProjectDetails";
import { EditProject } from "./component/EditProject";
import { TalentDetails } from "./component/TalentDetails";
import { EditTalnet } from "./component/EditTalent";
import { ProtectedRoute } from "./component/ProtectedRoute";
import { Login } from "./component/Login";
import { AuthProvider } from "./AuthContext";

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
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
}

export default App;
