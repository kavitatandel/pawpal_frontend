import { useEffect, useState, useContext } from "react";
import { UserContext } from "context/UserContext";
import { spinnerContainer } from "../../styles/CustomStyles";
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKTypography from "../MKTypography";

// @mui material components
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
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
import swal from "sweetalert";
import RequestGridHeading from "./RequestGridHeading";

//for spinner
import RiseLoader from "react-spinners/RiseLoader";
import { override } from "styles/CustomStyles";
import "../../styles/buttonStyles.css";
import "../../styles/extraStyles.css";

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

  //generate random index number

  //for spinner
  const [loading, setLoading] = useState(true);
  const [approvedLoading, setApprovedLoading] = useState(true);
  let [color, setColor] = useState("#ff3d47");

  //get dog 'Pending' requests
  const getRequestData = () => {
    const owner_id = user._id;
    GetPlayDateRequestsForOwner(owner_id)
      .then((res) => {
        setDogRequestsInfo(res);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        //for spinner
        setLoading(false);
        console.log("Pending Requests loading complete");
      });
  };

  //get dog 'Approved' request
  const getApprovedRequestData = () => {
    const owner_id = user._id;
    GetApprovedRequestsForOwner(owner_id)
      .then((res) => {
        // console.log(res)
        setDogApprovedRequestsInfo(res);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        //for spinner
        setApprovedLoading(false);
        console.log("Approved Requests loading complete");
      });
  };

  const handleApproveReject = (e) => {
    e.preventDefault();

    //get the clicked item id
    const selectedRequestId = e.target.value;
    console.log(selectedRequestId);
    //find selected request id data
    const selectedRequest = dogRequestsInfo.find(
      (dogRequest) => dogRequest._id === selectedRequestId
    );
    setSelectedDogRequest(selectedRequest);

    toggleModal();
  };

  useEffect(() => {
    getRequestData();
    getApprovedRequestData();
  }, [showApproved]);

  console.log(dogRequestsInfo);
  console.log(dogApprovedRequestsInfo);
  console.log(selectedDogRequest);

  //for spinner
  if (loading || approvedLoading)
    return (
      <div style={spinnerContainer}>
        <RiseLoader color={color} loading={loading} css={override} size={40} />
      </div>
    );
  return (
    <>
      <MKBox
        pt="0px !important"
        mt="0px !important"
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
        minHeight="80vh"
        top={0}
        width="100%"
        // style={{ border: "3px solid red" }}
      >
        <MKBox
          width="100%"
          mx="auto"
          mr={0}
          ml={0}
          sx={{ padding: { xxxxs: "1rem", md: "2rem" } }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          // border="3px solid lime"
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
            <h1> </h1>
          )}
          <Paper
            elevation={24}
            sx={{
              width: {
                xxxxs: "105%",
                xs: "95%",
                sm: "90%",
                md: "85%",
                lg: "80%",
                xl: "75%",
                xxl: "70%",
              },
              maxWidth: "1000px",
              minWidth: "200px",
              height: "auto",
              mt: "10rem",
              mb: "8rem",
              pb: "8rem",
              px: "1rem",
              mx: { xs: 2, lg: 3 },
              background: "rgba(255, 255, 255, 0.8)",
              borderRadius: "25px",
              boxShadow: "0 8px 40px 0 rgba(255, 61, 46, 0.5)",
            }}
          >
            {/* _________ div fixes pink block in position */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                // border: "4px solid blue",
                marginTop: "-2rem",
              }}
            >
              {/* ____________PINK BOX */}
              <MKBox
                variant="gradient"
                bgColor="info"
                //borderRadius="lg"
                borderRadius="25px"
                coloredShadow="info"
                mb="2rem"
                display="flex"
                alignItems="center"
                justifyContent="center"
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
                <MKTypography
                  variant="h4"
                  fontWeight="bold"
                  color="light"
                  style={{ textAlign: "center" }}
                >
                  PLAY DATE REQUESTS
                </MKTypography>
                {/* </MKBox> */}
              </MKBox>
            </div>

            {/******************** PENDING REQUESTS */}
            <Grid
              container
              sx={{
                padding: "0rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                // border: "4px solid red",
                mt: 0,
              }}
            >
              <MKBox
                mt={0}
                mb={0}
                pb={0}
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                // border="3px solid yellow"
              >
                {/* // Heading */}
                <MKTypography
                  style={{ textAlign: "center" }}
                  variant="h4"
                  fontWeight="bold"
                  color="dark"
                  mt="3rem"
                  pb="0rem"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  PENDING REQUESTS
                </MKTypography>
              </MKBox>
              <MKBox
                sx={{ width: { xs: "95%", xxl: "90%" } }}
                style={{
                  display: "flex",
                  height: "auto",
                  flexDirection: "column",
                  alignItems: "center",
                  paddingBottom: "0rem",
                  // border: "3px solid blue",
                }}
              >
                {/* map thru searched dogs */}
                {dogRequestsInfo === undefined ? (
                  <h5
                    style={{
                      color: "#ff3d47",
                      padding: "2rem",
                      // border: "3px solid lime",
                    }}
                  >
                    No Playdate Requests Found.
                  </h5>
                ) : dogRequestsInfo.length === 0 ? (
                  <h5
                    style={{
                      color: "#ff3d47",
                      padding: "2rem",
                      // border: "3px solid blue",
                    }}
                  >
                    No Playdate Requests Found.
                  </h5>
                ) : (
                  // ""
                  <RequestGridHeading />
                )}
                {dogRequestsInfo !== undefined &&
                  dogRequestsInfo.map((request) => {
                    return (
                      <Card
                        sx={{
                          flexBasis: 1,
                          padding: {
                            xxxs: "0rem",
                            md: "0 0.5rem",
                            lg: "0 0.25rem",
                          },
                          margin: "1.5rem 0.5rem 0 0.5rem",
                          height: "5rem",
                          background: "#f4efee",
                          boxShadow:
                            "14.11px 14.11px 24px #dedad9, -14.11px -14.11px 24px #FFFFFF",
                          display: "flex",
                          // border: "5px solid yellow",
                          justifyContent: "center",
                        }}
                        key={Math.floor(Math.random() * 9999)}
                      >
                        <MKBox
                          className="mainContainer"
                          style={{
                            minHeight: "5rem",
                            // width: "100% !important",
                            // minWidth: "175px",
                          }}
                          sx={{
                            width: {
                              xxxxs: "65vw",
                              xxxs: "70vw",
                              xxs: "80vw",
                              xs: "75vw",
                              sm: "75vw",
                              md: "65vw",
                              lg: "65vw",
                              xl: "60vw",
                              xxl: "58vw",
                              xxxl: "45vw",
                              xxxxl: "40vw",
                            },
                            minWidth: "165px",
                            maxWidth: "850px",

                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "1rem",
                            // border: "2px solid red !important",
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
                              src={`${request.DogLovers.profile_pic}`}
                              alt={`${request.DogLovers.first_name}`}
                              shadow="xl"
                              sx={{ width: "3.5rem", height: "3.5rem" }}
                              style={{
                                border: "3px solid #ff9a85",
                                boxSizing: "border-box",
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
                              width: { sm: "25%", md: "20%" },
                              display: {
                                xxxxs: "none",
                                xxs: "flex",
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
                              {`${request.DogLovers.first_name} 
                        ${request.DogLovers.last_name}`}
                            </MKTypography>
                          </MKBox>
                          {/* *************** DOG NAME */}
                          <MKBox
                            className="DogName"
                            sx={{
                              width: { sm: "25%", md: "20%" },
                              display: {
                                xxxxs: "none",
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
                              style={{ fontSize: "0.90rem" }}
                            >
                              {request.DogsRequests.name}
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
                          <MKBox
                            className="ButtonContainer"
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              // border: "2px solid lime",
                              minWidth: "70px",
                              width: { md: "20%", lg: "12%" },
                              marginRight: "0rem",
                            }}
                          >
                            <button
                              id="miniBtn"
                              className="mini-button"
                              type="submit"
                              value={request._id}
                              onClick={handleApproveReject}
                            >
                              <InfoIcon className="infoIcon" />
                              INFO
                            </button>
                          </MKBox>
                        </MKBox>
                      </Card>
                    );
                  })}
              </MKBox>
            </Grid>

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
