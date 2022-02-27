import ResponsiveAppBar from "./HeaderBuild";
import Body from "../../components/Custom/CustomContainers";
import * as React from "react";
import CenteredFooter from "../../components/Layout/CenteredFooter";
import DogInfoForm from "components/Forms/DogInfoForm";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const LayoutTest = () => {
  return (
    <div>
      <ResponsiveAppBar />

      <Body></Body>

      <CenteredFooter />
    </div>
  );
};

export default LayoutTest;
