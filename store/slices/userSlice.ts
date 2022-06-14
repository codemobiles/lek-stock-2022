import { UserData } from "@/models/user.model";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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

export const signin = createAsyncThunk("user/signin", async () => {});

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: (buidler) => {
    buidler.addCase(signin.fulfilled, (state, action) => {});
  },
});

export const userSelector = (store: RootState) => store.user;
export default userSlice.reducer;
