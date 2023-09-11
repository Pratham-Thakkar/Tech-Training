import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

type details = Record<string, string>;
export const ListProject = () => {
  const [projects, setProjects] = useState(Array<details>);
  const [limit, setLimit] = useState(5);
  const [offset, setOffset] = useState(0);
  const [query, setQuery] = useState("");
  const [selectedValue, setSelectedValue] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProjects() {
      const res = await axios.get("http://localhost:3003/listProject", {
        params: {
          limit,
          offset,
          q: query,
          selectedValue,
        },
      });
      setProjects([...projects, ...res.data.projects]);
    }
    fetchProjects();
  }, [limit, offset, query, selectedValue]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setLimit(5);
    setOffset(0);
    setProjects([]);
    setQuery(e.target.value);
  }

  function handleSelectedValue(e: ChangeEvent<HTMLSelectElement>) {
    setLimit(5);
    setOffset(0);
    setProjects([]);
    setSelectedValue(e.target.value);
  }

  return (
    <>
      <input
        type="text"
        placeholder="Enter a text to be searched"
        onChange={(e) => handleChange(e)}
      />

      <label htmlFor="sort">Sort by:</label>
      <select value={selectedValue} onChange={(e) => handleSelectedValue(e)}>
        Sort By
        <option value={""}></option>
        <option value={"created_at"}>Date</option>
        <option value={"project_name"}>Name</option>
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
          setLimit(5);
        }}
      >
        Load More
      </button>
    </>
  );
};
