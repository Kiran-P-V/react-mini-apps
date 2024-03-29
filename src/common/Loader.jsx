// material-ui
import React from "react";
import { LinearProgress } from "@mui/material";
import styled from "styled-components";

// styles
const LoaderWrapper = styled("div")({
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 1301,
  width: "100%",
});

// ==============================|| LOADER ||============================== //
const Loader = () => (
  <LoaderWrapper>
    <LinearProgress color="primary" />
  </LoaderWrapper>
);

export default Loader;

