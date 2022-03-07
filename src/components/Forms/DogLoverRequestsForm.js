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
        setLoading(false)

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
        alert("Request has been deleted");
        getRequestData();
        getApprovedRequestData();
      })
      .catch((err) => console.log(err));
  };

  //for spinner
  if (loading) return <RiseLoader color={color} loading={loading} css={override} size={40} />
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
          position="relative"
        // p={3}
        // my={2}
        >
          <Paper
            className="neuCard"
            elevation={24}
            style={{
              position: "relative",
              borderRadius: "2rem",
              // glass effect
              background: "rgba( 255, 255, 255, 0.7 )",
              boxShadow: "0 8px 40px 0 rgba(255, 61, 46, 0.5)",
              backdropFilter: "blur( 12px )",
            }}
            sx={{
              width: {
                xs: "95%",
                sm: "90%",
                md: "85%",
                xl: "85%",
                xxl: "85%",
                xxxl: "80%",
              },
              maxWidth: {
                xl: "1000px",
                xxl: "1200px",
                xxxl: "1600px",
              },
              height: "auto",
              // mt: 35,
              mt: 25,

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

            {/* ________Pink Box */}
            {/* <MKBox
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                mb: "0rem",
                pb: "0rem",
                mt: -20,
              }}
            > */}
            <MKBox
              variant="gradient"
              bgColor="info"
              //borderRadius="lg"
              borderRadius="25px"
              coloredShadow="info"
              width="60%"
              mx="12rem"
              mt="-2.5rem"
              pt="1.25rem"
              pr="1rem" pl="1rem"
              pb="1.25rem"
              textAlign="center"
            //mr="10rem"
            >
              {/* <MKBox
                variant="gradient"
                bgColor="info"
                borderRadius="25px"
                coloredShadow="info"
                mx={4}
                // mt={-4}
                p={5}
                mb={2}
                textAlign="center"
                sx={{ width: "60%" }}
              > */}
              {/* // Heading */}
              <MKTypography
                variant="h4"
                fontWeight="bold"
                color="light"
                textAlign="center"
              // mt={1}
              >
                PLAY DATE REQUESTS
              </MKTypography>
              {/* </MKBox> */}
            </MKBox>
            {/******************** REQUESTS */}
            <Grid
              container
              sx={{
                padding: "1rem",
                display: "flex",
                justifyContent: "center",
                mb: "4rem",
                minWidth: "100%",
              }}
            >
              <MKBox
                sx={{ width: { xs: "95%", xxl: "90%" } }}
                style={{
                  display: "flex",
                  height: "auto",
                  flexDirection: "column",
                  alignItems: "center",
                  //verticalAlign: "middle",
                  justifyContent: "center"
                  // border: "3px solid blue",
                }}
              >
                {dogRequestsInfo === undefined ? (
                  <h5 style={{ color: "#ff3d47", marginTop: "10%" }}>No Playdate Requests Found. </h5>
                ) : dogRequestsInfo.length === 0 ? (
                  <h5 style={{ color: "#ff3d47", marginTop: "10%" }}>No Playdate Requests Found. </h5>
                ) : (
                  ""
                )}
                {/* map thru searched dogs */}
                {dogRequestsInfo !== undefined &&
                  dogRequestsInfo.map((request, index) => {
                    return (
                      <form onSubmit={handleDelete}>
                        <Card
                          sx={neumorphicDL}
                          key={index}
                          //paddingTop="10rem"
                          //minwidth="40rem"
                          sx={{
                            minWidth: {
                              sx: "27rem",
                              sm: "27rem",
                              md: "30em",
                              lg: "50rem",
                              // xl: "50rem"
                            },
                            marginTop: {
                              sx: "2rem",
                              sm: "2rem",
                              md: "2rem",
                              lg: "2rem",
                            },
                          }}

                        // sx={{
                        //   minWidth: "50rem",
                        //   minHeight: "5rem",

                        //   paddingLeft: {
                        //     sx: "0.5rem",
                        //     sm: "1rem",
                        //     md: "2rem",
                        //     lg: "2.5rem",
                        //   },
                        //   paddingRight: {
                        //     sx: "1rem",
                        //     sm: "1.5rem",
                        //     md: "2rem",
                        //   },
                        //   paddingTop: {
                        //     sx: "1rem",
                        //     sm: "1rem",
                        //     md: "1rem",
                        //   },
                        //   paddingBottom: {
                        //     sx: "1rem",
                        //     sm: "1rem",
                        //     md: "1rem",
                        //   },
                        // }}
                        >
                          <MKBox
                            className="mainContainer"
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              padding: "1rem,",
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
                                width: {
                                  //xs:"33%",
                                  sm: "25%",
                                  md: "20%",
                                  lg: "15%",
                                  xl: "16%",
                                  xxl: "16%",
                                },
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
                                style={{ fontSize: "0.90rem" }}
                              >
                                {request.DogsRequests.name}
                              </MKTypography>
                            </MKBox>

                            {/* *************** MEETING LOCATION */}
                            <MKBox
                              className="meetingLocation"
                              sx={{
                                alignItems: "center",
                                justifyContent: "flex-start",
                                width: {
                                  sm: "25%",
                                  md: "25%",
                                  lg: "15%",
                                  xl: "16%",
                                  xxl: "16%",
                                },
                                display: { sm: "flex" },
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
                                width: {
                                  lg: "18%",
                                  xl: "19%",
                                  xxl: "19%",
                                },

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
                                {request.start_time.slice(-11, -6)} {request.start_time.slice(-3)}
                              </MKTypography>
                            </MKBox>
                            {/* *************** END TIME */}
                            <MKBox
                              className="EndTime"
                              sx={{
                                width: { lg: "18%", xl: "19%", xxl: "19%" },

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
                                {request.end_time.slice(-11, -6)} {request.end_time.slice(-3)}
                              </MKTypography>
                            </MKBox>
                            {/* *************** REQUEST STATUS */}
                            <MKBox
                              className="Status"
                              sx={{
                                width: { lg: "15%", xl: "16%", xxl: "16%" },

                                display: { xs: "none", lg: "flex" },
                              }}
                              style={{
                                alignItems: "center",
                                justifyContent: "flex-start",
                              }}
                            >
                              {/* <MKTypography
                                variant="p"
                                style={{ fontSize: "0.90rem" }}
                              >
                                {request.end_time}
                              </MKTypography> */}

                              {request.status === "Pending" ? (
                                <MKTypography
                                  variant="p"
                                  style={{
                                    fontSize: "0.90rem",
                                    color: "blue",
                                  }}
                                  //added on 4.3
                                  sx={{
                                    minWidth: {
                                      xs: "2rem",
                                      sm: "2rem",
                                      md: "3.5rem",
                                      lg: "4rem",
                                    },
                                    minHeight: {
                                      xs: "2rem",
                                      sm: "2rem",
                                      md: "2.5rem",
                                      lg: "3rem",
                                    },
                                    // minWidth: "2rem",
                                    // minHeight: "2rem",
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
                                >
                                  {request.status}
                                </MKTypography>
                              ) : (request.status === "Approved") ? (
                                <MKTypography
                                  variant="p"
                                  style={{
                                    fontSize: "0.90rem",
                                    color: "green",
                                  }}
                                  //added on 4.3
                                  sx={{
                                    minWidth: {
                                      xs: "2rem",
                                      sm: "2rem",
                                      md: "5rem",
                                      lg: "6rem",
                                    },
                                    minHeight: {
                                      xs: "2rem",
                                      sm: "2rem",
                                      md: "3.5rem",
                                      lg: "4rem",
                                    },
                                    // minWidth: "2rem",
                                    // minHeight: "2rem",
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
                                  //added on 4.3
                                  sx={{
                                    minWidth: {
                                      xs: "2rem",
                                      sm: "2rem",
                                      md: "5rem",
                                      lg: "6rem",
                                    },
                                    minHeight: {
                                      xs: "2rem",
                                      sm: "2rem",
                                      md: "2rem",
                                      lg: "2rem",
                                    },
                                    // minWidth: "2rem",
                                    // minHeight: "2rem",
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
                                justifyContent: "flex-end ",
                                //   border: "2px solid red",

                                width: { md: "20%", lg: "16%" },
                                marginRight: "1rem",
                              }}
                            >
                              <MKButton
                                size="large"
                                type="submit"
                                variant="gradient"
                                color="info"
                                sx={{
                                  minWidth: {
                                    xs: "2rem",
                                    sm: "2rem",
                                    md: "3.5rem",
                                    lg: "3.5rem",
                                  },
                                  minHeight: {
                                    xs: "2rem",
                                    sm: "2rem",
                                    md: "2rem",
                                    lg: "2rem",
                                  },
                                  // minWidth: "2rem",
                                  // minHeight: "2rem",
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
                                {/* <InfoIcon /> */}
                                INFO
                                {/* Approve / Reject */}
                              </MKButton>
                              {request.status === "Rejected" ? (
                                <MKButton
                                  size="small"
                                  type="submit"
                                  variant="gradient"
                                  color="info"
                                  style={{
                                    // minWidth: "1rem",
                                    width: "7rem",
                                    marginLeft: "0.25rem",
                                  }}
                                  value={request._id}
                                  //added on 4.3
                                  sx={{
                                    minWidth: {
                                      xs: "2rem",
                                      sm: "2rem",
                                      md: "3.5rem",
                                      lg: "3.5rem",
                                    },
                                    minHeight: {
                                      xs: "2rem",
                                      sm: "2rem",
                                      md: "2.25rem",
                                      lg: "2.25rem",
                                    },
                                    // minWidth: "2rem",
                                    // minHeight: "2rem",
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
                                >
                                  DELETE
                                </MKButton>
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
