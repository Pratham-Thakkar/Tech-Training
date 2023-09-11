import axios, { AxiosResponse } from "axios";
import { FormEvent, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

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
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="projectName">Project Name</label>
        <input
          type="text"
          name="projectName"
          id="projectName"
          value={projectName}
          onChange={(e) => {
            setProjectName(e.target.value);
          }}
        />

        <label htmlFor="projectDesc">Project Description</label>
        <input
          type="text"
          name="projectDesc"
          id="projectDesc"
          value={projectDesc}
          onChange={(e) => {
            setProjectDesc(e.target.value);
          }}
        />

        <label htmlFor="createdBy">Created By</label>
        <input
          type="text"
          name="createdBy"
          id="createdBy"
          value={createdBy}
          onChange={(e) => {
            setCreatedBy(e.target.value);
          }}
        />

        <label htmlFor="genre">Genre</label>
        <input
          type="text"
          name="genre"
          id="genre"
          value={genre}
          onChange={(e) => {
            setGenre(e.target.value);
          }}
        />
        <button type="submit">Update Project</button>
      </form>
    </>
  );
};
