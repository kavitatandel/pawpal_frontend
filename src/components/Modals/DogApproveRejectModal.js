import * as React from "react";
import { useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { UpdatePlayDateRequest } from "../../logic/PlayDateFunctions";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import Slide from "@mui/material/Slide";

//for radio buttons
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

//added for date and time icons
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import TodayIcon from "@mui/icons-material/Today";
import NotListedLocationIcon from "@mui/icons-material/NotListedLocation";
import ApprovalIcon from "@mui/icons-material/Approval";
import PersonIcon from "@mui/icons-material/Person";
import MKAvatar from "components/MKAvatar";
import DogAvatar from "../../assets/images/avatars/dog-av-grad.png";
import swal from "sweetalert";
import MessageIcon from "@mui/icons-material/Message";

const styledIcon = {
  transform: "scale(1.5)",
  color: "#ff9a85",
  marginRight: "1.2rem",
  marginLeft: "0.2rem",
  verticalAlign: "middle",
};

function DogApproveRejectModal({
  show,
  setShow,
  toggleModal,
  setShowApproved,
  showApproved, //added to reload data again when owner approve or reject the request
  selectedDogRequest,
  setSelectedDogRequest,
}) {
  const [user, setUser] = useContext(UserContext);
  const [message, setMessage] = useState("");
  const [action, setAction] = useState("Approved");

  //for radio group
  const handleChange = (event) => {
    setAction(event.target.value);
  };

  const handleCancel = () => {
    //clear states
    setAction("Approved");
    setMessage("");
    toggleModal();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let ownerMessage;
    let ownerReason;

    if (action === "Approved") {
      ownerMessage = message;
      ownerReason = "";
    } else {
      ownerMessage = "";
      ownerReason = message;
    }

    const playDateRequest = {
      requestid: selectedDogRequest._id,
      requestStatus: action,
      owner_message: ownerMessage,
      owner_reason: ownerReason,
    };

    UpdatePlayDateRequest(playDateRequest)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    //clear states
    setAction("Approved");
    setMessage("");

    //to set some value which we can just use when owner approve/reject the request
    if (showApproved === true) {
      showApproved = false;
    } else {
      showApproved = true;
    }

    setShowApproved(showApproved);

    //add swal (title,text,icon,button)
    if (action === "Approved") {
      swal({
        title: "Request Approved",
        text: "You successfully approved request!",
        icon: "success",
        button: "OK!",
        buttonsStyling: false,
        className: {
          confirmButton: "swal-button", //insert class here
        },
      });
    } else {
      swal({
        title: "Request Rejected",
        text: "You successfully rejected request!",
        icon: "success",
        button: "OK!",
        buttonsStyling: false,
        className: {
          confirmButton: "swal-button", //insert class here
        },
      });
    }

    toggleModal();
  };

  return (
    <MKBox component="section" xs={{ overflow: "scroll !important" }}>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Modal
          open={show}
          onClose={toggleModal}
          sx={{
            minWidth: "220px",
            minHeight: "1300px",
            // border: "3px solid lime",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: { xxxxs: "4rem", sm: "2rem" },
            marginBottom: { xxxxs: "3rem", sm: "1rem" },
          }}
        >
          <Slide direction="down" in={show} timeout={500}>
            {/* ************** ROUNDED WHITE CARD MAIN */}
            <MKBox
              position="relative"
              width="80%"
              maxWidth="750px"
              minWidth="220px"
              height="auto"
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              borderRadius="2rem"
              bgColor="white"
              shadow="xl"
              my={5}
              padding="0 2rem 2rem 2rem"
              // border="5px solid aqua"
            >
              {/* ************** PINK HEADING BOX */}
              <MKBox
                variant="gradient"
                bgColor="info"
                borderRadius="25px"
                coloredShadow="info"
                mt="-4rem"
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{
                  height: "7rem",
                  padding: "1rem 3rem",
                  width: {
                    xxxxs: "90%",
                    xxxs: "90%",
                    xs: "85%",
                    sm: "80%",
                    md: "75%",
                    lg: "65%",
                    xl: "60%",
                    xxl: "60%",
                  },
                  minWidth: "200px",
                  maxWidth: "1400px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MKTypography
                  variant="h4"
                  fontWeight="bold"
                  color="light"
                  style={{ textAlign: "center" }}
                >
                  PENDING REQUESTS
                </MKTypography>
                {/* </MKBox> */}
              </MKBox>
              {/* ************** MAIN FORM CONTAINER */}
              <MKBox
              // border="5px solid pink"
              >
                <form
                  onSubmit={handleSubmit}
                  style={{
                    // border: "3px solid purple",
                    minWidth: "220px",
                  }}
                >
                  <Grid
                    container
                    style={{
                      // border: "3px solid yellow",
                      minWidth: "200px",
                      padding: "2rem 0rem",
                    }}
                  >
                    {/* ************** DOG AVATAR GRID CELL */}
                    <Grid
                      item
                      xxxxs={12}
                      md={6}
                      sx={{
                        display: "flex",
                        justifyContent: {
                          xxxxs: "center",
                          md: "flex-end",
                        },
                        paddingRight: { xxxxs: "0rem", md: "1rem" },
                        paddingTop: { xxxxs: "0.5rem" },
                        paddingBottom: { xxxxs: "0.5rem" },
                      }}
                      style={{
                        // border: "3px solid red",
                        minWidth: "180px",
                      }}
                    >
                      <MKAvatar
                        src={`${selectedDogRequest.DogsRequests.profile_photo}`}
                        alt={`${selectedDogRequest.DogsRequests.name} {selectedDogRequest.DogLovers.last_name}`}
                        shadow="xl"
                        // sx={{ width: "10rem", height: "10rem" }} //commented by kavita
                        sx={{ width: "6rem", height: "6rem" }}
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
                          style={{ width: "101%", height: "101%" }}
                        />
                      </MKAvatar>
                    </Grid>

                    {/* ************** DOG NAME & BREED GRID CELL */}
                    <Grid
                      item
                      xxxxs={12}
                      md={6}
                      display="flex"
                      // border="3px solid lime"
                      sx={{
                        justifyContent: {
                          xxxxs: "center",
                          md: "flex-start",
                        },
                        paddingLeft: { xxxxs: "0rem", md: "1rem" },
                        paddingTop: { xxxxs: "0.5rem" },
                        paddingBottom: { xxxxs: "0.5rem" },
                      }}
                    >
                      {/* ************** DOG NAME & BREED MKBOX */}
                      <MKBox
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        sx={{
                          alignItems: { xxxxs: "center", md: "flex-start" },
                        }}
                        // border="5px solid orange"
                      >
                        <MKTypography
                          variant="h4"
                          fontWeight="bold"
                          color="dark"
                          fontSize="1.5rem"
                        >
                          {selectedDogRequest.DogsRequests.name}
                        </MKTypography>

                        <MKTypography
                          variant="h4"
                          fontWeight="bold"
                          color="info"
                          fontSize="1.2rem"
                        >
                          {selectedDogRequest.DogsRequests.breed}
                        </MKTypography>
                      </MKBox>
                    </Grid>

                    {/* ************** "REQUESTED BY: {DOGLOVER NAME}"" GRID CELL */}
                    <Grid
                      item
                      xxxxs={12}
                      // border="3px solid aqua"
                    >
                      <MKBox
                        display="flex"
                        sx={{
                          justifyContent: { lg: "flex-start" },
                          flexDirection: { xxxxs: "column" },
                          padding: {
                            xxxxs: "0.5rem 0.5rem",
                            xs: "0.5rem 1rem",
                            sm: "0.5rem 1.5rem",
                            md: "0.5rem 2rem",
                            lg: "0.5rem 3rem",
                            xxl: "0.5rem 5rem",
                          },
                        }}
                        alignItems="flex-start"
                        // border="2px solid red"
                      >
                        <MKTypography
                          variant="h5"
                          fontWeight="regular"
                          color="info"
                          fontSize="0.75rem"
                        >
                          Requested by:
                        </MKTypography>

                        <MKTypography
                          variant="h5"
                          fontWeight="regular"
                          color="dark"
                          fontSize="1rem"
                        >
                          <PersonIcon style={styledIcon} />
                          {selectedDogRequest.DogLovers.first_name}{" "}
                          {selectedDogRequest.DogLovers.last_name}
                        </MKTypography>
                      </MKBox>
                    </Grid>
                    {/* ************** ADDRESS" GRID CELL */}
                    <Grid
                      item
                      xxxxs={12}
                      sx={{
                        // border: "3px solid blue",
                        paddingTop: { xxxxs: "0.5rem" },
                        paddingBottom: { xxxxs: "0.5rem" },
                      }}
                    >
                      <MKBox
                        display="flex"
                        sx={{
                          justifyContent: { lg: "flex-start" },
                          flexDirection: { xxxxs: "column" },
                          padding: {
                            xxxxs: "0.5rem 0.5rem",
                            xs: "0.5rem 1rem",
                            sm: "0.5rem 1.5rem",
                            md: "0.5rem 2rem",
                            lg: "0.5rem 3rem",
                            xxl: "0.5rem 5rem",
                          },
                        }}
                        alignItems="flex-start"
                        // border="2px solid red"
                      >
                        <MKTypography
                          variant="h5"
                          fontWeight="regular"
                          color="info"
                          fontSize="0.75rem"
                        >
                          Address:
                        </MKTypography>
                        <MKTypography
                          variant="h5"
                          fontWeight="regular"
                          color="dark"
                          fontSize="1rem"
                        >
                          <NotListedLocationIcon style={styledIcon} />
                          {selectedDogRequest.DogLovers.street}{" "}
                          {selectedDogRequest.DogLovers.zip_code},{" "}
                          {selectedDogRequest.DogLovers.city},{" "}
                          {selectedDogRequest.DogLovers.country}
                        </MKTypography>
                      </MKBox>
                    </Grid>
                    {/* ************** CONTAINER FOR 2x 3-CELL-ROW Blocks */}
                    <Grid
                      item
                      xxxxs={12}
                      style={{
                        // border: "3px solid orange",
                        minWidth: "200px",
                      }}
                    >
                      {/* ************** GRID CELL -> 3-CELL-ROW (Start Date, Start Time, End Time) */}
                      <Grid
                        container
                        // border="5px solid pink"
                      >
                        {/* ************** START DATE */}
                        <Grid item xxxxs={12} sm={4}>
                          <MKBox
                            display="flex"
                            sx={{
                              justifyContent: { lg: "flex-start" },
                              flexDirection: { xxxxs: "column" },
                              padding: {
                                xxxxs: "0.5rem 0.5rem",
                                xs: "0.5rem 1rem",
                                sm: "0.5rem 1.5rem",
                                md: "0.5rem 2rem",
                                lg: "0.5rem 3rem",
                                xxl: "0.5rem 5rem",
                              },
                            }}
                            alignItems="flex-start"
                            // border="2px solid red"
                          >
                            <MKTypography
                              variant="h5"
                              fontWeight="regular"
                              color="info"
                              fontSize="0.75rem"
                            >
                              Start Date:
                            </MKTypography>
                            <MKTypography
                              variant="h5"
                              fontWeight="regular"
                              color="dark"
                              fontSize="1rem"
                            >
                              <TodayIcon style={styledIcon} />
                              {new Date(selectedDogRequest.start_date)
                                .toISOString()
                                .replace(/T.*/, "")
                                .split("-")
                                .reverse()
                                .join(".")}
                            </MKTypography>
                          </MKBox>
                        </Grid>
                        {/* ************** START TIME */}
                        <Grid item xxxxs={12} sm={4}>
                          <MKBox
                            display="flex"
                            sx={{
                              justifyContent: { lg: "flex-start" },
                              flexDirection: { xxxxs: "column" },
                              padding: {
                                xxxxs: "0.5rem 0.5rem",
                                xs: "0.5rem 1rem",
                                sm: "0.5rem 1.5rem",
                                md: "0.5rem 2rem",
                                lg: "0.5rem 3rem",
                                xxl: "0.5rem 5rem",
                              },
                            }}
                            alignItems="flex-start"
                            // border="2px solid red"
                          >
                            <MKTypography
                              variant="h5"
                              fontWeight="regular"
                              color="info"
                              fontSize="0.75rem"
                            >
                              Start Time:
                            </MKTypography>
                            <MKTypography
                              variant="h5"
                              fontWeight="regular"
                              color="dark"
                              fontSize="1rem"
                            >
                              <AccessTimeFilledIcon style={styledIcon} />
                              {selectedDogRequest.start_time.slice(
                                -11,
                                -6
                              )}{" "}
                              {selectedDogRequest.start_time.slice(-3)}
                            </MKTypography>
                          </MKBox>
                        </Grid>
                        {/* ************** END TIME */}
                        <Grid item xxxxs={12} sm={4}>
                          <MKBox
                            display="flex"
                            sx={{
                              justifyContent: { lg: "flex-start" },
                              flexDirection: { xxxxs: "column" },
                              padding: {
                                xxxxs: "0.5rem 0.5rem",
                                xs: "0.5rem 1rem",
                                sm: "0.5rem 1.5rem",
                                md: "0.5rem 2rem",
                                lg: "0.5rem 3rem",
                                xxl: "0.5rem 5rem",
                              },
                            }}
                            alignItems="flex-start"
                            // border="2px solid red"
                          >
                            <MKTypography
                              variant="h5"
                              fontWeight="regular"
                              color="info"
                              fontSize="0.75rem"
                            >
                              End Time:
                            </MKTypography>
                            <MKTypography
                              variant="h5"
                              fontWeight="regular"
                              color="dark"
                              fontSize="1rem"
                            >
                              <AccessTimeFilledIcon style={styledIcon} />
                              {/* {selectedDogRequest.end_time} */}
                              {selectedDogRequest.end_time.slice(-11, -6)}{" "}
                              {selectedDogRequest.end_time.slice(-3)}
                            </MKTypography>
                          </MKBox>
                        </Grid>
                      </Grid>
                      {/* ************** GRID CELL -> 3-CELL-ROW (Meeting Location, Status, Approve/Reject) */}

                      <Grid
                        container
                        // border="5px solid lime"
                      >
                        {/* ************** MEETING LOCATION */}
                        <Grid item xxxxs={12} sm={4}>
                          <MKBox
                            display="flex"
                            sx={{
                              justifyContent: { lg: "flex-start" },
                              flexDirection: { xxxxs: "column" },
                              padding: {
                                xxxxs: "0.5rem 0.5rem",
                                xs: "0.5rem 1rem",
                                sm: "0.5rem 1.5rem",
                                md: "0.5rem 2rem",
                                lg: "0.5rem 3rem",
                                xxl: "0.5rem 5rem",
                              },
                            }}
                            alignItems="flex-start"
                            // border="2px solid red"
                          >
                            <MKTypography
                              variant="h5"
                              fontWeight="regular"
                              color="info"
                              fontSize="0.75rem"
                            >
                              Meeting Location:
                            </MKTypography>
                            <MKTypography
                              fontWeight="regular"
                              color="dark"
                              fontSize="1rem"
                            >
                              <AccessTimeFilledIcon style={styledIcon} />
                              {selectedDogRequest.meeting_location}
                            </MKTypography>
                          </MKBox>
                        </Grid>
                        {/* ************** STATUS */}
                        <Grid item xxxxs={12} sm={4}>
                          <MKBox
                            display="flex"
                            sx={{
                              justifyContent: { lg: "flex-start" },
                              flexDirection: { xxxxs: "column" },
                              padding: {
                                xxxxs: "0.5rem 0.5rem",
                                xs: "0.5rem 1rem",
                                sm: "0.5rem 1.5rem",
                                md: "0.5rem 2rem",
                                lg: "0.5rem 3rem",
                                xxl: "0.5rem 5rem",
                              },
                            }}
                            alignItems="flex-start"
                            // border="2px solid red"
                          >
                            <MKTypography
                              variant="h5"
                              fontWeight="regular"
                              color="info"
                              fontSize="0.75rem"
                            >
                              Status:
                            </MKTypography>
                            <MKTypography
                              fontWeight="regular"
                              color="dark"
                              fontSize="1rem"
                            >
                              <ApprovalIcon style={styledIcon} />
                              {selectedDogRequest.status}
                            </MKTypography>
                          </MKBox>
                        </Grid>
                        {/* ************** APPROVE/REJECT */}
                        <Grid item xxxxs={12} sm={4}>
                          <MKBox
                            display="flex"
                            sx={{
                              justifyContent: { lg: "flex-start" },
                              flexDirection: { xxxxs: "column" },
                              padding: {
                                xxxxs: "0.5rem 0.5rem",
                                xs: "0.5rem 1rem",
                                sm: "0.5rem 1.5rem",
                                md: "0.5rem 2rem",
                                lg: "0.5rem 3rem",
                                xxl: "0.5rem 5rem",
                              },
                            }}
                            alignItems="flex-start"
                            // border="2px solid red"
                          >
                            <FormControl>
                              <FormLabel
                                style={{
                                  variant: "h5",
                                  fontWeight: "regular",
                                  color: "info",
                                  fontSize: "0.75rem",
                                }}
                                // size="small"
                              >
                                <MKTypography
                                  variant="h5"
                                  fontWeight="regular"
                                  color="info"
                                  fontSize="0.75rem"
                                >
                                  Approve / Reject
                                </MKTypography>
                              </FormLabel>
                              <RadioGroup
                                name="controlled-radio-buttons-group"
                                value={action}
                                onChange={handleChange}
                                size="small"
                                row
                              >
                                <FormControlLabel
                                  value="Approved"
                                  control={
                                    <Radio
                                      size="small"
                                      style={{ fontSize: "0.70em" }}
                                    />
                                  }
                                  label="Approve"
                                />
                                <FormControlLabel
                                  value="Rejected"
                                  control={
                                    <Radio
                                      size="small"
                                      style={{ fontSize: "0.70em" }}
                                    />
                                  }
                                  label="Reject"
                                />
                              </RadioGroup>
                            </FormControl>
                          </MKBox>
                        </Grid>
                      </Grid>
                    </Grid>
                    {/* ************** MESSAGE */}
                    <Grid
                      item
                      xxxxs={12}
                      // border="3px solid blue"
                    >
                      <MKBox
                        display="flex"
                        sx={{
                          justifyContent: { lg: "flex-start" },
                          flexDirection: { xxxxs: "column" },
                          padding: {
                            xxxxs: "0.5rem 0.5rem",
                            xs: "0.5rem 1rem",
                            sm: "0.5rem 1.5rem",
                            md: "0.5rem 2rem",
                            lg: "0.5rem 3rem",
                            xxl: "0.5rem 5rem",
                          },
                        }}
                        alignItems="flex-start"
                        // border="2px solid red"
                      >
                        <MKTypography
                          variant="h5"
                          fontWeight="regular"
                          color="info"
                          fontSize="0.75rem"
                        >
                          Requester Message:
                        </MKTypography>
                        <MKTypography
                          variant="h5"
                          fontWeight="regular"
                          color="dark"
                          fontSize="1rem"
                        >
                          <MessageIcon style={styledIcon} />
                          {selectedDogRequest.dl_message === ""
                            ? "No message"
                            : selectedDogRequest.dl_message}
                        </MKTypography>
                      </MKBox>
                    </Grid>

                    <Grid
                      item
                      xxxxs={12}
                      // border="3px solid green"
                    >
                      <MKBox
                        display="flex"
                        sx={{
                          marginTop: "1rem",
                          justifyContent: { lg: "flex-start" },
                          flexDirection: { xxxxs: "column" },
                          padding: {
                            xxxxs: "0.5rem 0.5rem",
                            xs: "0.5rem 1rem",
                            sm: "0.5rem 1.5rem",
                            md: "0.5rem 2rem",
                            lg: "0.5rem 3rem",
                            xxl: "0.5rem 5rem",
                          },
                        }}
                        alignItems="flex-start"
                      >
                        <MKInput
                          multiline
                          label="Want to add a message to your response?"
                          // border="3px solid blue"
                          fullWidth
                          type="text"
                          name="message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Message here...."
                          rows={3}
                        />
                      </MKBox>
                    </Grid>
                    {/* ************** BUTTONS GRID CELL */}
                    <Grid
                      item
                      xxxxs={12}
                      sx={{
                        paddingTop: { xxxxs: "0.5rem" },
                        paddingBottom: { xxxxs: "0.5rem" },
                      }}
                      // border="3px solid lightBlue"
                    >
                      <MKBox
                        display="flex"
                        sx={{
                          justifyContent: {
                            xxxxs: "center",
                          },
                          flexDirection: { xxxxs: "column", sm: "row" },
                          padding: { xxxxs: "0rem", sm: "0 4rem" },
                          marginTop: { xxxxs: "1rem", sm: "2rem", lg: "3rem" },
                        }}
                        alignItems="center"
                        // border="2px solid red"
                      >
                        {/* ************** BUTTON - CLOSE */}
                        <MKButton
                          size="large"
                          variant="gradient"
                          color="info"
                          style={{
                            width: "7rem",
                            minWidth: "100px",
                            minHeight: "30px",
                          }}
                          onClick={handleCancel}
                        >
                          Close
                        </MKButton>
                        {/* ************** BUTTON - SAVE */}
                        <MKButton
                          type="submit"
                          size="large"
                          variant="gradient"
                          color="info"
                          style={{
                            width: "7rem",
                            minWidth: "100px",
                            minHeight: "30px",
                            margin: "1rem 2rem",
                          }}
                        >
                          Save
                        </MKButton>
                      </MKBox>
                    </Grid>
                  </Grid>
                </form>
              </MKBox>
            </MKBox>
          </Slide>
        </Modal>
      </Container>
    </MKBox>
  );
}

export default DogApproveRejectModal;
