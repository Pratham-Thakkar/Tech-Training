import { Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";
import "./Home.css";

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
            <a href="/createTalent">Create Talent</a>
          </li>
          <li className="nav-item">
            <a href="/createProject">Create Project</a>
          </li>
          <li className="nav-item">
            <a href="/talents">List Talent</a>
          </li>
          <li className="nav-item">
            <a href="/projects">List Project</a>
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
