import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type details = Record<string, string>;
export const TalentDetails = () => {
  const [talentDetail, setTalentDetail] = useState(Array<details>);
  const param = useParams();

  useEffect(() => {
    async function fetchTalentDetails() {
      const res = await axios.get(
        `http://localhost:3003/listSpecificTalent/${param.talentId}`
      );

      setTalentDetail(res.data.talentDetails);
    }
    fetchTalentDetails();
  }, [param.talentId]);
  return (
    <>
      {talentDetail.map((talent) => {
        return (
          <div key={talent.talent_id} className="card">
            <div className="card-title">Talent Detail</div>
            <div className="card-field">Talent Name:</div>
            <div className="card-description">
              {talent.first_name} {talent.last_name}
            </div>
            <div className="card-field">Gender:</div>
            <div className="card-description">{talent.gender}</div>
            <div className="card-field">Email:</div>
            <div className="card-description">{talent.email}</div>
            <div className="card-field">Is Active:</div>
            <div className="card-description">
              {talent.is_active ? "true" : "false"}
            </div>
            <div className="card-field">Created At:</div>
            <div className="card-description">{talent.created_at}</div>
          </div>
        );
      })}
    </>
  );
};
