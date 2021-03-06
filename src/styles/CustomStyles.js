import { css } from "@emotion/react";

export const glassStyle = {
  background: "rgba( 255, 255, 255, 0.85)",
  boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
  backdropFilter: "blur( 12.5px )",
  // background: "rgba( 255, 255, 255, 0.6 )",
  // boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
  // backdropFilter: "blur( 4px )",
  borderRadius: "10px",
  border: "1px solid rgba( 255, 255, 255, 0.18 )",
  width: "95%",
  height: "auto",
  marginBottom: "0.5rem",
  padding: "1rem 1rem",
};

export const neumorphic = {
  flexBasis: 1,
  padding: { xs: "0 1rem", sm: "0 1rem", md: "0 0.5rem", lg: "0 0.25rem" },
  minWidth: "100%",
  height: "7rem",
  marginTop: "1.5rem",
  background: "#f4efee",
  boxShadow: "14.11px 14.11px 24px #dedad9, -14.11px -14.11px 24px #FFFFFF",
  // border: "3px solid orange",
};

export const neumorphicDL = {
  flexBasis: 1,
  padding: { xxxxs: "0 1rem", md: "0 0.5rem", lg: "0 0.25rem" },
  margin: " 1.5rem 1rem 0 1rem",
  minWidth: "100%",
  height: "5rem",
  background: "#f4efee",
  boxShadow: "14.11px 14.11px 24px #dedad9, -14.11px -14.11px 24px #FFFFFF",
  display: "flex",
  border: "2px solid pink",
  justifyContent: "center",
};

export const neumorphicHidden = {
  // opacity: 0,
  flexBasis: 1,
  padding: { xs: "0 1rem", sm: "0 1rem", md: "0 0.5rem", lg: "0 0.25rem" },
  minWidth: "100%",
  height: "5rem",
  marginTop: "1.5rem",
  marginBottom: "-1.5rem",
  background: "transparent",
  // boxShadow: "14.11px 14.11px 24px #dedad9, -14.11px -14.11px 24px #FFFFFF",
  display: "flex",
  justifyContent: "flex-start",
  boxShadow: "none !important",
};

//for spinner
export const override = css`
  display: flex;
  margin: 0 auto;
  /* border: 5px solid red; */
  justify-content: center;
  align-items: center;
  width: 350px;
`;

export const spinnerContainer = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // border: "5px solid red",
};
