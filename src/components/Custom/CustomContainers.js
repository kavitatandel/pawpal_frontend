import * as React from "react";
import CenteredFooter from "../Layout/CenteredFooter";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import MKBox from "components/MKBox";
import bgImage from "../../assets/images/backgrounds/waves_1.png";

export default function Body(props) {
  return (
    <>
      {/* <CssBaseline /> */}
      <div
        style={{
          margin: "0 auto",
          padding: 0,
          top: 0,
          left: 0,

          // border: " 10px solid red",
          maxHeight: "100%",
          minHeight: "100vh",
          width: "100%",
          minWidth: "350px",
        }}
      >
        {/* <Box sx={{ height: "auto" }}>{props.children}</Box> */}
        <MKBox
          minHeight="90vh"
          // style={{ border: " 2px solid blue" }}
          sx={{
            backgroundImage: ({
              functions: { linearGradient, rgba },
              palette: { gradients },
            }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0),
                rgba(gradients.dark.state, 0)
              )}, url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
          }}
        >
          {props.children}
        </MKBox>
        <CenteredFooter minHeight="10vh" />
      </div>
    </>
  );
}
