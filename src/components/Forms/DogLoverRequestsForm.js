import { useEffect, useState, useContext } from "react";
import { UserContext } from "context/UserContext";
import bgImage from "../../assets/images/backgrounds/giorgia-finazzi-p73awrEBovI-unsplash-cropped.jpeg";
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

  useEffect(() => {
    // console.log("Dog lover request form")
    getRequestData();
    getApprovedRequestData();
  }, []);

  const handleInfo = (e) => {
    e.preventDefault();
    console.log(e);
    //get the clicked item id
    const selectedRequestId = e.target.value;
    //find selected request id data
    const selectedRequest = dogRequestsInfo.find(
      (dogRequest) => dogRequest._id === selectedRequestId
    );
    setSelectedDogRequest(selectedRequest);

    toggleModal();
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
          customClass: {
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
      <RiseLoader color={color} loading={loading} css={override} size={40} />
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
          zindex={-1}
          sx={{ padding: "0" }}
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Paper
            className="neuCard"
            elevation={24}
            style={{
              position: "relative",
              // borderRadius: "2rem",
              background: "rgba( 255, 255, 255, 0.8 )",
              borderRadius: "25px",
              backdropFilter: "blur( 12px )",
            }}
            sx={{
              width: { xs: "95%", sm: "90%", md: "85%", xl: "80%" },
              maxWidth: "1000px",
              height: "auto",
              mt: 30,
              // mt: {
              //   xs: "140px",
              //   sm: "170px",
              //   md: "220px",

              //   xl: "300px",
              // },
              pb: "3rem",
              mx: { xs: 2, lg: 3 },
              position: "relative",
              mb: 10,
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
              <h1></h1>
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
                //borderRadius="lg"
                borderRadius="25px"
                coloredShadow="info"
                width="30rem"
                textAlign="center"
                sx={{
                  height: "7rem",

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MKTypography
                  variant="h4"
                  fontWeight="bold"
                  color="light"
                  textAlign="center"
                >
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

                mb: "4rem",
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
                  // border: "3px solid blue",
                }}
              >
                {dogRequestsInfo === undefined ? (
                  <h5 style={{ display: "flex", justifyContent: "center", alignItems: "center", color: "#ff3d47", marginTop: "10%" }}>
                    No Playdate Requests Found.{" "}
                  </h5>
                ) : dogRequestsInfo.length === 0 ? (
                  <h5 style={{ display: "flex", justifyContent: "center", alignItems: "center", color: "#ff3d47", marginTop: "10%" }}>
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
                            sx={{
                              position: "relative",
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
                                src={`${request.DogsRequests.profile_photo}`}
                                alt={`${request.DogsRequests.name}`}
                                shadow="xl"
                                sx={{ width: "2.5rem", height: "2.5rem" }}
                                style={{
                                  border: "3.2px solid white",
                                  marginRight: "1rem",
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
                                width: { sm: "25%", md: "16%", lg: "12%" },
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
                                style={{ fontSize: "0.90rem" }}
                              >
                                {request.DogsRequests.name}
                              </MKTypography>
                            </MKBox>
                            {/* *************** MEETING LOCATION */}
                            <MKBox
                              className="meetingLocation"
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
                                style={{ fontSize: "0.90rem" }}
                              >
                                {request.meeting_location}
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
                                  md: "22%",
                                  lg: "17%",
                                  xl: "18%",
                                  xxl: "18%",
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
                                style={{ fontSize: "0.90rem" }}
                              >
                                {new Date(request.start_date)
                                  .toISOString()
                                  .replace(/T.*/, "")
                                  .split("-")
                                  .reverse()
                                  .join(".")}
                                {/* {new Date(
                                     request.start_date
                                   ).toLocaleDateString()} */}
                                {/* {request.start_date} */}
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
                                width: { lg: "12%" },
                                display: { xs: "none", lg: "flex" },
                              }}
                              style={{
                                alignItems: "center !important",
                                justifyContent: "flex-start",
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
                                //   border: "2px solid red",

                                width: { md: "17%", lg: "12%" },
                                // marginRight: "1rem",
                              }}
                            >
                              {request.status === "Rejected" ? (
                                ""
                              ) : (
                                <button
                                  class="mini-button"
                                  style={{
                                    margin: "10px 10px",
                                    minWidth: "70px",
                                    height: "40px",
                                  }}
                                  type="submit"
                                  value={request._id}
                                  onClick={handleInfo}
                                >
                                  <InfoIcon style={{ marginRight: "6px" }} />
                                  INFO
                                </button>
                              )}
                              {/* <button
                                class="mini-button"
                                style={
                                  request.status === "Rejected"
                                    ? { display: "none" }
                                    : { display: "flex" }
                                }
                                // style={{ margin: "10px 15px", width: "200px", height: "40px" }}

                                type="submit"

                                value={request._id}
                                onClick={handleInfo}
                              >
                                <InfoIcon style={{ marginRight: "8px" }} />
                                INFO                              
                              </button> */}
                              {/* <MKButton
                                style={
                                  request.status === "Rejected"
                                    ? { display: "none" }
                                    : { display: "flex" }
                                }
                                size="medium"
                                type="submit"
                                variant="gradient"
                                color="info"
                                sx={{
                                  minWidth: {
                                    xs: "2rem",
                                    sm: "2rem",
                                    md: "2.5rem",
                                    lg: "3rem",
                                  },

                                  padding: {
                                    xs: "10px 10px",
                                    md: "12px 12px",
                                    lg: "10px 10px",
                                    xl: "8px 8px",
                                    xxl: "8px 8px",
                                    xxxl: "4px 4px",
                                  },

                                  ml: "1rem",
                                }}
                                value={request._id}
                                onClick={handleInfo}
                              >
                                <InfoIcon style={{ marginRight: "8px" }} />
                                INFO
                               
                            </MKButton> */}

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
                                    class="mini-button"
                                    type="submit"
                                    style={{
                                      margin: "25px 0px",
                                      width: "400px",
                                      height: "40px",
                                    }}
                                    value={request._id}
                                    onClick={handleInfo}
                                  >
                                    <InfoIcon />
                                    INFO
                                  </button>
                                  {/* <MKButton
                                    size="medium"
                                    type="submit"
                                    variant="gradient"
                                    color="info"
                                    sx={{
                                      minWidth: {
                                        xs: "2rem",
                                        sm: "2rem",
                                        md: "3rem",
                                        lg: "3rem",
                                      },

                                      minHeight: {
                                        xs: "2rem",
                                        sm: "2rem",
                                        md: "2rem",
                                        lg: "2rem",
                                      },

                                      padding: {
                                        xs: "6px 10px",
                                        md: "8px 12px",
                                        lg: "6px 10px",
                                        xl: "4px 8px",
                                        xxl: "4px 8px",
                                        xxxl: "1px 4px",
                                      },

                                      ml: "2rem",
                                    }}
                                    value={request._id}
                                    onClick={handleInfo}
                                  >
                                    <InfoIcon
                                    />
                                    INFO
                                  </MKButton> */}
                                  <MKButton
                                    postion="absolute"
                                    mr={-5}
                                    size="small"
                                    type="submit"
                                    variant="outline"
                                    color="error"
                                    style={{
                                      // minWidth: "1rem",
                                      width: "1rem",
                                      marginLeft: "0rem",
                                    }}
                                    value={request._id}
                                    //added on 4.3
                                    sx={{
                                      minWidth: {
                                        xs: "1rem",
                                        sm: "1rem",
                                        md: "2.75rem",
                                        lg: "2.75rem",
                                      },
                                      minHeight: {
                                        xs: "1.75rem",
                                        sm: "1.75rem",
                                        md: "2rem",
                                        lg: "2rem",
                                      },
                                      // minWidth: "2rem",
                                      // minHeight: "2rem",
                                      padding: {
                                        xs: "6px 8px",
                                        md: "16px 10px",
                                        lg: "6px 8px",
                                        xl: "4px 6px",
                                        xxl: "4px 6px",
                                        xxxl: "2px 2px",
                                      },

                                      ml: "1rem",
                                    }}
                                  >
                                    <DeleteOutlineIcon
                                      style={styledDeleteIcon}
                                    />
                                    {/* DELETE */}
                                  </MKButton>
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
