import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import userReducer from "@/store/slices/userSlice";

const reducer = {
  user: userReducer,
};

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV === "development",
});
