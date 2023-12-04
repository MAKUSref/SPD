import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";

export type JWT = string;

export interface SessionState {
  token?: JWT;
  username?: string;
  picture?: string;
}

const initialState: SessionState = {};

const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<JWT>) {
      state.token = action.payload;

      const { name, picture } = jwt_decode(action.payload) as {
        name: string;
        picture: string;
      };

      state.username = name;
      state.picture = picture;
    },
    logOut(state) {
      state.token = undefined;
      state.username = undefined;
      state.picture = undefined;
    },
  },
});

export default sessionSlice.reducer;

export const { setToken, logOut } = sessionSlice.actions;
