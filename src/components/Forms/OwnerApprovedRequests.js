import { useState, useContext } from "react";
import { UserContext } from "context/UserContext";
import "../../styles/extraStyles.css";
import "../../styles/buttonStyles.css";

// @mui material components
import Card from "@mui/material/Card";
import { Grid } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import HumanAvatar from "../../assets/images/avatars/human-av-grad.png";
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKTypography from "../MKTypography";
// Modals
import OwnerApprovedRequestModal from "../Modals/OwnerApprovedRequestModal";
import RequestGridHeading from "./RequestGridHeading";

const OwnerApprovedRequests = ({
  dogApprovedRequestsInfo,
  setDogApprovedRequestsInfo,
}) => {
  const [user, setUser] = useContext(UserContext);
  const [dogRequestsInfo, setDogRequestsInfo] = useState([]);
  const [selectedDogRequest, setSelectedDogRequest] = useState([]);

  //for modal
  const [show, setShow] = useState(false);
  //commented to get request again when user approve/reject
  const toggleModal = () => setShow(!show);

  const handleInfo = (e) => {
    e.preventDefault();

    //get the clicked item id
    const selectedRequestId = e.target.value;
    console.log(selectedRequestId);
    //find selected request id data
    const selectedRequest = dogApprovedRequestsInfo.find(
      (dogRequest) => dogRequest._id === selectedRequestId
    );
    setSelectedDogRequest(selectedRequest);
    console.log(selectedRequest);
    toggleModal();
  };

  return (
    <>
      {selectedDogRequest.length !== 0 ? (
        <OwnerApprovedRequestModal
          show={show}
          setShow={setShow}
          toggleModal={toggleModal}
          selectedDogRequest={selectedDogRequest}
          setSelectedDogRequest={setSelectedDogRequest}
        />
      ) : (
        <h1 style={{ padding: "0rem" }}> </h1>
      )}
      {/******************** APPROVED REQUESTS */}
      {/* Heading Grid component */}

      <Grid
        // container
        sx={{
          padding: "0rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          // border: "4px solid lime",
          mt: 0,
        }}
      >
        <MKBox
          // style={{ border: "4px solid green" }}
          mt={2}
          mb={0}
          pb={0} //added 10/3
          display="flex"
          alignItems="center"
          justifyContent="center"
          // border="3px solid yellow"
        >
          {/* // Heading */}
          <MKTypography
            // style={{ border: "4px solid purple" }}
            variant="h4"
            fontWeight="bold"
            color="dark"
            mt="3rem"
            pb="0rem"
            style={{ textAlign: "center" }}
          >
            APPROVED REQUESTS
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
          {/* <RequestGridHeading /> */}
          {/* map thru searched dogs */}
          {dogApprovedRequestsInfo === undefined ? (
            <h5
              style={{
                color: "#ff3d47",
                padding: "2rem",
              }}
            >
              No Playdate Requests Found.
            </h5>
          ) : dogApprovedRequestsInfo.length === 0 ? (
            <h5
              style={{
                color: "#ff3d47",
                padding: "2rem",
              }}
            >
              No Playdate Requests Found.
            </h5>
          ) : (
            // ""
            <RequestGridHeading />
          )}

          {dogApprovedRequestsInfo !== undefined &&
            dogApprovedRequestsInfo.map((request, index) => {
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
                  key={index}
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
                      position: "relative",
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
                      <MKTypography variant="p" style={{ fontSize: "0.90rem" }}>
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
                      <MKTypography variant="p" style={{ fontSize: "0.90rem" }}>
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
                        width: { lg: "10%" },
                        display: { xxxxs: "none", lg: "flex" },
                      }}
                      style={{
                        alignItems: "center",
                        justifyContent: "flex-start",
                        // border: "2px solid red",
                      }}
                    >
                      <MKTypography variant="p" style={{ fontSize: "0.90rem" }}>
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
                      <MKTypography variant="p" style={{ fontSize: "0.90rem" }}>
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
                        onClick={handleInfo}
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
    </>
  );
};

export default OwnerApprovedRequests;
