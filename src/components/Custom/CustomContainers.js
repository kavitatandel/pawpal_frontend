import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

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
        <Box sx={{ height: "auto" }}>{props.children}</Box>
      </div>
    </>
  );
}
