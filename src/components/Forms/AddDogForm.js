import { useEffect, useState, useContext } from "react";
import { UserContext } from "context/UserContext";
import TopBgImg from "components/Blocks/TopBgImg";
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKTypography from "../MKTypography";
import MKInput from "../MKInput";
import MKButton from "../MKButton";
import { Grid } from "@mui/material";
// @mui material components
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Paper from "@mui/material/Paper";

//for radio button
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { addDog } from "../../logic/DogFunctions";
import { useNavigate } from "react-router";
import UploadDogPicModal from "../Modals/UploadDogPicModal";
import { DogIconsGrid } from "components/Blocks/DogIconsGrid";
import DogInputsGrid from "components/Blocks/DogInputsGrid";

const AddDogForm = () => {
  const [user, setUser] = useContext(UserContext);
  const [dogName, setDogName] = useState("");
  const [dogBreed, setDogBreed] = useState("");
  const [dogAgeYears, setDogAgeYears] = useState(null);
  const [dogAgeMonths, setDogAgeMonths] = useState(null);
  const [dogSize, setDogSize] = useState("small");
  const [dogEnergy, setDogEnergy] = useState("low");
  const [dogCanPlay, setDogCanPlay] = useState(true);
  const [dogKidFriendly, setDogKidFriendly] = useState(0);
  const [dogCatFriendly, setDogCatFriendly] = useState(0);
  const [dogFriendly, setDogFriendly] = useState(0);
  const [dogObedience, setDogObedience] = useState(0);
  const [dogCanStayHome, setDogCanStayHome] = useState(0);
  const [dogExercise, setDogExercise] = useState(0);
  const [dogDescription, setDogDescription] = useState("");

  //for dog pic modal
  const [show, setShow] = useState(false);
  const toggleModal = () => setShow(!show);
  const [dogPic, setDogPic] = useState(null);

  const navigate = useNavigate();

  //   //for radio group
  //   const handleChangeSize = (e) => {
  //     setDogSize(e.target.value);
  //   };

  //   //for energy radio group
  //   const handleChangeEnergy = (e) => {
  //     setDogEnergy(e.target.value);
  //   };

  //   //for can play fetch
  //   const handleCanPlay = (e) => {
  //     setDogCanPlay(e.target.value);
  //   };

  //   const handleChangeKidFreindly = (event, newValue) => {
  //     setDogKidFriendly(newValue);
  //   };

  //   const handleChangeDogCatFreindly = (event, newValue) => {
  //     setDogCatFriendly(newValue);
  //   };

  //   const handleChangeDogFreindly = (event, newValue) => {
  //     setDogFriendly(newValue);
  //   };

  //   const handleChangeDogObedience = (event, newValue) => {
  //     setDogObedience(newValue);
  //   };

  //   const handleChangeDogCanStayHome = (event, newValue) => {
  //     setDogCanStayHome(newValue);
  //   };

  //   const handleChangeDogExercise = (event, newValue) => {
  //     setDogExercise(newValue);
  //   };

  //   useEffect(() => {
  //     console.log(dogPic);
  //   }, [dogPic]);

  //   //add dog
  //   const addNewDog = async (e) => {
  //     e.preventDefault();

  //     ///*************commented to check for uploaded image */
  //     // const newDog = {
  //     //     user_id: user._id,
  //     //     name: dogName,
  //     //     breed: dogBreed,
  //     //     age_years: dogAgeYears,
  //     //     age_months: dogAgeMonths,
  //     //     size: dogSize,
  //     //     description: dogDescription,
  //     //     energy: dogEnergy,
  //     //     kid_friendly: dogKidFriendly,
  //     //     cat_friendly: dogCatFriendly,
  //     //     dog_friendly: dogFriendly,
  //     //     obedience: dogObedience,
  //     //     can_stay_home: dogCanStayHome,
  //     //     exercise_type: dogExercise,
  //     //     can_play_fetch: dogCanPlay,
  //     //     profile_photo: dogPic,
  //     // }
  //     // await addDog(newDog).then((res) => {
  //     //     navigate('/user')
  //     // })
  //     //     .catch((err) => console.log(err));
  //     ///*************commented to check for uploaded image */

  //     const uploadData = new FormData();
  //     //console.log(dogPic)
  //     if (dogPic !== null) {
  //       uploadData.append("file", dogPic, "file");
  //       // console.log("after appending ")
  //     }
  //     //uploadData.append("file", dogPic, "file");
  //     uploadData.append("user_id", user._id);
  //     uploadData.append("name", dogName);
  //     uploadData.append("breed", dogBreed);
  //     uploadData.append("age_years", dogAgeYears);
  //     uploadData.append("age_months", dogAgeMonths);
  //     uploadData.append("size", dogSize);
  //     uploadData.append("description", dogDescription);
  //     uploadData.append("energy", dogEnergy);
  //     uploadData.append("kid_friendly", dogKidFriendly);
  //     uploadData.append("cat_friendly", dogCatFriendly);
  //     uploadData.append("dog_friendly", dogFriendly);
  //     uploadData.append("obedience", dogObedience);
  //     uploadData.append("can_stay_home", dogCanStayHome);
  //     uploadData.append("exercise_type", dogExercise);
  //     uploadData.append("can_play_fetch", dogCanPlay);

  //     await addDog(uploadData)
  //       .then((res) => {
  //         navigate("/owner/ownerdogs");
  //       })
  //       .catch((err) => console.log(err));
  //   };

  return (
    <>
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
        {/* Container for top background Image */}

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
                width: { xs: "90%", md: "70%", xl: "40%" },
                height: "auto",
                mt: -12,
                mx: { xs: 2, lg: 3 },
                position: "relative",
                mb: 4,
                backgroundColor: ({
                  palette: { white },
                  functions: { rgba },
                }) => rgba(white.main, 0.8),
                backdropFilter: "saturate(200%) blur(30px)",
                boxShadow: ({ boxShadows: { xxl } }) => xxl,
              }}
            >
              <UploadDogPicModal
                show={show}
                setShow={setShow}
                toggleModal={toggleModal}
                dogPic={dogPic}
                setDogPic={setDogPic}
              />

              {/* ________Pink Shape */}
              <MKBox
                color="white"
                bgColor="error"
                variant="gradient"
                borderRadius="lg"
                shadow="lg"
                opacity={1}
                mt={-12}
                style={{
                  height: "20rem",
                  borderRadius: "5% 5% 40% 90%",
                  background:
                    "linear-gradient(146deg, #ff9a85 21%, #ff3d47 75%)",
                }}
              >
                {/* Container for Dog Pic */}
                <Grid container>
                  <Grid item xs={12}>
                    <MKBox
                      ml={6}
                      display="flex"
                      justifyContent="center"
                      alignItems="flex-end"
                    >
                      <MKAvatar
                        top={-50}
                        zindex={2}
                        src=""
                        shadow="xl"
                        sx={{ width: "12rem", height: "12rem" }}
                        style={{
                          border: "3px solid white",
                          backgroundColor: "white",
                          marginTop: "-6rem",
                        }}
                      />

                      <MKButton
                        variant="text"
                        onClick={toggleModal}
                        style={{
                          width: "2rem",
                          height: "2rem",
                          marginLeft: -12,
                        }}
                      >
                        ADD
                      </MKButton>
                    </MKBox>
                    <Grid item xs={12} mt={5}>
                      {/* ************************* HEADING */}
                      <MKTypography
                        variant="h1"
                        fontWeight="medium"
                        color="light"
                        textAlign="center"
                      >
                        Dog Details
                      </MKTypography>
                    </Grid>
                  </Grid>
                </Grid>
              </MKBox>

              <DogInputsGrid
                dogName={dogName}
                setDogName={setDogName}
                dogBreed={dogBreed}
                setDogBreed={setDogBreed}
                dogAgeYears={dogAgeYears}
                setDogAgeYears={setDogAgeYears}
                dogAgeMonths={dogAgeMonths}
                setDogAgeMonths={setDogAgeMonths}
                dogSize={dogSize}
                setDogSize={setDogSize}
                dogEnergy={dogEnergy}
                setDogEnergy={setDogEnergy}
                dogCanPlay={dogCanPlay}
                setDogCanPlay={setDogCanPlay}
                dogKidFriendly={dogKidFriendly}
                setDogKidFriendly={setDogKidFriendly}
                dogCatFriendly={dogCatFriendly}
                setDogCatFriendly={setDogCatFriendly}
                dogFriendly={dogFriendly}
                setDogFriendly={setDogFriendly}
                dogObedience={dogObedience}
                setDogObedience={setDogObedience}
                dogCanStayHome={dogCanStayHome}
                dogExercise={dogExercise}
                setDogExercise={setDogExercise}
                dogDescription={dogDescription}
                setDogDescription={setDogDescription}
              />
            </Paper>
          </MKBox>
        </MKBox>
      </MKBox>
    </>
  );
};

export default AddDogForm;
