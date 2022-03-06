import * as React from "react";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { UserContext } from "../../context/UserContext";
import { UpdatePlayDateRequest } from "../../logic/PlayDateFunctions";
import DogAvatar from "../../assets/images/avatars/dog-av-grad.png";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import Slide from "@mui/material/Slide";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import TodayIcon from "@mui/icons-material/Today";
import NotListedLocationIcon from "@mui/icons-material/NotListedLocation";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";

//for radio button
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKAvatar from "components/MKAvatar";

//for date picker
import TextField from "@mui/material/TextField";

function DogLoverRequestInfoModal({
  show,
  setShow,
  toggleModal,
  selectedDogRequest,
  setSelectedDogRequest,
}) {
  //console.log(selectedDogRequest);

  const handleCancel = () => {
    toggleModal();
  };
  console.log(selectedDogRequest);

  const styledIcon = {
    transform: "scale(1.5)",
    color: "#ff9a85",
    marginRight: "1.2rem",
    marginLeft: "0.2rem",
    verticalAlign: "middle",
  };

  return (
    <MKBox component="section" py={6}>
      <Container>
        <Modal
          open={show}
          onClose={toggleModal}
          sx={{ display: "grid", placeItems: "center" }}
        >
          <Slide direction="down" in={show} timeout={500}>
            <MKBox
              position="relative"
              width="80%"
              maxWidth="1000px"
              height="auto"
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              borderRadius="2rem"
              bgColor="white"
              shadow="xl"
              p={3}
              my={2}
            >
              {/* Pink Box at top */}
              <MKBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                width="60%"
                mx="3rem"
                mt="-4rem"
                p="2rem 2rem"
                textAlign="center"
              >
                {/* Request Status Heading */}
                <MKTypography variant="h3" fontWeight="regular" color="white">
                  {selectedDogRequest.status} Request
                </MKTypography>
              </MKBox>
              <MKBox p="3rem">
                <Grid container>
                  {/* *********** Avatar */}
                  <Grid item xs={12} md={6}>
                    <MKBox
                      className="Avatar"
                      sx={{
                        display: "flex",
                        justifyContent: { xs: "flex-end" },
                        alignItems: "center",
                        m: "1rem",
                      }}
                    >
                      <MKAvatar
                        zIndex={2}
                        src={`${selectedDogRequest.DogsRequests.profile_photo}`}
                        alt={`${selectedDogRequest.DogsRequests.profile_photo}`}
                        shadow="xl"
                        sx={{ width: "10rem", height: "10rem" }}
                        style={{
                          border: "0.3rem solid #ff9a85",
                          background:
                            "linear-gradient(145deg, #FFFFFF, #C1C3C6)",
                          borderRadius: "100%",
                          boxShadow:
                            "14.11px 14.11px 24px #D9DADE, -14.11px -14.11px 24px #FFFFFF",
                        }}
                      >
                        <img
                          src={DogAvatar}
                          alt="avatar"
                          style={{ width: "100%", height: "100%" }}
                        />
                      </MKAvatar>
                    </MKBox>
                  </Grid>
                  {/* *********** Dog Name & Breed */}
                  <Grid
                    item
                    xs={12}
                    md={6}
                    display="flex"
                    sx={{ justifyContent: { xs: "flex-start" } }}
                  >
                    <MKBox
                      display="flex"
                      flexDirection="column"
                      alignItems="flexStart"
                      justifyContent="center"
                      m="1rem"
                    >
                      <MKTypography
                        variant="h2"
                        fontWeight="regular"
                        color="dark"
                      >
                        {selectedDogRequest.DogsRequests.name}
                      </MKTypography>

                      <MKTypography
                        variant="h3"
                        fontWeight="regular"
                        color="dark"
                      >
                        {selectedDogRequest.DogsRequests.breed}
                      </MKTypography>
                    </MKBox>
                  </Grid>

                  {/* ************** Date */}
                  <Grid item xs={12}>
                    <MKBox
                      display="flex"
                      sx={{ m: "1rem 1rem 0rem 1rem" }}
                      alignItems="flex-start"
                      justifyContent="flex-start"
                    >
                      <MKTypography
                        variant="h3"
                        fontWeight="regular"
                        color="info"
                        fontSize="1rem"
                      >
                        DATE
                      </MKTypography>
                    </MKBox>
                    <MKBox
                      display="flex"
                      sx={{ m: "0.3rem 1rem 1rem 1rem" }}
                      alignItems="flex-start"
                      justifyContent="flex-start"
                    >
                      <MKTypography
                        variant="h3"
                        fontWeight="regular"
                        color="dark"
                        fontSize="1.5rem"
                      >
                        <TodayIcon style={styledIcon} />
                        {new Date(selectedDogRequest.start_date)
                          .toISOString()
                          .replace(/T.*/, "")
                          .split("-")
                          .reverse()
                          .join(".")}
                        {/* {new Date(selectedDogRequest.start_date).toLocaleDateString()} */}
                      </MKTypography>
                    </MKBox>
                  </Grid>
                  {/* *************** Time */}
                  {/* *************** Start Time */}
                  <Grid item xs={12} md={6}>
                    <MKBox
                      display="flex"
                      sx={{ m: "1rem 1rem 0.3rem 1rem" }}
                      alignItems="flex-start"
                      justifyContent="flex-start"
                    >
                      <MKTypography
                        variant="h3"
                        fontWeight="regular"
                        color="info"
                        fontSize="1rem"
                      >
                        START TIME
                      </MKTypography>
                    </MKBox>
                    <MKBox
                      display="flex"
                      sx={{ m: "0.3rem 1rem 1rem 1rem" }}
                      alignItems="flex-start"
                      justifyContent="flex-start"
                    >
                      <MKTypography
                        variant="h3"
                        fontWeight="regular"
                        color="dark"
                        fontSize="1.5rem"
                      >
                        <AccessTimeFilledIcon style={styledIcon} />
                        {selectedDogRequest.start_time.slice(-11, -6)}{" "}
                        {selectedDogRequest.start_time.slice(-3)}
                      </MKTypography>
                    </MKBox>
                  </Grid>
                  {/* *************** End Time */}
                  <Grid item xs={12} md={6}>
                    <MKBox
                      display="flex"
                      sx={{
                        m: "1rem 1rem 0.3rem 1rem",
                        justifyContent: { lg: "flex-start" },
                      }}
                      alignItems="flex-start"
                    >
                      <MKTypography
                        variant="h3"
                        fontWeight="regular"
                        color="info"
                        fontSize="1rem"
                      >
                        END TIME
                      </MKTypography>
                    </MKBox>
                    <MKBox
                      display="flex"
                      sx={{ m: "0.3rem 1rem 1rem 1rem" }}
                      alignItems="flex-start"
                      justifyContent="flex-start"
                    >
                      <MKTypography
                        variant="h3"
                        fontWeight="regular"
                        color="dark"
                        fontSize="1.5rem"
                      >
                        <AccessTimeFilledIcon style={styledIcon} />
                        {selectedDogRequest.end_time.slice(-11, -6)}{" "}
                        {selectedDogRequest.end_time.slice(-3)}
                      </MKTypography>
                    </MKBox>
                  </Grid>
                  {/* *************** Location */}
                  <Grid item xs={12}>
                    <MKBox
                      display="flex"
                      sx={{ m: "1rem 1rem 0rem 1rem" }}
                      alignItems="flex-start"
                      justifyContent="flex-start"
                    >
                      <MKTypography
                        variant="h3"
                        fontWeight="regular"
                        color="info"
                        fontSize="1rem"
                      >
                        MEETING LOCATION
                      </MKTypography>
                    </MKBox>
                    <MKBox
                      display="flex"
                      sx={{ m: "0.3rem 1rem 1rem 1rem" }}
                      alignItems="flex-start"
                      justifyContent="flex-start"
                    >
                      <MKTypography
                        variant="h3"
                        fontWeight="regular"
                        color="dark"
                        fontSize="1.5rem"
                      >
                        <NotListedLocationIcon style={styledIcon} />
                        {selectedDogRequest.meeting_location}
                      </MKTypography>
                    </MKBox>
                  </Grid>

                  <Grid item xs={12}>
                    {selectedDogRequest.status === "Rejected" ? (
                      <>
                        <MKBox
                          display="flex"
                          sx={{ m: "1rem 1rem 0rem 1rem" }}
                          alignItems="flex-start"
                          justifyContent="flex-start"
                        >
                          <MKTypography
                            variant="h3"
                            fontWeight="regular"
                            color="info"
                            fontSize="1rem"
                          >
                            OWNER REASON
                          </MKTypography>
                        </MKBox>
                        <MKBox
                          display="flex"
                          sx={{ m: "0.3rem 1rem 1rem 1rem" }}
                          alignItems="flex-start"
                          justifyContent="flex-start"
                        >
                          <MKTypography
                            variant="h3"
                            fontWeight="regular"
                            color="dark"
                            fontSize="1.5rem"
                          >
                            <NotListedLocationIcon style={styledIcon} />
                            {selectedDogRequest.owner_reason}
                          </MKTypography>
                        </MKBox>
                      </>
                    ) : (
                      <>
                        <MKBox
                          display="flex"
                          sx={{ m: "1rem 1rem 0rem 1rem" }}
                          alignItems="flex-start"
                          justifyContent="flex-start"
                        >
                          <MKTypography
                            variant="h3"
                            fontWeight="regular"
                            color="info"
                            fontSize="1rem"
                          >
                            OWNER MESSAGE
                          </MKTypography>
                        </MKBox>
                        <MKBox
                          display="flex"
                          sx={{ m: "0.3rem 1rem 1rem 1rem" }}
                          alignItems="flex-start"
                          justifyContent="flex-start"
                        >
                          {selectedDogRequest.owner_message === "" ||
                          selectedDogRequest.owner_message === undefined ? (
                            <MKTypography
                              variant="h3"
                              fontWeight="regular"
                              color="dark"
                              fontSize="1.5rem"
                            >
                              <NotListedLocationIcon style={styledIcon} />
                              No message
                            </MKTypography>
                          ) : (
                            <MKTypography
                              variant="h3"
                              fontWeight="regular"
                              color="dark"
                              fontSize="1.5rem"
                            >
                              <NotListedLocationIcon style={styledIcon} />
                              {selectedDogRequest.owner_message}
                            </MKTypography>
                          )}
                        </MKBox>
                      </>
                    )}
                  </Grid>

                  <Grid item xs={12}>
                    <MKBox
                      display="flex"
                      justifyContent="center"
                      p={1.5}
                      my="2rem"
                    >
                      <MKButton
                        size="large"
                        variant="gradient"
                        color="info"
                        style={{
                          width: "8rem",
                          minWidth: "100px",
                          minHeight: "50px",
                        }}
                        // onClick={toggleModal}
                        onClick={handleCancel}
                      >
                        Close
                      </MKButton>
                    </MKBox>
                  </Grid>
                </Grid>
              </MKBox>
            </MKBox>
          </Slide>
        </Modal>
      </Container>
    </MKBox>
  );
}

export default DogLoverRequestInfoModal;
