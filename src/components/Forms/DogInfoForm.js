import { useEffect, useState, useContext } from "react";
import { UserContext } from "context/UserContext";
import { spinnerContainer } from "../../styles/CustomStyles";
import DogAvatar from "../../assets/images/avatars/dog-av-grad.png";

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
import { DogIconsGrid } from "components/Forms/DogIconsGrid";
import DogRequestModal from "../Modals/DogRequestModal";
//for spinner
import RiseLoader from "react-spinners/RiseLoader";
import { override } from "styles/CustomStyles";

import "../../styles/buttonStyles.css";

const DogInfoForm = () => {
  const [user, setUser] = useContext(UserContext);
  const [dogInfo, setDogInfo] = useState("");
  const [dogKidFriendly, setDogKidFriendly] = useState(0);
  const [dogCatFriendly, setDogCatFriendly] = useState(0);
  const [dogId, setDogId] = useState();

  //for modal
  const [show, setShow] = useState(false);
  const toggleModal = () => setShow(!show);
  //for spinner
  const [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ff3d47");

  const navigate = useNavigate();
  const { dogid } = useParams();

  useEffect(async () => {
    await getDogInfoById(dogid)
      .then((res) => {
        // console.log(res);
        setDogInfo(res);
        setDogKidFriendly(res.kid_friendly);
        // console.log("Kid Friendly");
        // console.log(res.kid_friendly);
        setDogId(res._id);
        // console.log(res._id);

        //for spinner
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleClickGoBack = () => {
    navigate("/user/searchdog");
  };

  //for spinner
  if (loading)
    <div style={spinnerContainer}>
      <RiseLoader color={color} loading={loading} css={override} size={40} />
    </div>;
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
            background: "rgba( 255, 255, 255, 0.8 )",
            borderRadius: "25px",
            boxShadow: "0 8px 40px 0 rgba(255, 61, 46, 0.5)",
          }}
          sx={{
            width: { xs: "95%", sm: "90%", md: "85%", xl: "80%" },
            maxWidth: "1100px",
            height: "auto",
            mt: 45,
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
            <DogRequestModal
              show={show}
              setShow={setShow}
              toggleModal={toggleModal}
              // dogLoverId={dogLoverId}
              // setDogLoverId={setDogLoverId}
              dogId={dogId}
              setDogId={setDogId}
              //added on 6/3/2022
              dogInfo={dogInfo}
            />
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
                  marginTop: "-9rem",
                }}
              >
                <img
                  src={DogAvatar}
                  alt="avatar"
                  style={{ width: "100%", height: "100%" }}
                />
              </MKAvatar>
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
                    width: "18rem",
                    borderRadius: "1rem",
                    padding: "1rem",
                    backgroundColor: "rgba(255, 171, 149, 0.5)",
                    minimumWidth: "100px",
                  }}
                >
                  <MKTypography
                    variant="h2"
                    fontSize="1.2rem"
                    fontWeight="medium"
                    color="light"
                    textAlign="left"
                    pb={0.5}
                  >
                    BREED
                  </MKTypography>

                  <MKTypography
                    variant="h4"
                    fontWeight="medium"
                    color="light"
                    textAlign="center"
                    fontSize="1.8rem"
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
                    width: "18rem",
                    borderRadius: "1rem",
                    padding: "1rem",
                    backgroundColor: "rgba(255, 171, 149, 0.5)",
                    minimumWidth: "100px",
                  }}
                >
                  <MKTypography
                    variant="h2"
                    fontSize="1.2rem"
                    fontWeight="medium"
                    color="light"
                    textAlign="left"
                    pb={0.5}
                  >
                    AGE
                  </MKTypography>

                  <MKTypography
                    variant="h4"
                    fontWeight="medium"
                    color="light"
                    textAlign="center"
                    fontSize="1.8rem"
                  >
                    {`${dogInfo.age_years}`}y {`${dogInfo.age_months}`}m
                  </MKTypography>
                </MKBox>
              </Grid>
            </Grid>
          </MKBox>

          {/* ************************** Dog Details */}

          <DogIconsGrid dogInfo={dogInfo} />

          {/* ************************** Buttons */}
          <Grid
            container
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Grid
              item
              sm={12}
              md={6}
              style={{ padding: "1rem" }}
              mb={8}
              mt={-4}
            >
              <MKBox
                justifyContent="center"
                sx={{ display: { xs: "block", md: "flex" } }}
                textAlign="center"
                width="100%"
              >
                <button
                  className="glow-on-hover"
                  onClick={handleClickGoBack}
                  style={{
                    margin: "10px 25px",
                    minWidth: "230px",
                    height: "70px",
                  }}
                >
                  Find More Dogs
                </button>
                <button
                  className="glow-on-hover"
                  onClick={toggleModal}
                  style={{
                    margin: "10px 25px",
                    minWidth: "280px",
                    height: "70px",
                  }}
                >
                  Play Date Request
                </button>
              </MKBox>
            </Grid>
          </Grid>
        </Paper>
      </MKBox>
    </>
  );
};

export default DogInfoForm;
