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
import HumanAvatar from "../../assets/images/avatars/human-av-grad.png";

import {
  GetPlayDateRequestsForOwner,
  UpdatePlayDateRequest,
  GetApprovedRequestsForOwner,
} from "../../logic/PlayDateFunctions";
import { useNavigate, useParams } from "react-router";
import DogApproveRejectModal from "../Modals/DogApproveRejectModal";
import OwnerApprovedRequests from "./OwnerApprovedRequests";

//for spinner
import RiseLoader from "react-spinners/RiseLoader";
import { override } from "styles/CustomStyles";


const OwnerDogRequestsForm = () => {
  const [user, setUser] = useContext(UserContext);
  const [dogRequestsInfo, setDogRequestsInfo] = useState([]);
  const [dogApprovedRequestsInfo, setDogApprovedRequestsInfo] = useState([]);
  const [selectedDogRequest, setSelectedDogRequest] = useState([]);
  const navigate = useNavigate();

  //for modal
  const [show, setShow] = useState(false);
  //commented to get request again when user approve/reject
  const toggleModal = () => setShow(!show);

  //to show Approved component
  const [showApproved, setShowApproved] = useState(true);

  //for spinner
  const [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ff3d47");


  //get dog 'Pending' requests
  const getReuqestData = () => {
    const owner_id = user._id;
    GetPlayDateRequestsForOwner(owner_id)
      .then((res) => {
        setDogRequestsInfo(res);

      })
      .catch((err) => console.log(err));
  };

  //get dog 'Approved' request
  const getApprovedReuqestData = () => {
    const owner_id = user._id;
    GetApprovedRequestsForOwner(owner_id)
      .then((res) => {
        // console.log(res)
        setDogApprovedRequestsInfo(res);

        //for spinner
        setLoading(false)

      })
      .catch((err) => console.log(err));
  };

  // useEffect(() => {
  //     getReuqestData();
  //     getApprovedReuqestData();
  // }, [toggleModal])

  useEffect(() => {
    getReuqestData();
    getApprovedReuqestData();

  }, [showApproved]);

  const handleApproveReject = (e) => {
    e.preventDefault();

    //get the clicked item id
    const selectedRequestId = e.target.value;
    //find selected request id data
    const selectedRequest = dogRequestsInfo.find(
      (dogRequest) => dogRequest._id === selectedRequestId
    );
    setSelectedDogRequest(selectedRequest);

    toggleModal();
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
              // marginTop: "0rem" //added on 9/3/2022
            }}
            sx={{
              width: { xs: "95%", sm: "90%", md: "85%", xl: "80%" },
              maxWidth: "1000px",
              height: "auto",
              mt: 35,

              mx: { xs: 2, lg: 3 },
              position: "relative",
              mb: 10,
            }}

          >
            {selectedDogRequest.length !== 0 ? (
              <DogApproveRejectModal
                show={show}
                setShow={setShow}
                toggleModal={toggleModal}
                selectedDogRequest={selectedDogRequest}
                setSelectedDogRequest={setSelectedDogRequest}
                setShowApproved={setShowApproved}
                showApproved={showApproved}
              />
            ) : (
              <h1></h1>
            )}
            {/* ________Pink Box */}
            {/* <MKBox
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                mb: "0rem",
                pb: "0rem",
                mt: -4,
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
            <MKBox textAlign="center" mt={2}>
              {/* // Heading */}
              <MKTypography
                variant="h4"
                fontWeight="bold"
                color="dark"
                textAlign="center"
              // mt={1}
              >
                Pending Requests
              </MKTypography>
            </MKBox>

            {/******************** PENDING REQUESTS */}
            <Grid
              container
              sx={{
                padding: "1rem",
                display: "flex",
                justifyContent: "center",
                mb: "4rem",
              }}
            >
              <MKBox
                sx={{ width: { xs: "95%", xxl: "90%" } }}
                style={{
                  display: "flex",
                  height: "auto",
                  flexDirection: "column",
                  alignItems: "center",

                  // border: "3px solid blue",
                }}
              >
                {/* map thru searched dogs */}
                {dogRequestsInfo === undefined ? (
                  <h5 style={{ color: "#ff3d47" }}>No Playdate Requests Found. </h5>
                ) : dogRequestsInfo.length === 0 ? (
                  <h5 style={{ color: "#ff3d47" }}>No Playdate Requests Found. </h5>
                ) : (
                  ""
                )}
                {dogRequestsInfo !== undefined &&
                  dogRequestsInfo.map((request, index) => {
                    return (
                      <Card sx={neumorphic} key={index}>
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
                              src={`${request.DogLovers.profile_pic}`}
                              alt={`${request.DogLovers.first_name}`}
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
                            <MKTypography
                              variant="p"
                              fontWeight="medium"
                              style={{ fontSize: "0.90rem" }}
                            >
                              {`${request.DogLovers.first_name} 
                        ${request.DogLovers.last_name}`}
                            </MKTypography>
                          </MKBox>
                          {/* *************** DOG NAME */}
                          <MKBox
                            className="DogName"
                            sx={{
                              width: { sm: "25%", md: "20%", lg: "12%" },
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
                              {request.DogsRequests.name}
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
                              {request.start_time.slice(-11, -6)} {request.start_time.slice(-3)}
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
                              {request.end_time.slice(-11, -6)} {request.end_time.slice(-3)}
                            </MKTypography>
                          </MKBox>
                          <MKBox
                            className="ButtonContainer"
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "flex-end ",
                              //   border: "2px solid red",

                              width: { md: "20%", lg: "12%" },
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
                                  md: "2.5rem",
                                  lg: "3rem",
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
                              value={request._id}
                              onClick={handleApproveReject}
                            >
                              {/* <InfoIcon /> */}
                              INFO
                              {/* Approve / Reject */}
                            </MKButton>
                          </MKBox>
                        </MKBox>
                      </Card>
                    );
                  })}
              </MKBox>
            </Grid>
            <MKBox textAlign="center" mt={2}>
              {/* // Heading */}
              <MKTypography
                variant="h4"
                fontWeight="bold"
                color="dark"
                textAlign="center"
              // mt={1}
              >
                Approved Requests
              </MKTypography>
            </MKBox>
            <OwnerApprovedRequests
              dogApprovedRequestsInfo={dogApprovedRequestsInfo}
              setDogApprovedRequestsInfo={setDogApprovedRequestsInfo}
            />
          </Paper>
        </MKBox>
      </MKBox>
    </>
  );
};

export default OwnerDogRequestsForm;
