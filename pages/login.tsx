import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Layout from "@/components/Layouts/Layout";

export default function PersistentDrawerLeft() {
  const theme = useTheme();

  return (
    <Layout>
      <Typography></Typography>
    </Layout>
  );
}
