import axios, { AxiosResponse } from "axios";
import { FormEvent, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import "../CreateProject/CreateProject.css";

export const EditProject = () => {
  const location = useLocation();
  const params = useParams();
  const data = location.state;

  const [projectName, setProjectName] = useState(data.projectName);
  const [projectDesc, setProjectDesc] = useState(data.projectDesc);
  const [createdBy, setCreatedBy] = useState(data.createdBy);
  const [genre, setGenre] = useState(data.genre);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = {
      projectName: projectName,
      projectDesc: projectDesc,
      genre: genre,
      createdBy: createdBy,
    };

    try {
      const res: AxiosResponse = await axios.put(
        `http://localhost:3003/updateProject/${params.projectId}`,
        data
      );
      console.log(res);

      if (res.status === 200) alert("Project Updated sucessfully");
      else throw Error(res.statusText);
    } catch (err) {
      if (err instanceof Error) alert(err.message);
    }
  }
  return (
    <>
      <form className="project-form" onSubmit={(e) => handleSubmit(e)}>
        <label className="project-name" htmlFor="projectName">
          Project Name
        </label>
        <input
          className="project-name-input"
          type="text"
          name="projectName"
          id="projectName"
          value={projectName}
          onChange={(e) => {
            setProjectName(e.target.value);
          }}
        />

        <label className="project-desc" htmlFor="projectDesc">
          Project Description
        </label>
        <input
          className="project-desc-input"
          type="text"
          name="projectDesc"
          id="projectDesc"
          value={projectDesc}
          onChange={(e) => {
            setProjectDesc(e.target.value);
          }}
        />

        <label className="created-by" htmlFor="createdBy">
          Created By
        </label>
        <input
          className="created-by-input"
          type="text"
          name="createdBy"
          id="createdBy"
          value={createdBy}
          onChange={(e) => {
            setCreatedBy(e.target.value);
          }}
        />

        <label className="genre" htmlFor="genre">
          Genre
        </label>
        <input
          className="genre-input"
          type="text"
          name="genre"
          id="genre"
          value={genre}
          onChange={(e) => {
            setGenre(e.target.value);
          }}
        />
        <button className="submit-button" type="submit">
          Update Project
        </button>
      </form>
    </>
  );
};
