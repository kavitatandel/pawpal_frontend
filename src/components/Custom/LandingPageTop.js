import React from "react";
import "../../styles/landingTop.css";
import featuredDog from "../../assets/landing-page/Dog1.png";
import LogoImg from "../../assets/logos/logo-notext.png";
import PawPalsText from "../../assets/logos/textonly.png";
import MKTypography from "components/MKTypography";

const LandingPageTop = () => {
  return (
    <>
      <div className="TopContainerMain">
        <div className="blob">
          <div className="featuredTextContainer">
            <div className="logoContainer">
              <div className="ppHeading">
                <img src={PawPalsText} alt="heading" />
              </div>
              <div className="ppLogo">
                <img src={LogoImg} alt="logo" />
              </div>
            </div>

            <div className="ppInfoText">
              <MKTypography
                id="typographyInfoText"
                variant="h3"
                color="warning"
                fontWeight="bold"
                opacity={1}
              >
                Connecting dog owners with local dog borrowers for walks,
                weekends and holidays.
              </MKTypography>
            </div>
          </div>
          <div className="featuredDogContainer">
            <img src={featuredDog} alt="mainDog" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPageTop;
