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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/createProject",
        element: <CreateProject />,
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
      <RouterProvider router={router} />
    </>
  );
}

export default App;
