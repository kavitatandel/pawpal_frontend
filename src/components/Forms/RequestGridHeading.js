import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKTypography from "../MKTypography";
import MKInput from "../MKInput";
import MKButton from "../MKButton";
// @mui material components
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import InfoIcon from "@mui/icons-material/Info";
import { neumorphicDL } from "styles/CustomStyles";
import { neumorphicHidden } from "styles/CustomStyles";
import HumanAvatar from "../../assets/images/avatars/human-av-grad.png";

const RequestGridHeading = () => {
  return (
    <>
      {/* Pending Requests & Approved Requests Heading */}

      <MKBox
        position="absolute"
        sx={{
          flexBasis: 1,
          padding: {
            xxxs: "0rem",
            md: "0 0.5rem",
            lg: "0 0.25rem",
          },
          margin: "1.5rem 0.5rem 0 0.5rem",
          height: "5rem",
          background: "transparent",
          // boxShadow:
          //   "14.11px 14.11px 24px #dedad9, -14.11px -14.11px 24px #FFFFFF",
          display: { xxxxs: "none", xxs: "flex" },
          // border: "5px solid yellow",
          justifyContent: "center",
        }}
      >
        <MKBox
          className="mainContainer"
          style={{
            minHeight: "5rem",
            // width: "100% !important",
            // minWidth: "175px",
          }}
          sx={{
            mb: "-1rem",
            width: {
              xxxxs: "65vw",
              xxxs: "70vw",
              xxs: "80vw",
              xs: "75vw",
              sm: "75vw",
              md: "65vw",
              lg: "65vw",
              xl: "60vw",
              xxl: "58vw",
              xxxl: "45vw",
              xxxxl: "40vw",
            },

            minWidth: "165px",
            maxWidth: "850px",
            position: "relative",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            padding: "1rem",
            // border: "2px solid red !important",
          }}
        >
          <MKBox
            className="Avatar"
            sx={{
              width: {
                sm: "15%",
                md: "12.5%",
                lg: "12.5%",
                xl: "10%",
                xxl: "10%",
              },
              display: { md: "flex" },
              minWidth: "4rem",
            }}
            style={{
              justifyContent: "flex-start",
              alignItems: "center",
              // border: "2px solid orange",
            }}
          >
            {/* <MKAvatar
                  top={-50}
                  src={`${request.DogLovers.profile_pic}`}
                  alt={`${request.DogLovers.first_name}`}
                  shadow="xl"
                  sx={{ width: "3.5rem", height: "3.5rem" }}
                  style={{
                    border: "3px solid #ff9a85",
                    boxSizing: "border-box",
                    marginRight: "1rem",
                  }}
                >
                  <img
                    src={HumanAvatar}
                    alt="avatar"
                    style={{ width: "100%", height: "100%" }}
                  />
                </MKAvatar> */}
          </MKBox>

          {/* *************** DOGLOVER NAME */}
          <MKBox
            className="DogLoverName"
            sx={{
              width: { sm: "25%", md: "20%" },
              display: {
                xxxxs: "none",
                xxxs: "flex",
              },
            }}
            style={{
              fontSize: "0.8rem",
              alignItems: "center",
              justifyContent: "flex-start",
              // border: "2px solid orange",
              minWidth: "6rem",
            }}
          >
            <MKTypography
              variant="p"
              fontWeight="medium"
              style={{ fontSize: "1.15rem" }}
            >
              Person
            </MKTypography>
          </MKBox>
          {/* *************** DOG NAME */}
          <MKBox
            className="DogName"
            sx={{
              width: { sm: "25%", md: "20%" },
              display: {
                xxxxs: "none",
                sm: "flex",
              },
            }}
            style={{
              fontSize: "0.8rem",
              alignItems: "center",
              justifyContent: "flex-start",
              // border: "2px solid orange",
              minWidth: "6rem",
            }}
          >
            <MKTypography
              variant="p"
              fontWeight="medium"
              style={{ fontSize: "1.15rem" }}
            >
              Dog Name
            </MKTypography>
          </MKBox>
          {/* *************** START DATE */}
          <MKBox
            className="StartDate"
            sx={{
              width: {
                md: "15%",
                lg: "13%",
              },
              display: { xxxxs: "none", lg: "flex" },
            }}
            style={{
              alignItems: "center",
              justifyContent: "flex-start",
              // border: "2px solid lime",
            }}
          >
            <MKTypography
              variant="p"
              fontWeight="medium"
              style={{ fontSize: "1.15rem" }}
            >
              Date
            </MKTypography>
          </MKBox>
          {/* *************** START TIME */}
          <MKBox
            className="StartTime"
            sx={{
              width: { lg: "10%" },
              display: { xxxxs: "none", lg: "flex" },
            }}
            style={{
              alignItems: "center",
              justifyContent: "flex-start",
              // border: "2px solid red",
            }}
          >
            <MKTypography
              variant="p"
              fontWeight="medium"
              style={{ fontSize: "1.15rem" }}
            >
              Start
            </MKTypography>
          </MKBox>
          {/* *************** END TIME */}
          <MKBox
            className="EndTime"
            sx={{
              width: { lg: "10%" },
              display: { xxxxs: "none", lg: "flex" },
            }}
            style={{
              alignItems: "center",
              justifyContent: "flex-start",
              // border: "2px solid purple",
            }}
          >
            <MKTypography
              variant="p"
              fontWeight="medium"
              style={{ fontSize: "1.15rem" }}
            >
              End
            </MKTypography>
          </MKBox>
          <MKBox
            className="ButtonContainer"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              // border: "2px solid red",
              minWidth: "70px",
              width: { md: "20%", lg: "12%" },
              marginRight: "0rem",
            }}
          >
            <MKTypography
              variant="p"
              fontWeight="medium"
              pl="0.7rem"
              style={{ fontSize: "1.15rem" }}
            >
              Info
            </MKTypography>
          </MKBox>
        </MKBox>
      </MKBox>
    </>
  );
};

export default RequestGridHeading;
