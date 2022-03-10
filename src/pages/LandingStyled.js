import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "../styles/LandingStyles.css";
import Tilty from "react-tilty";
import "../styles/tiltyStyles.css";
import "../styles/buttonStyles.css";

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
import bgImage from "assets/images/backgrounds/waves_1.png";
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
        id="pageContainer"
        minHeight="100vh"
        minWidth="100vw"
        // width="100%"
        sx={{
          padding: "5rem 14rem",
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
        {/* ******* CONTAINER 100% WIDTH */}

        <MKBox
          id="mainCard"
          // style={{
          //   "-webkit-border-radius": "50px",
          //   "border-radius": "50px",
          //   background: "#e9e9ea",
          //   "-webkit-box-shadow": "12px 12px 24px #d4d4d5, -12px -12px 24px",
          //   boxShadow: "12px 12px 24px #d4d4d5, -12px -12px 24px #fefeff",
          // }}
        >
          {/* ******* GRID CONTAINER */}
          <Grid id="mainGridContainer" container item xs={12} lg={8}>
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

            <Grid item xs={12} id="usersContainer">
              {/* ******* LEFT OWNER BOX */}
              <Tilty className="tilty" glare scale={1.05} maxGlare={0.5}>
                <Grid item xs={12} sm={6} id="leftUserGridContainer">
                  <MKBox id="userBlockL" className="inner">
                    <MKTypography
                      fontFamily="nunito"
                      className="userHeading"
                      variant="h1"
                      sx={{ fontSize: "2.2rem", pt: 0 }}
                    >
                      OWNER ?
                    </MKTypography>
                    {/* ***************** Owner Img Container */}
                    <MKBox>
                      <img
                        id="blobPic"
                        src={ownerBlob}
                        alt="Owner Illustration"
                      />
                    </MKBox>
                    <MKBox width="80%" alignText="center">
                      <MKTypography
                        variant="h6"
                        fontFamily="nunito"
                        lineHeight="1.2rem"
                        fontSize="1.2rem"
                        textAlign="center"
                        color="dark"
                        fontWeight="bold"
                        // textTransform="uppercase"
                        opacity={1}
                      >
                        Find a trusted local dog lover to take care of your dog
                        when you can't. They'll treat your dog like family.
                      </MKTypography>
                    </MKBox>
                  </MKBox>
                </Grid>
              </Tilty>
              {/* ******* RIGHT DL BOX */}
              <Tilty className="tilty" glare scale={1.05} maxGlare={0.5}>
                <Grid item xs={12} sm={6} p={3} id="rightUserGridContainer">
                  <MKBox id="userBlockR" className="inner">
                    <MKTypography
                      fontFamily="nunito"
                      className="userHeading"
                      variant="h1"
                      color="dark"
                      sx={{ fontSize: "2.2rem", pt: 0 }}
                    >
                      DOG-LOVER ?
                    </MKTypography>
                    {/* ***************** Owner Img Container */}
                    <MKBox>
                      <img id="blobPic" src={dlBlob} alt="Owner Illustration" />
                    </MKBox>
                    <MKBox width="80%" alignText="center">
                      <MKTypography
                        variant="h6"
                        fontFamily="nunito"
                        lineHeight="1.2rem"
                        fontSize="1.2rem"
                        textAlign="center"
                        fontWeight="bold"
                        // textTransform="uppercase"
                        opacity={1}
                      >
                        Fill the dog void in your life by spending time with one
                        and helping out Owners at the same time. It's a win-win!
                      </MKTypography>
                    </MKBox>
                  </MKBox>
                </Grid>
              </Tilty>
            </Grid>

            <Grid item xs={6} id="button-container">
              <button
                class="glow-on-hover"
                onClick={() => navigate("/register")}
                style={{ margin: "10px 25px", width: "150px", height: "50px" }}
              >
                sign up
              </button>
              <button
                class="glow-on-hover"
                onClick={() => navigate("/login")}
                style={{ margin: "10px 25px", width: "150px", height: "50px" }}
              >
                log in
              </button>
            </Grid>

            {/* ******* BOTTOM SOCIAL MEDIA BLOCK */}
            {/* <Grid item xs={12} p={1} mt={3} mb={-30}>
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
            </Grid> */}
          </Grid>
        </MKBox>
      </MKBox>
    </>
  );
};

export default LandingStyled;
