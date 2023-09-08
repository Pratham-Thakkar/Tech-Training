import React from "react";
import axios from "axios";

export const Form: React.FC = (): JSX.Element => {
  let data: Record<string, string> = {};
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    await axios
      .post("http://localhost:3001/project/addProject", data)
      .then((res) => {
        if (res.status === 200) alert("Project added");
        else throw Error("failed");
      })
      .catch((err) => {
        alert(`Error: ${err}`);
      });
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    data[e.target.id] = e.target.value;
  }
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)} method="post">
        <label htmlFor="projectName">Name:</label>
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          name="projectName"
          id="projectName"
        />{" "}
        <br />
        <label htmlFor="projectType">Project Type:</label>
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          name="projectType"
          id="projectType"
        />{" "}
        <br />
        <label htmlFor="union">Union:</label>
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          name="union"
          id="union"
        />{" "}
        <br />
        <label htmlFor="projectName">Created By: </label>
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          name="createdBy"
          id="createdBy"
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
