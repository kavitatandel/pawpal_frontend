import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
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
          // border: " 2px solid red",
          height: "auto",
          width: "100%",
        }}
      >
        {/* <Box sx={{ height: "auto" }}>{props.children}</Box> */}
        <MKBox
          height="auto"
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
      </div>
    </>
  );
}
