import React, { useState } from "react";
import { authThunk } from "../features/AuthSlice";
import { useAppDispatch } from "../hooks";

export const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  return (
    <>
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
      <button
        onClick={() => {
          dispatch(authThunk(email, password));
        }}
      >
        submit
      </button>
    </>
  );
};
