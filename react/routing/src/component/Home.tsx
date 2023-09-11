import { Outlet, Link } from "react-router-dom";
import { useAuth } from "../AuthContext";

export const Home = () => {
  const auth = useAuth();
  return (
    <>
      <h1>Welcome to Casting Networks</h1>
      <Link to={`/createTalent`}>
        <button>Create Talent</button>
      </Link>

      <Link to={`/createProject`}>
        <button>Create Project</button>
      </Link>

      <Link to={`/talents`}>
        <button>List Talent</button>
      </Link>

      <Link to={`/projects`}>
        <button>List Project</button>
      </Link>

      <button
        onClick={() => {
          auth?.setToken(null);
        }}
      >
        Logout
      </button>

      <div>
        <Outlet />
      </div>
    </>
  );
};
