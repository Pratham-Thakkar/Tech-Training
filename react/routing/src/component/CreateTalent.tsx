import axios, { AxiosResponse } from "axios";
import { FormEvent, useState } from "react";

export const CreateTalent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      gender: gender,
    };
    setFirstName("");
    setLastName("");
    setEmail("");
    setGender("");

    try {
      const res: AxiosResponse = await axios.post(
        "http://localhost:3003/addTalent",
        data
      );
      if (res.status === 200) alert("Talent added sucessfully");
      else throw Error(res.data.data.message);
    } catch (err) {
      if (err instanceof Error) alert(err.message);
    }
  }
  return (
    <>
      <form className="talent-form" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label htmlFor="Gender">gender:</label>
        <input
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
          type="radio"
          name="gender"
          value="female"
          checked={gender === "female"}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        />
        Female
        <button type="submit">Create Talent</button>
      </form>
    </>
  );
};
