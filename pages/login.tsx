import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Layout from "@/components/Layouts/Layout";
import { Formik, Form, Field, FormikProps } from "formik";
import { useSelector } from "react-redux";
import { userSelector } from "@/store/slices/userSlice";

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const userReducer = useSelector(userSelector);

  return (
    <Layout>
      <span>{userReducer.username}</span>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values) => {
          alert(JSON.stringify(values));
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <input
              id="username"
              value={values.username}
              onChange={handleChange}
              placeholder="Username"
              type="text"
            />
            <br />
            <input
              id="password"
              value={values.password}
              onChange={handleChange}
              placeholder="Password"
              type="text"
            />{" "}
            <br />
            <button type="submit">Login</button>
          </form>
        )}
      </Formik>
    </Layout>
  );
}
