import axios, { AxiosResponse } from "axios";
import { FormEvent, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import "../CreateTalent/CreateTalent.css";

export const EditTalnet = () => {
  const location = useLocation();
  const data = location.state;
  const params = useParams();
  const [firstName, setFirstName] = useState(data.firstName);
  const [lastName, setLastName] = useState(data.lastName);
  const [email, setEmail] = useState(data.email);
  const [gender, setGender] = useState(data.gender);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      gender: gender,
    };
    setFirstName("");
    setLastName("");
    setEmail("");
    setGender("");

    try {
      const res: AxiosResponse = await axios.put(
        `http://localhost:3003/updateTalent/${params.talentId}`,
        data
      );
      if (res.status === 200) alert("Talent Updated sucessfully");
      else throw Error(res.data.data.message);
    } catch (err) {
      if (err instanceof Error) alert(err.message);
    }
  }
  return (
    <>
      <form className="talent-form" onSubmit={(e) => handleSubmit(e)}>
        <label className="first-name" htmlFor="firstName">
          First Name:
        </label>
        <input
          className="first-name-input"
          type="text"
          name="firstName"
          id="firstName"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <label className="last-name" htmlFor="lastName">
          Last Name:
        </label>
        <input
          className="last-name-input"
          type="text"
          name="lastName"
          id="lastName"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <label className="email" htmlFor="email">
          Email:
        </label>
        <input
          className="email-input"
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label className="gender" htmlFor="Gender">
          Gender:
        </label>
        <input
          className="gender-input"
          type="radio"
          name="gender"
          value="male"
          checked={gender === "male"}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        />
        Male
        <input
          className="gender-input"
          type="radio"
          name="gender"
          value="female"
          checked={gender === "female"}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        />
        Female
        <button className="submit-button" type="submit">
          Update Talent
        </button>
      </form>
    </>
  );
};
