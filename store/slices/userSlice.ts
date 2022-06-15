import { UserData } from "@/models/user.model";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { access } from "fs";
import { RootState } from "../store";

interface UserState {
  username: string;
  accessToken: string;
  error?: string;
  isAuthenticated: boolean;
  isAuthenticating: boolean;
  user?: UserData;
}

const initialState: UserState = {
  username: "12341234",
  accessToken: "",
  isAuthenticated: false,
  isAuthenticating: true,
  user: undefined,
};

interface SignAction {
  username: string;
  password: string;
}

export const signin = createAsyncThunk(
  "user/signin",
  async (credentail: SignAction) => {
    if (credentail.username === "admin") {
      return { token: "ok", credentail };
    } else {
      throw Error();
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: (buidler) => {
    buidler.addCase(signin.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.isAuthenticating = false;
      state.accessToken = action.payload.token;
      state.username = action.payload.credentail.username;
    });

    buidler.addCase(signin.rejected, (state, action) => {
      state.isAuthenticated = false;
      state.isAuthenticating = false;
      state.username = "unknown";
    });
  },
});

export const userSelector = (store: RootState) => store.user;
export default userSlice.reducer;
