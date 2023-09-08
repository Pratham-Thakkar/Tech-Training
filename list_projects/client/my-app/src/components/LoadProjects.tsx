import React, { useEffect, useMemo, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { log } from "console";

export const LoadProjects: React.FC = (): JSX.Element => {
  const [projectList, setProjectList]: [Array<any>, Function] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [limit, setLimit]: [number | null, Function] = useState(5);
  const [offSet, setOffSet]: [number | null, Function] = useState(null);

  function handleSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    setOffSet(parseInt(e.target.value));
  }

  function handleClick() {
    setOffSet(limit! + offSet!);
    setButtonClicked(!buttonClicked);
  }
  useEffect(() => {
    async function fetchData() {
      await axios
        .get(`http://localhost:3001/project/listProject/${offSet}&${limit}`)
        .then((res) => {
          const newProjectList = projectList;
          setProjectList([...newProjectList, ...res.data]);
        });
    }
    fetchData();
  }, [buttonClicked]);

  return (
    <>
      offset
      <select onChange={(e) => handleSelect(e)} name="offset" id="offset">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>
      <button onClick={handleClick}>List Project</button>
      {projectList.map((project: any) => {
        return <h1>{project.projectName}</h1>;
      })}
    </>
  );
};
