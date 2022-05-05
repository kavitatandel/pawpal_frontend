import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKTypography from "../MKTypography";
import { spinnerContainer } from "../../styles/CustomStyles";
import MKButton from "../MKButton";
// @mui material components
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import { neumorphicDL } from "styles/CustomStyles";
import DogAvatar from "../../assets/images/avatars/dog-av-grad.png";

const RequestGridHeadingDogLover = () => {
  return (
    <>
      <MKBox
        sx={{
          flexBasis: 1,
          padding: {
            xs: "0 1rem",
            sm: "0 1rem",
            md: "0 0.5rem",
            lg: "0 0.25rem",
          },
          width: "100%",
          minWidth: "185px",
          height: "5rem",
          marginTop: "1.5rem",
          marginBottom: "-1.5rem",
          display: { xxxxs: "none", xs: "block" },
          // border: "2px solid lime !important",
        }}
      >
        <MKBox
          className="mainContainer"
          style={{ border: "2px solid lime !important" }}
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem",
            minHeight: "5rem",
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
              minHeight: "3.5rem",
              minWidth: "4.5rem",
            }}
          >
            {/* <MKAvatar
              top={-50}
              zindex={2}
              src=""
              alt="H"
              shadow="xl"
              sx={{ width: "3.5rem", height: "3.5rem" }}
              style={{
                border: "3px solid #ff9a85",
                boxSizing: "border-box",
                marginRight: "1rem",
              }}
            >
              <img
                src={DogAvatar}
                alt="avatar"
                style={{ width: "101%", height: "101%" }}
              />
            </MKAvatar> */}
          </MKBox>
          {/* *************** DOG NAME */}
          <MKBox
            className="DogName"
            sx={{
              width: { sm: "25%", md: "20%", lg: "15%" },
              display: { xxxxs: "none", xs: "block", sm: "flex" },
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
              Name
            </MKTypography>
          </MKBox>
          {/* *************** MEETING LOCATION */}
          <MKBox
            className="meetingLocation"
            sx={{
              width: {
                sm: "25%",
                md: "32%",
                lg: "24%",
                xl: "25%",
              },
              display: { xxxxs: "none", md: "flex" },
            }}
            style={{
              fontSize: "0.8rem",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <MKTypography
              variant="p"
              fontWeight="medium"
              style={{ fontSize: "1.15rem" }}
            >
              Location
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
              padding: "0rem",
              margin: "0rem",
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
          {/* *************** REQUEST STATUS */}
          <MKBox
            className="status"
            sx={{
              width: { md: "15%", lg: "12%" },
              display: { xxxxs: "none", xs: "flex" },
            }}
            style={{
              alignItems: "center !important",
              justifyContent: "flex-start",
              minWidth: "5rem",
              // border: "2px solid blue",
            }}
          >
            <MKTypography
              variant="p"
              fontWeight="medium"
              style={{ fontSize: "1.15rem" }}
            >
              Status
            </MKTypography>
          </MKBox>
          <MKBox
            className="Info"
            sx={{
              width: { md: "15%", lg: "10%" },
              display: { xs: "flex" },
            }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end !important ",
              width: { md: "15%", lg: "10%" },
              minWidth: "70px",
              height: "40px",
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

export default RequestGridHeadingDogLover;
