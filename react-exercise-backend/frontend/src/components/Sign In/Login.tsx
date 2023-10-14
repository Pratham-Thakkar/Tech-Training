import axios, { AxiosError } from "axios";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { NavBar } from "../NavBar/NavBar";
import { useNavigate } from "react-router";

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const auth = useAuth();
  const data = useMemo(() => {
    return {
      email,
      password,
    };
  }, [email, password]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();
      const res = await axios.post("http://localhost:3001/signin", data);

      if (res.status === 200) {
        setIsLogin(true);
        auth?.setToken(res.data.token);
        setEmail("");
        setPassword("");
      }
    } catch (err) {
      if (err instanceof AxiosError) alert(err.response?.data.message);
    }
  }

  useEffect(() => {
    if (isLogin) navigate("/list-blog");
  }, [isLogin, navigate]);
  return (
    <>
      <NavBar>
        <li onClick={() => navigate("/")}>Register</li>
      </NavBar>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label htmlFor="Email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="Password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit" id="login-btn">
          Submit
        </button>
      </form>
    </>
  );
};
