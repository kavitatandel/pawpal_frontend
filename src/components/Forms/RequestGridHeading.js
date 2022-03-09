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
import { neumorphic } from "styles/CustomStyles";
import { neumorphicHidden } from "styles/CustomStyles";
import HumanAvatar from "../../assets/images/avatars/human-av-grad.png";

const RequestGridHeading = () => {
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
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem",
            minHeight: "5rem",
            paddingLeft: {
              sx: "0.5rem",
              sm: "1rem",
              md: "2rem",
              lg: "2.5rem",
            },
            paddingRight: {
              sx: "1rem",
              sm: "1.5rem",
              md: "2rem",
            },
          }}
        >
          <MKBox
            className="Avatar"
            sx={{
              width: { sm: "15%", md: "14%", lg: "12%" },
              display: { md: "flex" },
              minWidth: "3.2rem",

              mr: "1rem",
            }}
            style={{
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <MKAvatar
              top={-50}
              zIndex={2}
              shadow="xl"
              sx={{ width: "2.5rem", height: "2.5rem" }}
              style={{
                border: "3.2px solid white",
                marginRight: "1rem",
              }}
            >
              <img
                src={HumanAvatar}
                alt="avatar"
                style={{ width: "100%", height: "100%" }}
              />
            </MKAvatar>
          </MKBox>

          {/* *************** DOGLOVER NAME */}
          <MKBox
            className="DogLoverName"
            sx={{
              alignItems: "center",
              justifyContent: "flex-start",
              width: { sm: "25%", md: "25%", lg: "16%" },
              display: { sm: "flex" },
            }}
          >
            {" "}
            <MKTypography
              variant="p"
              fontWeight="medium"
              style={{ fontSize: "1.15rem", color: "white" }}
            >
              Name
            </MKTypography>
          </MKBox>
          {/* *************** DOG NAME */}
          <MKBox
            className="DogName"
            sx={{
              width: { sm: "25%", md: "20%", lg: "16%" },
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
              Dog Name
            </MKTypography>
          </MKBox>
          {/* *************** START DATE */}
          <MKBox
            className="StartDate"
            sx={{
              width: { md: "20%", lg: "12%" },
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
            }}
          >
            <MKTypography
              variant="p"
              fontWeight="medium"
              style={{ fontSize: "1.15rem", color: "white" }}
            >
              Start Time
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
          <MKBox
            className="EndTime"
            sx={{
              width: { lg: "12%" },
              display: { xs: "none", lg: "flex" },
            }}
            style={{
              alignItems: "center",
              justifyContent: "flex-start",
              paddingLeft: "2rem"
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

export default RequestGridHeading;
