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

  const iconStyle = {
    transform: "scale(1.5)",
  };

  const iconButtonStyle = {};

  return (
    <>
      {/* Entire Page Container (without footer) */}
      {/* ******************** 2 MASTER DIVS REQUIRED FOR EACH PAGE: MKBox & Paper */}
      <MKBox
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
            sx={{
              padding: "1rem",
              display: "flex",
              justifyContent: "center",
              mb: "7rem",
            }}
          >
            <MKBox
              sx={{ width: { xs: "95%", xxl: "80%" } }}
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
                // Neumorphic Box underneath button
                sx={{
                  display: "flex",
                  alignSelf: { sm: "center", md: "flex-end" },
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
                    >
                      ADD DOG
                    </MKTypography>
                    <AddCircleIcon style={addDogIcon} />
                  </div>
                </MKButton>
              </MKBox>
              {/* *********************************************************** Dog List *************/}
              {dogs !== undefined &&
                dogs.map((dog, index) => {
                  return (
                    /* ************************** List Item Card */

                    <Card sx={neumorphic}>
                      <MKBox
                        className="mainContainer"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding: "1rem,",
                          minHeight: "5rem",
                        }}
                      >
                        {/* *************** DOG PIC */}
                        <MKBox
                          className="Avatar"
                          sx={{
                            width: { sm: "25%", lg: "16%" },
                            display: { md: "flex" },
                            minWidth: "3.2rem",
                            paddingLeft: {
                              sx: "0.5rem",
                              sm: "1rem",
                              md: "2rem",
                              lg: "2.5rem",
                            },
                          }}
                          style={{
                            justifyContent: "flex-start",
                            alignItems: "center",
                          }}
                        >
                          <MKAvatar
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
                        </MKBox>
                        {/* *************** DOG NAME */}
                        <MKBox
                          className="DogName"
                          sx={{
                            alignItems: "center",
                            justifyContent: "flex-start",
                            width: { sm: "25%", md: "20%", lg: "16%" },
                            display: { sm: "flex" },
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
                            {dog.breed}
                          </MKTypography>
                        </MKBox>
                        {/* *************** DOG SIZE */}
                        <MKBox
                          className="Size"
                          sx={{
                            width: { md: "20%", lg: "16%" },
                            display: { xs: "none", md: "flex" },
                          }}
                          style={{
                            alignItems: "center",
                            justifyContent: "flex-start",
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
                            {dog.age_years} yrs {dog.age_months} mon.
                          </MKTypography>
                        </MKBox>
                        {/* *************** INFO BUTTON */}
                        <MKBox
                          className="ButtonContainer"
                          sx={{
                            width: { sm: "25%", md: "25%", lg: "16%" },
                            display: { sm: "flex" },
                            alignItems: "center",
                            justifyContent: "flex-end ",
                            paddingRight: {
                              sx: "0.5rem",
                              sm: "1rem",
                              md: "2rem",
                              lg: "2.5rem",
                            },
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
                            }}
                            onClick={() =>
                              navigate(`/doginfo/${dog.dogs_info._id}`)
                            }
                          >
                            <InfoIcon
                              style={{
                                transform: "1.8",
                              }}
                            />
                          </MKButton>
                        </MKBox>
                      </MKBox>
                    </Card>
                  );
                })}
            </MKBox>
          </Grid>
        </Paper>
      </MKBox>
    </>
  );
};

export default OwnerDogsForm;
