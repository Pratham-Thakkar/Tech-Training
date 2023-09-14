import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ListProject.css";
import { useTheme } from "../../context/ThemeContext";

type details = Record<string, string>;

export const ListProject = () => {
  const theme = useTheme();
  const [projects, setProjects] = useState(Array<details>);
  const [limit, setLimit] = useState(5);
  const [offset, setOffset] = useState(0);
  const [query, setQuery] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [filterBy, setFilterBy] = useState("");

  const navigate = useNavigate();

  async function fetchProjects() {
    const res = await axios.get("http://localhost:3003/listProject", {
      params: {
        limit,
        offset,
        q: query,
        selectedValue,
        filterBy,
      },
    });
    setProjects([...projects, ...res.data.projects]);
  }
  useEffect(() => {
    fetchProjects();
  }, [limit, offset, query, selectedValue, filterBy]);

  function handleChange() {
    setLimit(5);
    setOffset(0);
    setProjects([]);
  }

  return (
    <div className="project-list">
      <input
        className="search-bar"
        type="text"
        placeholder="Enter a text to be searched"
        onChange={(e) => {
          handleChange();
          setQuery(e.target.value);
        }}
      />

      <label htmlFor="sort">Sort by:</label>
      <select
        className="sort-value"
        value={selectedValue}
        onChange={(e) => {
          handleChange();
          setSelectedValue(e.target.value);
        }}
      >
        <option value={""}></option>
        <option value={"created_at"}>Date</option>
        <option value={"project_name"}>Name</option>
      </select>

      <label htmlFor="filter">Filter by:</label>
      <select
        className="filter"
        value={filterBy}
        onChange={(e) => {
          handleChange();
          setFilterBy(e.target.value);
        }}
      >
        Filter By
        <option value={""}></option>
        <option value={"Action"}>Action</option>
        <option value={"Comedy"}>Comedy</option>
        <option value={"Science Fiction"}>Science Fiction</option>
      </select>

      <div className="project-container">
        {projects.map((project) => {
          return (
            <div key={project.project_id} className="card">
              <div className="card-title">{project.project_name}</div>
              <div className="card-description">{project.project_desc}</div>
              <div className="button-container">
                <button
                  className="edit-button"
                  onClick={() => {
                    navigate(`/projects/${project.project_id}/edit`, {
                      state: {
                        projectName: project.project_name,
                        projectDesc: project.project_desc,
                        genre: project.project_desc,
                        createdBy: project.created_by,
                      },
                    });
                  }}
                >
                  Edit
                </button>

                <Link to={`/projects/${project.project_id}`}>
                  <button className="show-details-button">Show Details</button>
                </Link>
                <Link to={`/projects/${project.project_id}/delete`}>
                  <button className="delete-button">Delete</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <button
        onClick={() => {
          setOffset(offset + 5);
        }}
      >
        Load More
      </button>
    </div>
  );
};
