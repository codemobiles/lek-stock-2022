import { UserData } from "@/models/user.model";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface UserState {
  username: string;
  accessToken: string;
  error?: string;
  isAuthenticated: boolean;
  isAuthenticating: boolean;
  user?: UserData;
}

const initialState: UserState = {
  username: "",
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

export default userSlice.reducer;
