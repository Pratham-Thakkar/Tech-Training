import { Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";
import "./Home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  const auth = useAuth();
  const theme = useTheme();

  return (
    <>
      <div className="navbar">
        <img
          className="nav-logo"
          src="https://cdn.castingnetworks.com/images/logos/cn-horizontal.svg"
          alt=""
        />

        <ul className="nav-list">
          <li className="nav-item">
            <Link to={"createTalent"}>Create Talent</Link>
          </li>
          <li className="nav-item">
            <Link to={"createProject"}>Create Project</Link>
          </li>
          <li className="nav-item">
            <Link to={"/talents"}>List Talents</Link>
          </li>
          <li className="nav-item">
            <Link to={"/projects"}>List Project</Link>
          </li>
          <li className="nav-item">
            <button
              onClick={() => {
                auth?.setToken(null);
              }}
            >
              Logout
            </button>
          </li>
          <li className="nav-item">
            <button
              onClick={() => {
                theme?.setIsDark(!theme.isDark);
              }}
            >
              Change Theme
            </button>
          </li>
        </ul>
      </div>

      <div>
        <Outlet />
      </div>
    </>
  );
};
