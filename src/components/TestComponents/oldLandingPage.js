import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Images
// import bgImage from "assets/images/backgrounds/patrick-hendry-jd0hS7Vhn_A-unsplash.jpeg";

import bgImage from "assets/landing-page/pink-bg1.png";
import ownerBlob from "assets/landing-page/ow-blob.png";
import dlBlob from "assets/landing-page/dl-blob.png";

const LandingStyled = () => {
  const navigate = useNavigate();

  /* ******* SOCIAL MEDIA ICON STYLING */

  const smIconsStyle = {
    transform: "scale(1.2)",
    margin: "0.5rem",
    // [horizontal offset] [vertical offset] [blur radius] [optional spread radius] [color];
    filter: "drop-shadow(-1px 2px 3px  rgba(255, 61, 71, 0.6))",
  };

  return (
    <>
      {/* ******* MAIN CONTAINER WITH BG IMG */}
      <MKBox
        minHeight="100vh"
        height="auto"
        width="100%"
        sx={{
          backgroundImage: ({
            functions: { linearGradient, rgba },
            palette: { gradients },
          }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.05),
              rgba(gradients.dark.state, 0.1)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        {/* ******* CONTAINER 100% WIDTH */}
        <Container
          minWidth="100%"
          minHeight="100%"
          // style={{ marginTop: "-100px" }}
        >
          {/* ******* GRID CONTAINER */}
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            sx={{
              mx: "auto",
              textalign: "center",
              // top: "-50",
              minWidth: "40vw",
              height: "50%",
            }}
            // border="3px solid red"
          >
            {/* ******* HEADING */}
            <Grid
              item
              xs={12}
              p={1}
              mb={3}
              // border="3px solid red"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MKBox>
                <MKTypography
                  variant="h1"
                  color="dark"
                  style={{ paddingBottom: "2rem" }}
                  sx={({ breakpoints, typography: { size } }) => ({
                    [breakpoints.down("md")]: {
                      fontSize: size["3xl"],
                    },
                  })}
                >
                  Welcome to App Name
                </MKTypography>
              </MKBox>
              {/* ******* MAIN INFO TEXT */}
              <MKBox maxWidth="400px">
                <MKTypography
                  variant="body1"
                  color="dark"
                  fontWeight="bold"
                  opacity={0.8}
                  style={{ paddingBottom: "1rem", lineHeight: "1.4rem" }}
                >
                  Connecting dog owners with local dog borrowers for walks,
                  weekends and holidays.
                </MKTypography>
              </MKBox>
            </Grid>
            {/* ******* LEFT OWNER BOX */}
            <Grid item xs={12} sm={6} p={3}>
              <MKBox
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  mb: "3rem",
                }}
              >
                <MKTypography
                  variant="h1"
                  color="dark"
                  sx={{ fontSize: "2rem" }}
                >
                  OWNER ?
                </MKTypography>
                {/* ***************** Owner Img Container */}
                <MKBox>
                  <img
                    src={ownerBlob}
                    alt="Owner Illistration"
                    height="40%"
                    width="40%"
                  />
                </MKBox>
                <MKBox width="80%" alignText="center">
                  <MKTypography
                    variant="h6"
                    lineHeight="1.2rem"
                    color="dark"
                    fontWeight="bold"
                    // textTransform="uppercase"
                    opacity={1}
                  >
                    Find a trusted local dog lover to take care of your dog when
                    you can't. They'll treat your dog like family.
                  </MKTypography>
                </MKBox>
              </MKBox>
            </Grid>
            {/* ******* RIGHT DL BOX */}
            <Grid item xs={12} sm={6} p={3}>
              <MKBox
                sx={{
                  mb: "3rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <MKTypography
                  variant="h1"
                  color="dark"
                  sx={{ fontSize: "2rem" }}
                >
                  DOG-LOVER ?
                </MKTypography>
                {/* ***************** Owner Img Container */}
                <MKBox>
                  <img
                    src={dlBlob}
                    alt="Owner Illistration"
                    height="40%"
                    width="40%"
                  />
                </MKBox>
                <MKBox width="80%" alignText="center">
                  <MKTypography
                    variant="h6"
                    lineHeight="1.2rem"
                    color="dark"
                    fontWeight="bold"
                    // textTransform="uppercase"
                    opacity={1}
                  >
                    Fill the dog void in your life by spending time with one and
                    helping out Owners at the same time. It's a win-win!
                  </MKTypography>
                </MKBox>
              </MKBox>
            </Grid>
            <Grid item xs={6}>
              {" "}
              <MKButton
                size="large"
                onClick={() => navigate("/register")}
                style={{ margin: "10px" }}
                variant="gradient"
                color="info"
                sx={{
                  width: "130px",
                  height: "40px",
                  color: ({ palette: { light } }) => light.main,
                }}
              >
                sign up
              </MKButton>
              <MKButton
                size="large"
                onClick={() => navigate("/login")}
                style={{ margin: "10px" }}
                variant="gradient"
                color="info"
                sx={{
                  width: "130px",
                  height: "40px",
                  color: ({ palette: { light } }) => light.main,
                }}
              >
                log in
              </MKButton>
            </Grid>

            {/* ******* BOTTOM SOCIAL MEDIA BLOCK */}
            <Grid item xs={12} p={1} mt={3} mb={-30}>
              <MKTypography variant="h6" color="white" mt={5} mb={1}>
                Find us on
              </MKTypography>
              <MKBox display="flex" justifyContent="center" alignItems="center">
                <MKTypography
                  component="a"
                  variant="body1"
                  color="white"
                  href="#"
                  mx={1}
                >
                  <i className="fab fa-facebook" style={smIconsStyle} />
                </MKTypography>
                <MKTypography
                  component="a"
                  variant="body1"
                  color="white"
                  href="#"
                  mx={1}
                >
                  <i className="fab fa-instagram" style={smIconsStyle} />
                </MKTypography>
                <MKTypography
                  component="a"
                  variant="body1"
                  color="white"
                  href="#"
                  mx={1}
                >
                  <i className="fab fa-twitter" style={smIconsStyle} />
                </MKTypography>
                <MKTypography
                  component="a"
                  variant="body1"
                  color="white"
                  href="#"
                >
                  <i className="fab fa-google-plus" style={smIconsStyle} />
                </MKTypography>
              </MKBox>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
    </>
  );
};

export default LandingStyled;

// import React from 'react';
// import { useNavigate } from 'react-router';

// const Landing = () => {
//     const navigate = useNavigate();
//     return (
//         <>
//             <div>
//                 <h1> Welcome to PawPal</h1>
//                 <div>
//                     <button onClick={() => navigate('/register')}>Register</button>
//                     <button onClick={() => navigate('/login')}>Login</button>
//                 </div>
//             </div>

//         </>
//     )
// }

// export default Landing;
