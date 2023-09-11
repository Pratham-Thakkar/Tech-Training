import { Outlet, Link } from "react-router-dom";

export const Home = () => {
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
      <div>
        <Outlet />
      </div>
    </>
  );
};
