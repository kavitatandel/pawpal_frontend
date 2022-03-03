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

import { dogsByOwner } from "../../logic/DogFunctions";
import { useNavigate } from "react-router";

const OwnerDogsForm = () => {
  const [user, setUser] = useContext(UserContext);
  const [dogs, setDogs] = useState([]);
  const navigate = useNavigate();

  // const getDogsByOwner = (user_id) => {
  //     dogsByOwner(user_id).then((res) => {
  //         console.log(res)
  //         setDogs(res);
  //     })
  //         .catch((err) => console.log(err));
  // }

  useEffect(() => {
    //getDogsByOwner(user._id);

    dogsByOwner(user._id)
      .then((res) => {
        console.log(res);
        setDogs(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChangeAdd = () => {
    navigate("/owner/adddog");
  };

  const addDogStyle = {
    backgroundColor: "transparent",
    padding: "1.2rem 2rem",
    border: "3px solid rgba(255,119,106, 0.2) ",
    color: "rgba(255,119,106, 0.7)",
    width: "15rem",
    height: "auto",
  };

  const addDogIcon = {
    color: "rgba(255,119,106, 0.7)",
    transform: "scale(1.8)",
  };

  return (
    <>
      {/* Entire Page Container (without footer) */}
      {/* ******************** 2 MASTER DIVS REQUIRED FOR EACH PAGE: MKBox & Paper */}
      <MKBox
        px={1}
        width="100%"
        top={0}
        minHeight="100%"
        mx="auto"
        mr={0}
        ml={0}
        position="relative"
        zindex={-1}
        // sx={{ padding: "0", border: "2px solid blue" }}
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
          }}
          sx={{
            width: { xs: "95%", sm: "90%", md: "80%", xl: "70%" },
            maxWidth: "1000px",
            height: "auto",
            mt: 35,

            mx: { xs: 2, lg: 3 },
            position: "relative",
            mb: 10,
          }}
        >
          {/* ________Pink Box */}
          <MKBox
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              mb: "0rem",
              pb: "0rem",
            }}
          >
            <MKBox
              variant="gradient"
              bgColor="info"
              borderRadius="25px"
              coloredShadow="info"
              mx={4}
              mt={-4}
              p={5}
              mb={2}
              textAlign="center"
              sx={{ width: "50%" }}
            >
              {/* // Heading */}
              <MKTypography
                variant="h2"
                fontWeight="bold"
                color="light"
                textAlign="center"
                // mt={1}
              >
                MY DOGS
              </MKTypography>
            </MKBox>
          </MKBox>

          <Grid
            container
            xs={12}
            display="flex"
            justifyContent="center"
            mt="0rem"
            mb="0rem"
          ></Grid>
          <Grid
            container
            sx={{
              padding: "1rem",
              display: "flex",
              justifyContent: "center",
              mb: "7rem",
            }}
          >
            <Grid
              item
              xs={12}
              display="flex"
              justifyContent="flex-end"
              pr="1.2rem"
              mb="0rem"
            >
              <MKBox
                // Neumorphic Box under button
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "15rem",
                  height: "auto",

                  borderRadius: "5%",
                  background: "#f4efee",
                  boxShadow:
                    "14.11px 14.11px 24px #dedad9, -14.11px -14.11px 24px #FFFFFF",
                }}
              >
                <MKButton style={addDogStyle} onClick={handleChangeAdd}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-apart",
                      alignItems: "center",
                    }}
                  >
                    <MKTypography
                      variant="h5"
                      fontWeight="bold"
                      color="#ff776a"
                      pr="2rem"

                      // mt={1}
                    >
                      ADD DOG
                    </MKTypography>
                    <AddCircleIcon style={addDogIcon} />
                  </div>
                </MKButton>
              </MKBox>
            </Grid>
            {/* ************************** Dog List */}
            {/* map thru searched dogs */}
            {dogs !== undefined &&
              dogs.map((dog, index) => {
                return (
                  /* ************************** List Item Card */
                  <Grid
                    item
                    xs={12}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Grid container>
                      <Card
                        flex-basis="1"
                        style={{
                          width: "95%",
                          height: "5rem",
                          marginTop: "2rem",
                          background: "#f4efee",
                          boxShadow:
                            "14.11px 14.11px 24px #dedad9, -14.11px -14.11px 24px #FFFFFF",
                        }}
                      >
                        <div
                          className="mainContainer"
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignContent: "center",
                            padding: "1rem",
                          }}
                        >
                          {/* ********** AVATAR ************* */}
                          <Grid item className="Avatar">
                            <div
                              style={{
                                width: "15%",
                                marginLeft: "0.5rem",
                                marginRight: "0.5rem",
                                justifyContent: "flex-start",
                                alignItems: "center",
                              }}
                            >
                              <MKAvatar
                                top={-50}
                                zIndex={2}
                                src={`${dog.profile_photo}`}
                                alt={`${dog.name}`}
                                shadow="xl"
                                sx={{ width: "3rem", height: "3rem" }}
                                style={{
                                  border: "2px solid white",
                                  marginRight: "1rem",
                                  background:
                                    "linear-gradient(145deg, #FFFFFF, #C1C3C6)",
                                  borderRadius: "100%",
                                  boxShadow:
                                    "14.11px 14.11px 24px #D9DADE, -14.11px -14.11px 24px #FFFFFF",
                                }}
                              />
                            </div>
                          </Grid>
                          {/* ********** DOG NAME ************* */}
                          <Grid item className="DogName" md={2.4}>
                            <MKBox
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                //   border: "2px solid red",
                                width: "25%",
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
                          </Grid>
                          {/* ********** DOG BREED ************* */}
                          <Grid item className="DogType">
                            <div
                              style={{
                                fontSize: "0.8rem",
                                width: "20%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                width: "20%",
                              }}
                            >
                              <MKTypography
                                variant="p"
                                style={{ fontSize: "0.90rem" }}
                              >
                                {dog.breed}
                              </MKTypography>
                            </div>
                          </Grid>
                          {/* ********** DOG AGE ************* */}
                          <Grid item className="Age">
                            <div
                              style={{
                                //   border: "2px solid red",
                                width: "20%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                width: "25%",
                              }}
                            >
                              <MKTypography
                                variant="p"
                                style={{ fontSize: "0.90rem" }}
                              >
                                {dog.size}
                              </MKTypography>
                            </div>
                            <div
                              className="Age"
                              style={{
                                //   border: "2px solid red",
                                width: "20%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                width: "25%",
                              }}
                            >
                              <MKTypography
                                variant="p"
                                style={{ fontSize: "0.90rem" }}
                              >
                                {dog.age_years} yrs {dog.age_months} mon.
                              </MKTypography>
                            </div>
                          </Grid>
                          {/* ********** BUTTON CONTAINER ************* */}
                          <Grid item className="ButtonContainer">
                            <div
                              className="ButtonContainer"
                              style={{
                                width: "20%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-end ",
                                //   border: "2px solid red",
                                width: "15%",
                                marginRight: "1rem",
                              }}
                            >
                              <MKButton
                                size="small"
                                type="submit"
                                variant="gradient"
                                color="info"
                                style={{
                                  minWidth: "1rem",
                                }}
                              >
                                Edit
                              </MKButton>
                            </div>
                          </Grid>
                        </div>
                      </Card>
                    </Grid>
                  </Grid>
                );
              })}
            {/* </MKBox> */}
          </Grid>
        </Paper>
      </MKBox>
    </>
  );
};

export default OwnerDogsForm;
