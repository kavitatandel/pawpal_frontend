import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "../styles/LandingStyles.css";
import Tilty from "react-tilty";
import "../styles/tiltyStyles.css";
import "../styles/buttonStyles.css";
import LogoImg from "../assets/logos/logo_paw_light.png";
import MKAvatar from "../components/MKAvatar";

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
        maxHeight="100vh"
        minHeight="100vh"
        maxWidth="100vw"
        // border="3px solid red"
        // style={{ marginTop: "2rem" }}
        sx={{
          padding: "1rem 12rem",
          // backgroundImage: ({
          //   functions: { linearGradient, rgba },
          //   palette: { gradients },
          // }) =>
          //   `${linearGradient(
          //     rgba(gradients.dark.main, 0),
          //     rgba(gradients.dark.state, 0)
          //   )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        {/* ******* CONTAINER 100% WIDTH */}

        <MKBox id="mainCard">
          {/* ******* GRID CONTAINER */}
          <Grid id="mainGridContainer" container item xs={12} lg={8}>
            {/* ******* HEADING */}
            <Grid
              item
              xs={12}
              p={1}
              mb={4}
              // border="3px solid red"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* ******* MAIN INFO TEXT */}
              <MKBox
                maxWidth="600px"
                height="200px"
                style={{
                  marginTop: "-3rem",

                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "column",
                  // border: "3px solid blue",
                }}
              >
                <img
                  id="logoImg"
                  top={-50}
                  zindex={2}
                  src={LogoImg}
                  s
                  alt="logoPic"
                  style={{
                    maxWidth: "10rem",
                    maxHeight: "10rem",
                    background: "transparent",
                    marginTop: "0",
                    marginBottom: "-1rem",
                  }}
                />
                <MKBox mt={1}>
                  <MKTypography
                    variant="h3"
                    color="info"
                    fontWeight="bold"
                    opacity={1}
                    style={{
                      // padding: "1rem",
                      lineHeight: "1.5rem",
                      textAlign: "center",
                      fontSize: "1.2rem",
                      paddingBottom: "2rem",
                    }}
                  >
                    Connecting dog owners with local dog borrowers for walks,
                    weekends and holidays.
                  </MKTypography>
                </MKBox>
              </MKBox>
            </Grid>

            <Grid item xs={12} id="usersContainer">
              {/* ******* LEFT OWNER BOX */}
              <Tilty className="tilty" glare scale={1.05} maxGlare={0.5}>
                <Grid item xs={12} sm={6} id="leftUserGridContainer">
                  <MKBox id="userBlockL" className="inner">
                    <MKTypography
                      // fontFamily="nunito"
                      className="userHeading"
                      variant="h1"
                      sx={{ fontSize: "1.8rem", pt: 0 }}
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
                    <MKBox width="70%" alignText="center">
                      <MKTypography
                        variant="h6"
                        fontFamily="nunito"
                        lineHeight="1.2rem"
                        fontSize="1rem"
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
                      // fontFamily="nunito"
                      className="userHeading"
                      variant="h1"
                      color="dark"
                      sx={{ fontSize: "1.8rem", pt: 0 }}
                    >
                      DOG-LOVER ?
                    </MKTypography>
                    {/* ***************** Owner Img Container */}
                    <MKBox>
                      <img id="blobPic" src={dlBlob} alt="Owner Illustration" />
                    </MKBox>
                    <MKBox width="70%" alignText="center">
                      <MKTypography
                        variant="h6"
                        fontFamily="nunito"
                        lineHeight="1.2rem"
                        fontSize="1rem"
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
                style={{ margin: "10px 25px", width: "130px", height: "45px" }}
              >
                sign up
              </button>
              <button
                class="glow-on-hover"
                onClick={() => navigate("/login")}
                style={{ margin: "10px 25px", width: "130px", height: "45px" }}
              >
                log in
              </button>
            </Grid>
          </Grid>
        </MKBox>
      </MKBox>
    </>
  );
};

export default LandingStyled;
