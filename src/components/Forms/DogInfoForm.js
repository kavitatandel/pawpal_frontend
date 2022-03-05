import { useEffect, useState, useContext } from "react";
import { UserContext } from "context/UserContext";
import TopBgImg from "components/Blocks/TopBgImg";
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
        setLoading(false)
      })
      .catch((err) => console.log(err));
  }, []);

  const handleClickGoBack = () => {
    navigate("/user/searchdog");
  };

  //for spinner
  if (loading) return <RiseLoader color={color} loading={loading} css={override} size={40} />
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
              width: { xs: "90%", sm: "95%", md: "80%", lg: "70%", xl: "50%" },
              height: "auto",
              mt: -12,
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
              <DogRequestModal
                show={show}
                setShow={setShow}
                toggleModal={toggleModal}
                // dogLoverId={dogLoverId}
                // setDogLoverId={setDogLoverId}
                dogId={dogId}
                setDogId={setDogId}
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
                      width: "15rem",
                      borderRadius: "1rem",
                      padding: "1rem",
                      backgroundColor: "rgba(255, 171, 149, 0.5)",
                      minimumWidth: "100px",
                    }}

                  //                 {`${dogInfo.name}`}
                  //               </MKTypography>
                  //               {/* ************************** Dog Details */}
                  //               <MKBox pt={1} pb={3} px={3}>
                  //                 <MKBox
                  //                   component="form"
                  //                   method="post"
                  //                   autocomplete="off"
                  //                   role="form"
                  //                   p={6}
                  //                 ></MKBox>

                  //                 </MKBox>
                  //                 <MKBox mb={2} display="flex" justifyContent="space-between">
                  //                   <MKTypography color="dark" textAlign="center">
                  //                     Breed:
                  //                   </MKTypography>
                  //                   <MKTypography
                  //                     fontWeight="regular"
                  //                     color="dark"
                  //                     textAlign="center"
                  //                   >
                  //                     {`${dogInfo.breed}`}
                  //                   </MKTypography>
                  //                   <MKTypography
                  //                     fontWeight="regular"
                  //                     color="dark"
                  //                     textAlign="center"
                  //                   >
                  //                     Age:
                  //                   </MKTypography>
                  //                   <MKTypography
                  //                     fontWeight="regular"
                  //                     color="dark"
                  //                     textAlign="center"
                  //                   >
                  //                     {`${dogInfo.age_years}`} yrs. {`${dogInfo.age_months}`}{" "}
                  //                     months
                  //                   </MKTypography>
                  //                   {/* <MKTypography
                  //                     fontWeight="regular"
                  //                     color="dark"
                  //                     textAlign="center"
                  //                   >
                  //                     Size:
                  //                   </MKTypography>
                  //                   <MKTypography
                  //                     fontWeight="regular"
                  //                     color="dark"
                  //                     textAlign="center"
                  //                   >
                  //                     {`${dogInfo.size}`}
                  //                   </MKTypography>
                  //                   <MKTypography
                  //                     fontWeight="regular"
                  //                     color="dark"
                  //                     textAlign="center"
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
                  <MKButton
                    size="large"
                    onClick={handleClickGoBack}
                    variant="gradient"
                    color="info"
                    style={{
                      width: "8rem",
                      minWidth: "200px",
                      margin: "1rem",
                    }}
                  >
                    Find More Dogs
                  </MKButton>
                  <MKButton
                    size="large"
                    onClick={toggleModal}
                    variant="gradient"
                    color="info"
                    style={{
                      width: "8rem",
                      minWidth: "200px",
                      margin: "1rem",
                    }}
                  >
                    Play Date Request
                  </MKButton>
                </MKBox>
              </Grid>
            </Grid>
          </Paper>
        </MKBox>
      </MKBox>
    </>
  );
};

export default DogInfoForm;
