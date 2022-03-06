import * as React from "react";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { UserContext } from "../../context/UserContext";
import { UpdatePlayDateRequest } from "../../logic/PlayDateFunctions";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import Slide from "@mui/material/Slide";

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
              width="60%"
              height="auto"
              display="flex"
              flexDirection="column"
              borderRadius="xl"
              bgColor="white"
              shadow="xl"
              p={3}
            >
              {/* Pink Box at top */}
              <MKBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                mx={6}
                mt={-5}
                p={4}
                mb={-2}
                textAlign="center"
              >
                {/* Request Status Heading */}
                <MKTypography variant="h3" fontWeight="regular" color="white">
                  {selectedDogRequest.status} Request
                </MKTypography>
              </MKBox>
              <Grid container>
                <form>
                  <MKBox pt={1} pb={2}>
                    <MKBox
                      display="flex"
                      alginItems="center"
                      justifyContent="center"
                    >
                      <MKTypography variant="h5">
                        {selectedDogRequest.status} Request
                      </MKTypography>
                    </MKBox>
                  </MKBox>
                  <MKBox
                    display="flex"
                    alginItems="center"
                    justifyContent="flex-start"
                    pb={1}
                  >
                    <MKTypography pr={1} style={{ fontWeight: "200" }}>
                      Dog Name:
                    </MKTypography>
                    <MKTypography style={{ marginRight: "2rem" }}>
                      {selectedDogRequest.DogsRequests.name}
                    </MKTypography>
                    {/* </MKBox>
                                    <MKBox
                                        display="flex"
                                        alginItems="center"
                                        justifyContent="flex-start"
                                        pb={1}

                                    > */}

                    <MKTypography pr={1}>Dog Breed:</MKTypography>
                    <MKTypography>
                      {selectedDogRequest.DogsRequests.breed}
                    </MKTypography>
                  </MKBox>
                  <MKBox
                    display="flex"
                    alginItems="center"
                    justifyContent="space-around"
                    pb={1}
                  >
                    <MKBox>
                      <MKTypography>Start Date:</MKTypography>
                      <MKTypography>
                        {new Date(selectedDogRequest.start_date)
                          .toISOString()
                          .replace(/T.*/, "")
                          .split("-")
                          .reverse()
                          .join(".")}
                        {/* {new Date(selectedDogRequest.start_date).toLocaleDateString()} */}
                      </MKTypography>
                    </MKBox>

                    <MKBox pr={1}>
                      <MKTypography>Start Time:</MKTypography>
                      <MKTypography>
                        {selectedDogRequest.start_time}
                      </MKTypography>
                    </MKBox>
                    <MKBox>
                      <MKTypography>End Time:</MKTypography>
                      <MKTypography>{selectedDogRequest.end_time}</MKTypography>
                    </MKBox>
                  </MKBox>
                  <MKBox
                    display="flex"
                    alginItems="center"
                    justifyContent="flex-start"
                    pb={1}
                  >
                    <MKTypography sx={{ fontWeight: "light" }} pr={1}>
                      Meeting Location:
                    </MKTypography>
                    <MKTypography>
                      {selectedDogRequest.meeting_location}
                    </MKTypography>
                  </MKBox>
                  <MKBox
                    display="flex"
                    alginItems="center"
                    justifyContent="flex-start"
                    pb={1}
                    sx={{ fontWeight: "light" }}
                  >
                    <MKTypography pr={1} sx={{ fontWeight: "light" }}>
                      {selectedDogRequest.status === "Rejected"
                        ? "Owner Reason:"
                        : selectedDogRequest.status === "Accepted"
                        ? "Owner Message:"
                        : ""}
                    </MKTypography>
                    <MKTypography>
                      {selectedDogRequest.status === "Pending"
                        ? ""
                        : selectedDogRequest.owner_message === "" ||
                          selectedDogRequest.owner_message === undefined
                        ? "No message from owner."
                        : selectedDogRequest.owner_message}
                    </MKTypography>
                  </MKBox>
                  {/* <MKBox
                                        mt={1}
                                        justifyContent="flex-start"
                                        display="flex"
                                        mb={1}
                                        ml={0.5}
                                        textAlign="left"
                                        width="100%"
                                    >
                                        <MKTypography
                                            pr={1}
                                            sx={{ fontWeight: 'light' }}>
                                            Status:
                                        </MKTypography>
                                        <MKTypography>
                                            {selectedDogRequest.status}
                                        </MKTypography>
                                    </MKBox> */}

                  <MKBox display="flex" justifyContent="space-between" p={1.5}>
                    <MKButton
                      size="small"
                      variant="gradient"
                      color="info"
                      style={{
                        marginLeft: "1.5rem",
                        width: "8rem",
                        minWidth: "120px",
                      }}
                      // onClick={toggleModal}
                      onClick={handleCancel}
                    >
                      Close
                    </MKButton>
                  </MKBox>
                </form>
              </Grid>
            </MKBox>
          </Slide>
        </Modal>
      </Container>
    </MKBox>
  );
}

export default DogLoverRequestInfoModal;
