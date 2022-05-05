import { useEffect, useState, useContext } from "react";
import { UserContext } from "context/UserContext";
import { spinnerContainer } from "../../styles/CustomStyles";
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKTypography from "../MKTypography";
import MKInput from "../MKInput";
import MKButton from "../MKButton";
// @mui material components
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import InfoIcon from "@mui/icons-material/Info";
import { neumorphic } from "styles/CustomStyles";
import { neumorphicDL } from "styles/CustomStyles";
import DogAvatar from "../../assets/images/avatars/dog-av-grad.png";
import "../../styles/extraStyles.css";

import {
  getDogLoverRequests,
  getDogLoverApprovedRequests,
  deleteRequestById,
} from "../../logic/PlayDateFunctions";
import { useNavigate, useParams } from "react-router";
import DogLoverApprovedRequests from "./DogLoverApprovedRequests";
import DogLoverRequestInfoModal from "../Modals/DogLoverRequestInfoModal";
//for spinner
import RiseLoader from "react-spinners/RiseLoader";
import { override } from "styles/CustomStyles";

//delete icon
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import swal from "sweetalert";
import RequestGridHeadingDogLover from "./RequestGridHeadingDogLover";

import "../../styles/buttonStyles.css";

const styledDeleteIcon = {
  transform: "scale(1.5)",
  color: "#ff3d47",
  // marginRight: "0.2rem",
  // marginLeft: "0.2rem",
  verticalAlign: "middle",
  justifyContent: "center",
  alignItem: "center",
  // width: "1rem",
};

const DogLoverRequestsForm = () => {
  const [user, setUser] = useContext(UserContext);
  const [dogRequestsInfo, setDogRequestsInfo] = useState([]);
  const [dogApprovedRequestsInfo, setDogApprovedRequestsInfo] = useState([]);
  const [selectedDogRequest, setSelectedDogRequest] = useState([]);
  //for spinner
  const [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ff3d47");

  //for modal
  const [show, setShow] = useState(false);
  //commented to get request again when user approve/reject
  const toggleModal = () => setShow(!show);

  //get dog 'Pending' requests
  const getRequestData = () => {
    const owner_id = user._id;
    getDogLoverRequests(owner_id)
      .then((res) => {
        //console.log(res)
        setDogRequestsInfo(res);
      })
      .catch((err) => console.log(err));
  };

  //get dog 'Approved' request
  const getApprovedRequestData = () => {
    const owner_id = user._id;
    getDogLoverApprovedRequests(owner_id)
      .then((res) => {
        // console.log("Dog Lover Approved Request:")
        // console.log(res);
        setDogApprovedRequestsInfo(res);
        //for spinner
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(async () => {
    // console.log("Dog lover request form")
    await getRequestData();
    await getApprovedRequestData();
  }, []);

  const handleInfo = (e) => {
    e.preventDefault();
    if (e.target.value !== undefined) {
      // console.log(e);
      // console.log(e.target.value)
      //get the clicked item id
      const selectedRequestId = e.target.value;
      //find selected request id data
      const selectedRequest = dogRequestsInfo.find(
        (dogRequest) => dogRequest._id === selectedRequestId
      );
      setSelectedDogRequest(selectedRequest);

      toggleModal();
    } else {
    }
  };

  //handle delete
  const handleDelete = async (e) => {
    e.preventDefault();
    console.log(e.target[1].value);
    await deleteRequestById(e.target[1].value)
      .then((res) => {
        //alert("Request has been deleted");

        swal({
          title: "Request Deleted",
          text: "You successfully deleted request!",
          icon: "success",
          button: "OK!",
          buttonsStyling: false,
          className: {
            confirmButton: "swal-button", //insert class here
          },
        });

        //after 2 seconds , update grids
        setTimeout(() => {
          getRequestData();
          getApprovedRequestData();
        }, 2000);

        // getRequestData();
        // getApprovedRequestData();
      })
      .catch((err) => console.log(err));
  };

  //for spinner
  if (loading)
    return (
      <div style={spinnerContainer}>
        <RiseLoader color={color} loading={loading} css={override} size={40} />
      </div>
      // <RiseLoader color={color} loading={loading} css={override} size={40} />
    );
  return (
    <>
      <MKBox
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
        minHeight="auto"
        top={0}
        width="100%"
        // style={{ border: "3px solid red" }}

        //   style={{ border: "3px solid green" }}
      >
        <MKBox
          width="100%"
          top={0}
          minHeight="100%"
          mx="auto"
          mr={0}
          ml={0}
          position="relative"
          sx={{ padding: "0" }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Paper
            className="neuCard"
            elevation={24}
            style={{
              background: "rgba( 255, 255, 255, 0.8 )",
              borderRadius: "25px",

              boxShadow: "0 8px 40px 0 rgba(255, 61, 46, 0.5)",
            }}
            sx={{
              width: { xxxxs: "95%", sm: "90%", md: "85%", xl: "80%" },
              maxWidth: "1000px",
              minWidth: "185px",
              height: "auto",
              mt: 30,
              pb: "3rem",
              mx: { xs: 2, lg: 3 },
              position: "relative",
              mb: 20,
            }}
          >
            {selectedDogRequest.length !== 0 ? (
              <DogLoverRequestInfoModal
                show={show}
                setShow={setShow}
                toggleModal={toggleModal}
                selectedDogRequest={selectedDogRequest}
                setSelectedDogRequest={setSelectedDogRequest}
              />
            ) : (
              <h1> </h1>
            )}

            {/* ************************** Dog Details */}

            {/* _________ div fixes pink block in postion */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                // border: "4px solid blue",
                marginTop: "-2rem",
                position: "relative",
              }}
            >
              {/* ____________PINK BOX */}
              <MKBox
                variant="gradient"
                bgColor="info"
                borderRadius="25px"
                coloredShadow="info"
                display="flex"
                alignItems="center"
                justifyContent="center"
                position="absolute"
                sx={{
                  height: "7rem",
                  padding: "1rem",
                  width: {
                    xxxxs: "100%",
                    xxxs: "95%",
                    xs: "85%",
                    sm: "80%",
                    md: "75%",
                    lg: "65%",
                    xl: "50%",
                    xxl: "40%",
                  },
                  minWidth: "200px",
                  maxWidth: "1400px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MKTypography variant="h4" fontWeight="bold" color="light">
                  PLAY DATE REQUESTS
                </MKTypography>
                {/* </MKBox> */}
              </MKBox>
            </div>

            {/******************** REQUESTS */}
            <Grid
              container
              sx={{
                padding: "1rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: "6rem",
                minWidth: "100%",
              }}
            >
              <MKBox
                sx={{ width: { xs: "95%", lg: "90%", xxl: "90%" } }}
                style={{
                  display: "flex",
                  height: "auto",
                  flexDirection: "column",
                  // alignItems: "center",

                  justifyContent: "center",
                  // border: "2px solid blue",
                }}
              >
                {dogRequestsInfo === undefined ? (
                  <h5
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#ff3d47",
                      marginTop: "10%",
                    }}
                  >
                    No Playdate Requests Found.{" "}
                  </h5>
                ) : dogRequestsInfo.length === 0 ? (
                  <h5
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#ff3d47",
                      marginTop: "10%",
                    }}
                  >
                    No Playdate Requests Found.{" "}
                  </h5>
                ) : (
                  // ""
                  <RequestGridHeadingDogLover />
                )}
                {/* map thru searched dogs */}
                {dogRequestsInfo !== undefined &&
                  dogRequestsInfo.map((request, index) => {
                    return (
                      <form onSubmit={handleDelete}>
                        <Card sx={neumorphicDL} key={index}>
                          <MKBox
                            className="mainContainer"
                            style={{
                              border: "2px solid blue !important",
                              minHeight: "5rem",
                              width: "100% !important",
                              minWidth: "175px",
                            }}
                            sx={{
                              position: "relative",
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              padding: "1rem",
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
                              <MKAvatar
                                top={-50}
                                src={`${request.DogsRequests.profile_photo}`}
                                alt={`${request.DogsRequests.name}`}
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
                              </MKAvatar>
                            </MKBox>
                            {/* *************** DOG NAME */}
                            <MKBox
                              className="DogName"
                              sx={{
                                width: { sm: "25%", md: "20%", lg: "15%" },
                                display: {
                                  xxxxs: "none",
                                  xs: "block",
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
                                style={{ fontSize: "0.90rem" }}
                              >
                                {request.DogsRequests.name}
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
                                // border: "2px solid yellow",
                              }}
                            >
                              <MKTypography
                                variant="p"
                                style={{ fontSize: "0.90rem" }}
                              >
                                {request.meeting_location}
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
                                style={{ fontSize: "0.90rem" }}
                              >
                                {new Date(request.start_date)
                                  .toISOString()
                                  .replace(/T.*/, "")
                                  .split("-")
                                  .reverse()
                                  .join(".")}
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
                                style={{ fontSize: "0.90rem" }}
                              >
                                {request.start_time.slice(-11, -6)}{" "}
                                {request.start_time.slice(-3)}
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
                                style={{ fontSize: "0.90rem" }}
                              >
                                {request.end_time.slice(-11, -6)}{" "}
                                {request.end_time.slice(-3)}
                              </MKTypography>
                            </MKBox>
                            {/* *************** REQUEST STATUS */}
                            <MKBox
                              className="status"
                              sx={{
                                width: { md: "15%", lg: "12%" },
                                display: { xxxxs: "none", xxs: "flex" },
                              }}
                              style={{
                                alignItems: "center !important",
                                justifyContent: "flex-start",
                                minWidth: "5rem",
                                // border: "2px solid blue",
                              }}
                            >
                              {request.status === "Pending" ? (
                                <MKTypography
                                  variant="p"
                                  style={{
                                    verticalAlign: "middle",
                                    fontSize: "0.90rem",
                                    color: "blue",
                                  }}
                                >
                                  {request.status}
                                </MKTypography>
                              ) : request.status === "Approved" ? (
                                <MKTypography
                                  variant="p"
                                  style={{
                                    fontSize: "0.90rem",
                                    color: "green",
                                    verticalAlign: "middle",
                                  }}
                                >
                                  {request.status}
                                </MKTypography>
                              ) : (
                                <MKTypography
                                  variant="p"
                                  style={{
                                    fontSize: "0.90rem",
                                    color: "red",
                                  }}
                                >
                                  {request.status}
                                </MKTypography>
                              )}
                            </MKBox>
                            <MKBox
                              className="ButtonContainer"
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-end !important ",
                                // border: "2px solid red",
                                width: { md: "15%", lg: "10%" },
                              }}
                            >
                              {request.status === "Rejected" ? (
                                ""
                              ) : (
                                <button
                                  className="mini-button"
                                  type="submit"
                                  value={request._id}
                                  onClick={handleInfo}
                                >
                                  <InfoIcon className="infoIcon" />
                                  <span className="infoText">INFO</span>
                                </button>
                              )}

                              {request.status === "Rejected" ? (
                                <MKBox
                                  className="ButtonContainer"
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "flex-end ",
                                    //   border: "2px solid red",

                                    // width: { md: "20%", lg: "16%" },
                                    width: { md: "30%", lg: "26%" },
                                  }}
                                >
                                  <button
                                    className="mini-button"
                                    id="deletebtn"
                                    type="submit"
                                    value={request._id}
                                    // onClick={handleInfo}
                                  >
                                    <InfoIcon
                                      className="infoIconByDelete"
                                      onClick={handleInfo}
                                    />
                                    <DeleteOutlineIcon
                                      className="deleteIcon"
                                      onClick={handleDelete}
                                    />
                                  </button>
                                </MKBox>
                              ) : (
                                ""
                              )}
                            </MKBox>
                          </MKBox>
                        </Card>
                      </form>
                    );
                  })}
              </MKBox>
            </Grid>
          </Paper>
        </MKBox>
      </MKBox>
    </>
  );
};

export default DogLoverRequestsForm;
