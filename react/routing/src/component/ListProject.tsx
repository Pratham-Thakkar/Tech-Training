import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

type details = Record<string, string>;
export const ListProject = () => {
  const [projects, setProjects] = useState(Array<details>);
  const [limit, setLimit] = useState(5);
  const [offset, setOffset] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [searchButtonClicked, setSearchButtonClicked] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    async function fetchProjects() {
      const res = await axios.get("http://localhost:3003/listProject", {
        params: {
          limit,
          offset,
          searchText,
        },
      });
      setProjects((projects) => [...projects, ...res.data.projects]);
      setSearchText("");
    }
    fetchProjects();
  }, [limit, offset, searchButtonClicked]);

  return (
    <>
      <input
        type="text"
        placeholder="Enter a text to be searched"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <button
        type="submit"
        onClick={() => {
          setProjects([]);
          setSearchButtonClicked((searchButtonClicked) => !searchButtonClicked);
        }}
      >
        search
      </button>

      <label htmlFor="sort">Sort by:</label>
      <select>
        Sort By
        <option value="createdAt">Date </option>
        <option value="projectName">Name</option>
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
