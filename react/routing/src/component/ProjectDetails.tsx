import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type details = Record<string, string>;
export const ProjectDetails = () => {
  const [projectDetail, setProjectDetail] = useState(Array<details>);
  const params = useParams();
  useEffect(() => {
    console.log("http://localhost:3003/listSpecificProject/");
    async function fetchSpecificProject() {
      const res = await axios.get(
        `http://localhost:3003/listSpecificProject/${params.projectId}`
      );

      setProjectDetail(res.data.projectDetails);
    }
    fetchSpecificProject();
  }, [params.projectId]);
  return (
    <>
      {projectDetail.map((project) => {
        return (
          <div key={project.project_id} className="card">
            <div className="card-title">Project Detail</div>
            <div className="card-field">Project Name:</div>
            <div className="card-description">{project.project_name}</div>
            <div className="card-field">Genre:</div>
            <div className="card-description">{project.genre}</div>
            <div className="card-field">Description:</div>
            <div className="card-description">{project.project_desc}</div>
            <div className="card-field">Created By:</div>
            <div className="card-description">{project.created_by}</div>
            <div className="card-field">Created At:</div>
            <div className="card-description">{project.created_at}</div>
          </div>
        );
      })}
    </>
  );
};
