import { useEffect, useState, useContext } from "react";
import { UserContext } from "context/UserContext";
import TopBgImg from "components/Blocks/TopBgImg";

import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKTypography from "../MKTypography";
import MKInput from "../MKInput";
import MKButton from "../MKButton";
// @mui material componentsF
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Rating from "@mui/material/Rating";
import PetsIcon from "@mui/icons-material/Pets";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Grid } from "@mui/material";
import { FaDog } from "react-icons/fa";
import BoltIcon from "@mui/icons-material/Bolt";

//for radio button
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { getDogInfoById } from "../../logic/DogFunctions";
import { useNavigate, useParams } from "react-router";
import { DogIconsGrid } from "components/Blocks/DogIconsGrid";

const DogInfoForm = () => {
  const [user, setUser] = useContext(UserContext);
  const [dogInfo, setDogInfo] = useState("");
  const [dogKidFriendly, setDogKidFriendly] = useState(0);
  const [dogCatFriendly, setDogCatFriendly] = useState(0);

  const navigate = useNavigate();

  const { dogid } = useParams();
  console.log(dogid);

  useEffect(async () => {
    console.log(user);
    await getDogInfoById(dogid)
      .then((res) => {
        console.log(res);
        setDogInfo(res);
        setDogKidFriendly(res.kid_friendly);
        console.log("Kid Friendly");
        console.log(res.kid_friendly);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChangeKidFreindly = (event, newValue) => {
    setDogKidFriendly(newValue);
  };

  const handleChangeDogCatFreindly = (event, newValue) => {
    setDogCatFriendly(newValue);
  };

  return (
    <>
      {/* // Container between top & Footer */}
      <MKBox
        px={1}
        width="100%"
        top={0}
        height="auto"
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
        <TopBgImg />
        {/* Container for body area below featured img */}
        <MKBox
          pb={12}
          mt={5}
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="center"
          minHeight="auto"
          width="100%"
        >
          <Paper
            elevation={24}
            style={{ position: "relative", borderRadius: "2rem" }}
            sx={{
              width: "80%",
              height: "auto",
              mt: -4,
              mx: { xs: 2, lg: 3 },
              position: "relative",
              mb: 4,
              backgroundColor: ({ palette: { white }, functions: { rgba } }) =>
                rgba(white.main, 0.8),
              backdropFilter: "saturate(200%) blur(30px)",
              boxShadow: ({ boxShadows: { xxl } }) => xxl,
            }}
          >
            {/* ________Pink Shape */}
            <MKBox
              color="white"
              bgColor="error"
              variant="gradient"
              borderRadius="lg"
              shadow="lg"
              opacity={1}
              m={0}
              style={{
                height: "30rem",
                borderRadius: "5% 5% 40% 90%",
                background: "linear-gradient(146deg, #ff9a85 21%, #ff3d47 75%)",
              }}
            >
              {/* Container for Profile Pic */}
              <MKBox
                zindex={2}
                mx={4}
                mt={-8}
                mb={4}
                pt={5}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                //   style={{ border: "3px solid blue" }}
              >
                {/* dog pic */}
                <MKAvatar
                  zindex={2}
                  src={`${dogInfo.profile_photo}`}
                  alt={`${dogInfo.name}`}
                  shadow="xl"
                  sx={{ width: "12rem", height: "12rem" }}
                  style={{
                    border: "3px solid white",
                    backgroundColor: "white",
                    marginTop: "-6rem",
                  }}
                />
                <MKTypography
                  pt={2}
                  variant="h1"
                  fontWeight="medium"
                  color="light"
                  textAlign="center"
                >
                  {`${dogInfo.name}`}
                </MKTypography>
              </MKBox>
              {/* Breed & Age Container */}
              <Grid container spacing={2} style={{ padding: "0 5rem" }}>
                <Grid
                  item
                  xs={12}
                  md={6}
                  display="flex"
                  justifyContent="flex-end"
                >
                  <MKBox
                    variant="outlined"
                    color="white"
                    style={{
                      width: "15rem",
                      borderRadius: "1rem",
                      padding: "1rem",
                      backgroundColor: "rgba(255, 171, 149, 0.5)",
                      minimumWidth: "100px",
                    }}
                  >
                    <MKTypography
                      variant="h6"
                      fontWeight="medium"
                      color="light"
                      textAlign="left"
                    >
                      BREED
                    </MKTypography>

                    <MKTypography
                      variant="h4"
                      fontWeight="medium"
                      color="light"
                      textAlign="left"
                    >
                      {`${dogInfo.breed}`}
                    </MKTypography>
                  </MKBox>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  display="flex"
                  justifyContent="flex-start"
                >
                  <MKBox
                    variant="outlined"
                    color="white"
                    style={{
                      width: "15rem",
                      borderRadius: "1rem",
                      padding: "1rem",
                      backgroundColor: "rgba(255, 171, 149, 0.5)",
                      minimumWidth: "100px",
                    }}
                  >
                    <MKTypography
                      variant="h6"
                      fontWeight="medium"
                      color="light"
                      textAlign="left"
                    >
                      AGE
                    </MKTypography>

                    <MKTypography
                      variant="h4"
                      fontWeight="medium"
                      color="light"
                      textAlign="left"
                    >
                      {`${dogInfo.age_years}`}y {`${dogInfo.age_months}`}m
                    </MKTypography>
                  </MKBox>
                </Grid>
              </Grid>
            </MKBox>

            {/* ************************** Dog Details */}

            <DogIconsGrid dogInfo={dogInfo} />
          </Paper>
        </MKBox>
      </MKBox>
    </>
  );
};

export default DogInfoForm;
