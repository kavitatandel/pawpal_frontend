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
import DogAvatar from "../../assets/images/avatars/dog-av-grad.png";

import { dogsByOwner } from "../../logic/DogFunctions";
import { useNavigate } from "react-router";

//for spinner
import RiseLoader from "react-spinners/RiseLoader";
import { override } from "styles/CustomStyles";
import "../../styles/buttonStyles.css";
import "../../styles/extraStyles.css";
import { KeyboardReturnRounded } from "@mui/icons-material";

const OwnerDogsForm = () => {
  const [user, setUser] = useContext(UserContext);
  const [dogs, setDogs] = useState([]);
  const navigate = useNavigate();

  //for spinner
  const [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ff3d47");

  useEffect(() => {
    //getDogsByOwner(user._id);
    console.log(user._id);
    dogsByOwner(user._id)
      .then((res) => {
        console.log(res);
        setDogs(res);
      })
      .catch((err) => console.log(err))
      .finally(() =>
        //for spinner
        setLoading(false)
      );
  }, []);

  const handleChangeAdd = () => {
    navigate("/owner/adddog");
  };

  const addDogIcon = {
    color: "rgba(255,119,106, 0.7)",
    transform: "scale(1.8)",
    // border: "2px solid red",
  };

  //for spinner
  if (loading)
    return (
      <div style={spinnerContainer}>
        <RiseLoader color={color} loading={loading} css={override} size={40} />
      </div>
    );
  return (
    <>
      {/* Entire Page Container (without footer) */}
      {/* ******************** 2 MASTER DIVS REQUIRED FOR EACH PAGE: MKBox & Paper */}
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
              mx: { xxxxs: 2, lg: 3 },
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
                {/* // Heading */}
                <MKTypography
                  variant="h4"
                  fontWeight="bold"
                  color="light"
                  style={{ textAlign: "center" }}
                >
                  MY DOGS
                </MKTypography>
              </MKBox>
            </div>

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
                sx={{ width: { xxxxs: "95%", xxl: "80%" } }}
                style={{
                  display: "flex",

                  height: "auto",
                  flexDirection: "column",
                  alignItems: "center",
                  paddingTop: "1rem",
                  // border: "3px solid blue",
                }}
              >
                <MKBox
                  sx={{ width: { xxxxs: "95%", xxl: "90%" } }}
                  style={{
                    display: "flex",
                    height: "auto",
                    flexDirection: "column",
                    alignItems: "center",
                    paddingBottom: "1rem",
                    paddingTop: "0rem",
                    // border: "3px solid blue",
                  }}
                >
                  <Card
                    // Neumorphic Box underneath button
                    sx={{
                      display: "flex",
                      alignSelf: { sm: "center", md: "flex-end" },
                      alignItems: "center",
                      maxWidth: "280px",
                      minWidth: "160px",
                      height: "auto",
                      WebkitBorderRadius: "20px",
                      borderRadius: "20px",
                      background: "#f4efee",
                      boxShadow:
                        "14.11px 14.11px 24px #dedad9, -14.11px -14.11px 24px #FFFFFF",
                      padding: "0rem",
                    }}
                  >
                    <MKButton
                      sx={{
                        // display: { xxxxs: "block", md: "flex" },
                        textAlign: "center",
                        backgroundColor: "rgba(243, 239, 238, 0.6)",
                        color: "rgba(255,119,106, 0.7)",
                        height: "auto",
                        WebkitBorderRadius: "20px",
                        borderRadius: "20px",
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
                        maxWidth: "200px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "0",
                        // border: "2px solid red !important",
                      }}
                      onClick={handleChangeAdd}
                    >
                      <MKBox
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "80px",
                          width: "100%",
                        }}
                        // border="3px solid lime"
                      >
                        <MKBox
                          style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "center",
                            padding: "1rem 0 1rem 1rem",
                          }}
                          // border="3px solid red"
                        >
                          <MKTypography
                            variant="h5"
                            fontWeight="bold"
                            color="#ff776a"
                            pt="0.2rem"
                            // border="3px solid blue"
                          >
                            ADD DOG
                          </MKTypography>
                        </MKBox>
                        <MKBox
                          style={{
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            padding: "1rem",
                          }}
                          // border="3px solid red"
                        >
                          <AddCircleIcon style={addDogIcon} />
                        </MKBox>
                      </MKBox>
                    </MKButton>
                  </Card>
                </MKBox>
                <MKBox
                  sx={{ width: { xxxxs: "95%", xxl: "90%" } }}
                  style={{
                    display: "flex",
                    height: "auto",
                    flexDirection: "column",
                    alignItems: "center",
                    paddingBottom: "0rem",
                    // border: "3px solid blue",
                  }}
                >
                  {/* *********************************************************** Dog List *************/}
                  {dogs === undefined ? (
                    <h5 style={{ color: "#ff3d47", marginTop: "10%" }}>
                      No Dogs Found.
                    </h5>
                  ) : dogs.length === 0 ? (
                    <h5 style={{ color: "#ff3d47", marginTop: "10%" }}>
                      No Dogs Found.{" "}
                    </h5>
                  ) : (
                    ""
                  )}
                  {dogs !== undefined &&
                    dogs.map((dog) => {
                      return (
                        /* ************************** List Item Card */

                        <Card
                          sx={{
                            flexBasis: 1,
                            padding: {
                              xxxxs: "0rem",
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
                                // border: "2px solid lime",
                              }}
                            >
                              <MKAvatar
                                src={`${dog.profile_photo}`}
                                alt={`${dog.name}`}
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
                                alignItems: "center",
                                justifyContent: "flex-start",
                                width: { xxxxs: "30%", md: "25%", lg: "20%" },
                                display: { xxxxs: "none", xxs: "flex" },
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
                                {dog.name}
                              </MKTypography>
                            </MKBox>
                            {/* *************** DOG BREED */}
                            <MKBox
                              className="DogType"
                              sx={{
                                width: { sm: "30%", md: "25%", lg: "22%" },
                                display: { xxxxs: "none", sm: "flex" },
                              }}
                              style={{
                                fontSize: "0.8rem",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                // border: "2px solid red",
                              }}
                            >
                              <MKTypography
                                variant="p"
                                style={{ fontSize: "0.90rem" }}
                              >
                                {dog.breed}
                              </MKTypography>
                            </MKBox>
                            {/* *************** DOG SIZE */}
                            <MKBox
                              className="Size"
                              sx={{
                                width: { xxxxs: "20%", lg: "16%" },
                                display: { xxxxs: "none", md: "flex" },
                                paddingLeft: { xxxxs: "1rem", lg: "2rem" },
                              }}
                              style={{
                                alignItems: "center",
                                justifyContent: "flex-start",
                                // border: "2px solid yellow",
                              }}
                            >
                              {dog.size ? (
                                <MKTypography
                                  variant="p"
                                  style={{ fontSize: "0.90rem" }}
                                >
                                  {dog.size}
                                </MKTypography>
                              ) : (
                                <MKTypography
                                  variant="p"
                                  style={{ fontSize: "0.90rem" }}
                                >
                                  -
                                </MKTypography>
                              )}
                            </MKBox>
                            {/* *************** DOG AGE */}
                            <MKBox
                              className="Age"
                              sx={{
                                width: { lg: "16%" },
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
                                {dog.age_years} yrs {dog.age_months} mon.
                              </MKTypography>
                            </MKBox>
                            {/* *************** INFO BUTTON */}
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
                                onClick={() => navigate(`/editdog/${dog._id}`)}
                              >
                                <InfoIcon style={{ marginRight: "8px" }} />
                                INFO
                              </button>
                            </MKBox>
                          </MKBox>
                        </Card>
                      );
                    })}
                </MKBox>
              </MKBox>
            </Grid>
          </Paper>
        </MKBox>
      </MKBox>
    </>
  );
};

export default OwnerDogsForm;
