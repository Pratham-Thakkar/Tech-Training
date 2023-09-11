import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

type detail = Record<string, string>;

export const ListTalent = () => {
  const [talents, setTalents] = useState(Array<detail>);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("http://localhost:3003/listTalent");
      setTalents(res.data.allUsers);
    }
    fetchData();
  });
  return (
    <>
      <div>
        {talents.map((talent) => {
          return (
            <div key={talent.talent_id} className="card">
              <div className="card-title">
                {talent.first_name} {talent.last_name}
              </div>
              <div className="card-description">{talent.email}</div>
              <div className="button-container">
                <button
                  className="edit-button"
                  onClick={() => {
                    navigate(`/talents/${talent.talent_id}/edit`, {
                      state: {
                        firstName: talent.first_name,
                        lastName: talent.last_name,
                        gender: talent.gender,
                        email: talent.email,
                      },
                    });
                  }}
                >
                  Edit
                </button>

                <Link to={`/talents/${talent.talent_id}`}>
                  <button className="show-details-button">Show Details</button>
                </Link>
                <Link to={`/talents/${talent.talent_id}/delete`}>
                  <button className="delete-button">Delete</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
