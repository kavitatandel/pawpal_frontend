import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKTypography from "../MKTypography";
import MKInput from "../MKInput";
import MKButton from "../MKButton";
// @mui material components
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import { neumorphicHidden } from "styles/CustomStyles";
import DogAvatar from "../../assets/images/avatars/dog-av-grad.png";

const RequestGridHeadingDogLover = () => {
  return (
    <>
      <Card sx={neumorphicHidden}>
        <MKBox
          variant="gradient"
          bgColor="info"
          //borderRadius="lg"
          borderRadius="25px"
          coloredShadow="info"
          className="mainContainer"
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem",
            minHeight: "5rem",
            // paddingLeft: {
            //   sx: "0.5rem",
            //   sm: "1rem",
            //   md: "2rem",
            //   lg: "2.5rem",
            // },
            // paddingRight: {
            //   sx: "1rem",
            // },
            paddingLeft: {
              sx: "0.5rem",
              sm: "1rem",
              md: "2rem",
              lg: "2.5rem",
            },
            paddingRight: {
              sx: "1rem",
              // sm: "1.5rem",
              // md: "2rem",
            },
          }}
        >
          <MKBox
            className="Avatar"
            sx={{
              width: {
                sm: "15%",
                md: "14%",
                lg: "12.5%",
                xl: "10%",
                xxl: "10%",
              },
              display: { md: "flex" },
              minWidth: "3.2rem",
              // mr: "1rem",
            }}
            style={{
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <MKAvatar
              top={-50}
              zIndex={2}
              src=''
              alt='H'
              shadow="xl"
              sx={{ width: "2.5rem", height: "2.5rem" }}
              style={{
                border: "3.2px solid white",
                // marginRight: "1rem",
              }}
            >
              <img
                src={DogAvatar}
                alt="avatar"
                style={{ width: "100%", height: "100%" }}
              />
            </MKAvatar>
          </MKBox>
          {/* *************** DOG NAME */}
          <MKBox
            className="DogName"
            sx={{
              width: { sm: "22%", md: "13%", lg: "10%" },
              // display: { xs: "none", sm: "flex" },
              display: { xs: "flex" },
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
              style={{ fontSize: "1.15rem", color: "white" }}
            >
              Name
            </MKTypography>
          </MKBox>
          {/* *************** MEETING LOCATION */}
          <MKBox
            className="meetingLocation"
            sx={{
              width: { sm: "24%", md: "19%", lg: "15%" },
              display: { xs: "none", sm: "flex" },
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
              style={{ fontSize: "1.15rem", color: "white" }}
            >
              Location
            </MKTypography>
          </MKBox>
          {/* *************** START DATE */}
          <MKBox
            className="StartDate"
            sx={{
              // width: {
              //   md: "22%",
              //   lg: "17%",
              //   xl: "18%",
              //   xxl: "18%",
              // },
              width: {
                md: "16%",
                lg: "12%",
                xl: "14%",
                xxl: "14%",
              },

              display: { xs: "none", md: "flex" },
            }}
            style={{
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <MKTypography
              variant="p"
              fontWeight="medium"
              style={{ fontSize: "1.15rem", color: "white" }}
            >
              Date
            </MKTypography>
          </MKBox>

          {/* *************** START TIME */}
          <MKBox
            className="StartTime"
            sx={{
              width: { lg: "12%" },
              display: { xs: "none", lg: "flex" },
            }}
            style={{
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "0rem",
              margin: "0rem"
            }}
          >
            <MKTypography
              variant="p"
              fontWeight="medium"
              style={{ fontSize: "1.15rem", color: "white" }}
            >
              Start time
            </MKTypography>
          </MKBox>
          {/* *************** END TIME */}
          <MKBox
            className="EndTime"
            sx={{
              width: { lg: "12%" },
              display: { xs: "none", lg: "flex" },
            }}
            style={{
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <MKTypography
              variant="p"
              fontWeight="medium"
              style={{ fontSize: "1.15rem", color: "white" }}
            >
              End Time
            </MKTypography>
          </MKBox>
          {/* *************** REQUEST STATUS */}
          <MKBox
            className="status"
            sx={{
              width: { lg: "12%" },
              display: { xs: "none", lg: "flex" },

            }}
            style={{
              alignItems: "center !important",
              justifyContent: "flex-start",
              paddingLeft: "0rem"
            }}
          >

            <MKTypography
              variant="p"
              fontWeight="medium"
              style={{ fontSize: "1.15rem", color: "white" }}
            >
              Status
            </MKTypography>

          </MKBox>
          <MKBox
            className="Info"
            sx={{
              width: { xs: "25%", sm: "25%", md: "16%", lg: "12%" },
              display: { xs: "flex" },
            }}
            style={{
              alignItems: "center",
              justifyContent: "flex-start",
              paddingLeft: "1rem"
            }}
          >
            <MKTypography
              variant="p"
              fontWeight="medium"
              style={{ fontSize: "1.15rem", color: "white" }}
            >
              Info
            </MKTypography>
          </MKBox>
        </MKBox>
      </Card>
    </>
  );
};

export default RequestGridHeadingDogLover;
