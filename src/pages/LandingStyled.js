import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LandingStyles.css";
import Tilty from "react-tilty";
import "../styles/buttonStyles.css";
import { UserTypeContext } from "context/UserTypeContext";

import LandingPageTop from "../components/Custom/LandingPageTop";
import LogoImg from "../assets/logos/logo-notext.png";
import PawPalsText from "../assets/logos/textonly.png";

import PinkCurve from "../assets/landing-page/Blob-1.png";
import MKAvatar from "../components/MKAvatar";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

import ownerBlob from "assets/landing-page/dogblob1.png";
import dlBlob from "assets/landing-page/dogblob2.png";
import featuredDog from "assets/landing-page/Dog1.png";

const LandingStyled = () => {
  const navigate = useNavigate();
  const [isOwner, setIsOwner] = useContext(UserTypeContext);

  /* ******* SOCIAL MEDIA ICON STYLING */

  const smIconsStyle = {
    transform: "scale(1.2)",
    margin: "0.5rem",
    // [horizontal offset] [vertical offset] [blur radius] [optional spread radius] [color];
    filter: "drop-shadow(-1px 2px 3px  rgba(255, 61, 71, 0.6))",
  };

  const registerOwnerHandler = () => {
    setIsOwner(true);
    navigate("/register");
  };

  const registerDLHandler = () => {
    setIsOwner(false);
    navigate("/register");
  };

  useEffect(() => {
    console.log(`Owner? ${isOwner}`);
  }, [isOwner]);

  return (
    <>
      {/* ************ MAIN PAGE CONTAINER */}

      <MKBox id="pageContainer">
        {/* ******* GRID CONTAINER */}
        <div id="mainContainer">
          {/* ******* TOP SECTION */}

          <LandingPageTop />

          {/* ******* MIDDLE SECTION */}
          <div className="middle">
            {/* ******* LEFT OWNER BOX */}
            <div id="usersContainer" className="ownerBox">
              {/* ***************** Owner Img Container */}
              <div className="ownerBlob">
                <img id="blobPic" src={ownerBlob} alt="Owner Illustration" />
              </div>

              <div className="ownerText">
                <MKTypography className="userHeading" variant="h1">
                  Dog Owners
                </MKTypography>
                <MKTypography
                  id="smallFont"
                  variant="h6"
                  color="dark"
                  fontWeight="bold"
                  // textTransform="uppercase"
                  opacity={1}
                  minHeight="120px"
                >
                  Find a trusted local dog lover to take care of your dog when
                  you can't. They'll treat your dog like family.
                  <br />
                  <br />
                  Our members sign up to make another person happy by sharing
                  the love of dogs.
                </MKTypography>
                <div item id="button-container">
                  <button
                    id="registerButton"
                    className="glow-on-hover"
                    onClick={registerOwnerHandler}
                    // onClick={() => navigate("/register")}
                  >
                    sign up
                  </button>
                  <button
                    id="loginButton"
                    className="glow-on-hover"
                    onClick={() => navigate("/login")}
                  >
                    log in
                  </button>
                </div>
              </div>
            </div>
            {/* ******* RIGHT DL BOX */}
            <div id="usersContainer" className="dogLoverBox">
              {/* ***************** Owner Img Container */}

              <div className="dlText">
                <MKTypography className="userHeading" variant="h1" color="dark">
                  Dog Lovers
                </MKTypography>
                <MKTypography
                  id="smallFont"
                  variant="h6"
                  fontWeight="bold"
                  // textTransform="uppercase"
                  opacity={1}
                  minHeight="120px"
                >
                  Fill the dog void in your life by spending time with one and
                  helping out Owners at the same time. It's a win-win!
                  <br />
                  <br />
                  Join like minded people in your local area who are part of the
                  largest dog-loving community.
                </MKTypography>
                <div item id="button-container">
                  <button
                    id="registerButton"
                    className="glow-on-hover"
                    onClick={registerDLHandler}
                    // onClick={() => navigate("/register")}
                  >
                    sign up
                  </button>
                  <button
                    id="loginButton"
                    className="glow-on-hover"
                    onClick={() => navigate("/login")}
                  >
                    log in
                  </button>
                </div>
              </div>
              <div className="dlBlob">
                <img
                  id="blobPic"
                  className="singleDog"
                  src={dlBlob}
                  alt="Owner Illustration"
                />
              </div>
            </div>
          </div>
          {/* ******* BOTTOM SECTION */}
        </div>
      </MKBox>
    </>
  );
};

export default LandingStyled;
