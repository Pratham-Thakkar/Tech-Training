import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { AppThunk, RootState } from "../store";

interface AuthState {
  token: string | null;
}

const initialState: AuthState = {
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      console.log(state);
      state.token = action.payload;
      if (state.token) sessionStorage.setItem("token", state.token);
    },
  },
});

export const { login } = authSlice.actions;

export const selectToken = (state: RootState) => state.auth.token;

export const authThunk = (email: string, password: string): AppThunk => {
  return async (dispatch) => {
    try {
      const res = await axios.post("http://localhost:3001/signin", {
        email,
        password,
      });
      console.log(res);

      const token = await res.data.token;
      console.log(token);
      dispatch(login(token));
    } catch (err) {
      console.log(err);
    }
  };
};

export default authSlice.reducer;
