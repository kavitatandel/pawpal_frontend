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
};

export const neumorphicDL = {
  flexBasis: 1,
  padding: { xs: "0 1rem", sm: "0 1rem", md: "0 0.5rem", lg: "0 0.25rem" },
  minWidth: "100%",
  height: "5rem",
  marginTop: "1.5rem",
  background: "#f4efee",
  boxShadow: "14.11px 14.11px 24px #dedad9, -14.11px -14.11px 24px #FFFFFF",
  display: "flex",
  // alignItems: "center",
  justifyContent: "center",
};

export const neumorphicHidden = {
  // opacity: 0,
  flexBasis: 1,
  padding: { xs: "0 1rem", sm: "0 1rem", md: "0 0.5rem", lg: "0 0.25rem" },
  minWidth: "100%",
  height: "5rem",
  marginTop: "1.5rem",
  background: "transparent",
  // boxShadow: "14.11px 14.11px 24px #dedad9, -14.11px -14.11px 24px #FFFFFF",
  display: "flex",
  // alignItems: "center",
  justifyContent: "center",
  boxShadow: "none !important",
};

//for spinner
export const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  justify-content: center;
  align-items: center;
`;
