import axios, { AxiosError } from "axios";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";

export const SignUp = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const data = useMemo(() => {
    return {
      firstName,
      lastName,
      email,
      password,
    };
  }, [email, firstName, password, lastName]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();
      const res = await axios.post("http://localhost:3001/signup", data);
      if (res.status === 200) setIsRegistered((isRegistered) => !isRegistered);
    } catch (err) {
      if (err instanceof AxiosError) alert(err.response?.data.message);
    }
  }

  useEffect(() => {
    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword("");
    if (isRegistered) navigate("/login");
  }, [isRegistered, navigate]);
  return (
    <>
      <NavBar>
        <li onClick={() => navigate("/login")}>Login</li>
        <li onClick={() => navigate("/")}>Register</li>
      </NavBar>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </>
  );
};
