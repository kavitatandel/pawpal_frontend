import { useEffect, useState, useContext } from "react";
import { UserContext } from "context/UserContext";
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKTypography from "../MKTypography";
import MKInput from "../MKInput";
import MKButton from "../MKButton";
import { Grid, TextField } from "@mui/material";
import Rating from "@mui/material/Rating";
import PetsIcon from "@mui/icons-material/Pets";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import DogAvatar from "../../assets/images/avatars/dog-av-grad.png";

//for radio button
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { addDog } from "../../logic/DogFunctions";
import { useNavigate } from "react-router";
import UploadDogPicModal from "../Modals/UploadDogPicModal";

import "../../styles/buttonStyles.css";

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

  //for image show
  const [imageModal, setImageModal] = useState();

  //for radio group
  const handleChangeSize = (e) => {
    setDogSize(e.target.value);
  };

  //for energy radio group
  const handleChangeEnergy = (e) => {
    setDogEnergy(e.target.value);
  };

  //for can play fetch
  const handleCanPlay = (e) => {
    setDogCanPlay(e.target.value);
  };

  const onSaveHandler = () => {
    navigate("/owner/ownerdogs");
  };

  useEffect(() => {
    console.log(dogPic);

    //print out image from modal
    // console.log(imageModal);
    // console.log(setImageModal);
  }, [dogPic]);

  //add dog
  const addNewDog = async (e) => {
    e.preventDefault();

    ///*************commented to check for uploaded image */

    const uploadData = new FormData();
    //console.log(dogPic)
    if (dogPic !== null) {
      uploadData.append("file", dogPic, "file");
      // console.log("after appending ")
    }
    //uploadData.append("file", dogPic, "file");
    uploadData.append("user_id", user._id);
    uploadData.append("name", dogName);
    uploadData.append("breed", dogBreed);
    uploadData.append("age_years", dogAgeYears);
    uploadData.append("age_months", dogAgeMonths);
    uploadData.append("size", dogSize);
    uploadData.append("description", dogDescription);
    uploadData.append("energy", dogEnergy);
    uploadData.append("kid_friendly", dogKidFriendly);
    uploadData.append("cat_friendly", dogCatFriendly);
    uploadData.append("dog_friendly", dogFriendly);
    uploadData.append("obedience", dogObedience);
    uploadData.append("can_stay_home", dogCanStayHome);
    uploadData.append("exercise_type", dogExercise);
    uploadData.append("can_play_fetch", dogCanPlay);

    await addDog(uploadData)
      .then((res) => {
        navigate("/owner/ownerdogs");
      })
      .catch((err) => console.log(err));
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
            background: "rgba( 255, 255, 255, 0.8 )",
            borderRadius: "25px",
            boxShadow: "0 8px 40px 0 rgba(255, 61, 46, 0.5)",
          }}
          sx={{
            width: { xs: "95%", sm: "90%", md: "85%", xl: "80%" },
            maxWidth: "1000px",
            height: "auto",
            mt: 45,
            pb: "3rem",
            mx: { xs: 2, lg: 3 },
            position: "relative",
            mb: 10,
          }}
        >
          <UploadDogPicModal
            show={show}
            setShow={setShow}
            toggleModal={toggleModal}
            dogPic={dogPic}
            setDogPic={setDogPic}
            imageModal={imageModal}
            setImageModal={setImageModal}
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
              height: "15rem",
              borderRadius: "5% 5% 40% 90%",
              background: "linear-gradient(146deg, #ff9a85 21%, #ff3d47 75%)",
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
                    // src=""
                    src={`${imageModal}`}
                    alt="Dog"
                    shadow="xl"
                    sx={{ width: "12rem", height: "12rem" }}
                    style={{
                      borderStyle: "ridge",
                      border: "3px solid white",
                      backgroundColor: "white",
                      marginTop: "-6rem",
                    }}
                  >
                    <img
                      src={DogAvatar}
                      alt="avatar"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </MKAvatar>

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
                <Grid
                  item
                  xs={12}
                  mt={5}
                  display="flex"
                  justifyContent="center"
                >
                  {/* ************************* HEADING */}

                  <MKTypography
                    variant="h1"
                    fontWeight="medium"
                    color="light"
                    textalign="center"
                    mt={-3}
                  >
                    Dog Details
                  </MKTypography>
                </Grid>
              </Grid>
            </Grid>
          </MKBox>
          {/* ************************* DOG DETAILS */}
          <MKBox
            width="auto"
            component="form"
            method="post"
            autocomplete="off"
            role="form"
            onSubmit={addNewDog}
          >
            <Grid
              container
              spacing={1}
              p={4}
              style={{ padding: "2rem", boxSizing: "border-box" }}
              display="flex"
              justifyContent="center"
              margin={0}
            >
              <Grid
                item
                xs={12}
                sm={6}
                style={{ padding: "1rem" }}
                display="flex"
                justifyContent="center"
              >
                <MKInput
                  label="Name"
                  fullWidth
                  style={{ width: "80%" }}
                  type="text"
                  name="name"
                  value={dogName}
                  placeholder="Enter dog name"
                  required
                  onChange={(e) => setDogName(e.target.value)}
                  autofocus
                  tabIndex={1}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                style={{ padding: "1rem" }}
                display="flex"
                justifyContent="center"
              >
                <MKInput
                  fullWidth
                  style={{ width: "80%" }}
                  label="Breed"
                  type="text"
                  name="breed"
                  placeholder="Enter breed"
                  required
                  value={dogBreed}
                  onChange={(e) => setDogBreed(e.target.value)}
                  tabIndex={2}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                style={{ padding: "1rem" }}
                display="flex"
                justifyContent="center"
              >
                <MKInput
                  fullWidth
                  style={{ width: "80%" }}
                  label="Age Years"
                  name="age_years"
                  placeholder="Enter age in years"
                  type="number"
                  value={dogAgeYears}
                  onChange={(e) => setDogAgeYears(e.target.value)}
                  InputProps={{ inputProps: { min: 0, max: 30 } }}
                  tabIndex={3}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                style={{ padding: "1rem" }}
                display="flex"
                justifyContent="center"
              >
                <MKInput
                  style={{ width: "80%" }}
                  label="Age Months"
                  name="age_months"
                  placeholder="Enter age in months"
                  type="number"
                  value={dogAgeMonths}
                  onChange={(e) => setDogAgeMonths(e.target.value)}
                  InputProps={{ inputProps: { min: 0, max: 11 } }}
                  tabIndex={4}
                />
              </Grid>
              <Grid item xs={12} style={{ padding: "1rem" }}>
                <MKBox display="flex" justifyContent="center">
                  <TextField
                    id="outlined-multiline-static"
                    multiline
                    maxRows={8}
                    style={{ width: "90%" }}
                    label="About"
                    type="text"
                    name="description"
                    placeholder="Tell us about your dog..."
                    value={dogDescription.description}
                    onChange={(e) => setDogDescription(e.target.value)}
                  />

                  {/* <MKButton
              variant="text"
              color="dark"
              //   onClick={(e) => setFirstName(e.target.value)}
            >
              Edit
            </MKButton> */}
                </MKBox>
              </Grid>

              <Grid item xs={12} sm={4} style={{ padding: "1rem" }}>
                <MKBox
                  display="flex"
                  justifyContent="flex-start"
                  ml="2.5rem"
                  sx={{
                    justifyContent: {
                      xs: "center",
                      sm: "flex-start",
                    },
                    ml: { xs: "0", sm: "2.5rem" },
                  }}
                >
                  <FormControl>
                    <Typography
                      component="legend"
                      variant="h6"
                      textalign="center"
                      mb="1rem"
                    >
                      Size
                    </Typography>
                    {/* <FormLabel
                          style={{ fontSize: "0.70em", color: "Gray" }}
                          size="small"
                        >
                          Size
                        </FormLabel> */}
                    <RadioGroup
                      name="controlled-radio-buttons-group"
                      //value={user.user_type}
                      value={dogSize}
                      onChange={handleChangeSize}
                      size="small"
                      column
                    >
                      <FormControlLabel
                        value="small"
                        control={
                          <Radio size="small" style={{ fontSize: "0.70em" }} />
                        }
                        label="Small"
                      />
                      <FormControlLabel
                        value="medium"
                        control={
                          <Radio
                            size="small"
                            style={{ fontSize: "0.70em" }}
                            tabIndex={5}
                          />
                        }
                        label="Medium"
                      />
                      <FormControlLabel
                        value="large"
                        control={
                          <Radio size="small" style={{ fontSize: "0.70em" }} />
                        }
                        label="Large"
                      />
                    </RadioGroup>
                  </FormControl>
                </MKBox>
              </Grid>
              <Grid item xs={12} sm={4} style={{ padding: "1rem" }}>
                <MKBox
                  display="flex"
                  justifyContent="flex-start"
                  sx={{
                    justifyContent: { xs: "center", sm: "flex-start" },
                    ml: { xs: "0", sm: "2.5rem" },
                  }}
                >
                  <FormControl>
                    <Typography
                      component="legend"
                      variant="h6"
                      textalign="center"
                      mb="1rem"
                    >
                      Energy
                    </Typography>
                    {/* <FormLabel
                          style={{ fontSize: "0.70em", color: "Gray" }}
                          size="small"
                        >
                          Energy
                        </FormLabel> */}
                    <RadioGroup
                      name="controlled-radio-buttons-group"
                      //value={user.user_type}
                      value={dogEnergy}
                      onChange={handleChangeEnergy}
                      size="small"
                      column
                    >
                      <FormControlLabel
                        value="low"
                        control={
                          <Radio size="small" style={{ fontSize: "0.70em" }} />
                        }
                        label="Low"
                      />
                      <FormControlLabel
                        value="medium"
                        control={
                          <Radio size="small" style={{ fontSize: "0.70em" }} />
                        }
                        label="Medium"
                      />
                      <FormControlLabel
                        value="high"
                        control={
                          <Radio size="small" style={{ fontSize: "0.70em" }} />
                        }
                        label="High"
                      />
                    </RadioGroup>
                  </FormControl>
                </MKBox>
              </Grid>
              <Grid item xs={12} sm={4} style={{ padding: "1rem" }}>
                <MKBox
                  display="flex"
                  sx={{
                    justifyContent: { xs: "center", sm: "flex-start" },
                    ml: { xs: "0", sm: "1rem" },
                  }}
                >
                  <FormControl style={{ paddingLeft: "8%" }}>
                    <Typography
                      component="legend"
                      variant="h6"
                      textalign="center"
                      mb="1rem"
                    >
                      Can Play Fetch
                    </Typography>
                    {/* <FormLabel
                          style={{
                            fontSize: "0.70em",
                            color: "Gray",
                          }}
                          size="small"
                        >
                          Can Play Fetch
                        </FormLabel> */}
                    <RadioGroup
                      name="controlled-radio-buttons-group"
                      //value={user.user_type}
                      value={dogCanPlay}
                      onChange={handleCanPlay}
                      size="small"
                      column
                    >
                      <FormControlLabel
                        value="true"
                        control={
                          <Radio size="small" style={{ fontSize: "0.70em" }} />
                        }
                        label="Yes"
                      />
                      <FormControlLabel
                        value="false"
                        control={
                          <Radio size="small" style={{ fontSize: "0.70em" }} />
                        }
                        label="No"
                      />
                    </RadioGroup>
                  </FormControl>
                </MKBox>
              </Grid>

              <Grid item xs={12} sm={6} md={4} style={{ padding: "1rem" }}>
                <Typography component="legend" variant="h6" textalign="center">
                  Kid Friendly
                </Typography>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    height: "3rem",
                    paddingTop: "1rem",
                  }}
                >
                  <StyledRating
                    onChange={(e) => setDogKidFriendly(e.target.value)}
                    name="kidfriendly"
                    defaultValue={dogKidFriendly}
                    precision={1}
                    icon={
                      <PetsIcon
                        fontSize="inherit"
                        style={{ marginRight: "0.2rem" }}
                      />
                    }
                    emptyIcon={
                      <PetsIcon
                        fontSize="inherit"
                        style={{ marginRight: "0.2rem" }}
                      />
                    }
                  />
                </div>
              </Grid>

              <Grid item xs={12} sm={6} md={4} style={{ padding: "1rem" }}>
                <Typography component="legend" variant="h6" textalign="center">
                  Cat Friendly
                </Typography>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    height: "3rem",
                    paddingTop: "1rem",
                  }}
                >
                  <StyledRating
                    onChange={(e) => setDogCatFriendly(e.target.value)}
                    name="catfriendly"
                    defaultValue={dogCatFriendly}
                    precision={1}
                    icon={
                      <PetsIcon
                        fontSize="inherit"
                        style={{ marginRight: "0.2rem" }}
                      />
                    }
                    emptyIcon={
                      <PetsIcon
                        fontSize="inherit"
                        style={{ marginRight: "0.2rem" }}
                      />
                    }
                  />
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={4} style={{ padding: "1rem" }}>
                <Typography component="legend" variant="h6" textalign="center">
                  Dog Friendly
                </Typography>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    height: "3rem",
                    paddingTop: "1rem",
                  }}
                >
                  <StyledRating
                    onChange={(e) => setDogFriendly(e.target.value)}
                    name="dogfriendly"
                    defaultValue={dogFriendly}
                    precision={1}
                    icon={
                      <PetsIcon
                        fontSize="inherit"
                        style={{ marginRight: "0.2rem" }}
                      />
                    }
                    emptyIcon={
                      <PetsIcon
                        fontSize="inherit"
                        style={{ marginRight: "0.2rem" }}
                      />
                    }
                  />
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={4} style={{ padding: "1rem" }}>
                <Typography component="legend" variant="h6" textalign="center">
                  Obedience
                </Typography>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    height: "3rem",
                    paddingTop: "1rem",
                  }}
                >
                  <StyledRating
                    onChange={(e) => setDogObedience(e.target.value)}
                    name="dogfriendly"
                    defaultValue={dogObedience}
                    precision={1}
                    icon={
                      <PetsIcon
                        fontSize="inherit"
                        style={{ marginRight: "0.2rem" }}
                      />
                    }
                    emptyIcon={
                      <PetsIcon
                        fontSize="inherit"
                        style={{ marginRight: "0.2rem" }}
                      />
                    }
                  />
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={4} style={{ padding: "1rem" }}>
                <Typography component="legend" variant="h6" textalign="center">
                  Can stay home alone
                </Typography>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    height: "3rem",
                    paddingTop: "1rem",
                  }}
                >
                  <StyledRating
                    onChange={(e) => setDogCanStayHome(e.target.value)}
                    name="dogfriendly"
                    defaultValue={dogCanStayHome}
                    precision={1}
                    icon={
                      <PetsIcon
                        fontSize="inherit"
                        style={{ marginRight: "0.2rem" }}
                      />
                    }
                    emptyIcon={
                      <PetsIcon
                        fontSize="inherit"
                        style={{ marginRight: "0.2rem" }}
                      />
                    }
                  />
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={4} style={{ padding: "1rem" }}>
                <Typography component="legend" variant="h6" textalign="center">
                  Exercise Needs
                </Typography>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    height: "3rem",
                    paddingTop: "1rem",
                  }}
                >
                  <StyledRating
                    onChange={(e) => setDogExercise(e.target.value)}
                    name="dogfriendly"
                    defaultValue={dogExercise}
                    precision={1}
                    icon={
                      <PetsIcon
                        fontSize="inherit"
                        style={{ marginRight: "0.2rem" }}
                      />
                    }
                    emptyIcon={
                      <PetsIcon
                        fontSize="inherit"
                        style={{ marginRight: "0.2rem" }}
                      />
                    }
                  />
                </div>
              </Grid>
              <Grid item xs={12} style={{ padding: "1rem" }}>
                {/* _______________________ Buttons */}
                <MKBox
                  mt={5}
                  mb={5}
                  justifyContent="center"
                  sx={{ display: { xs: "block", md: "flex" } }}
                  textalign="center"
                  width="100%"
                >
                  <button
                    className="glow-on-hover"
                    onClick={() => navigate("/owner/ownerdogs")}
                    style={{
                      margin: "10px 25px",
                      width: "150px",
                      height: "50px",
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="glow-on-hover"
                    style={{
                      margin: "10px 25px",
                      width: "150px",
                      height: "50px",
                    }}
                  >
                    Save
                  </button>
                </MKBox>
              </Grid>
            </Grid>
          </MKBox>
        </Paper>
      </MKBox>
    </>
  );
};

export default AddDogForm;

////////////////////// Rating

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

const TrueRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#81ffc4",
  },
  "& .MuiRating-iconHover": {
    color: "#1ac975",
  },
});

const FalseRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

const EnergyRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ffcb5a",
  },
  "& .MuiRating-iconHover": {
    color: "#fb8c00",
  },
});
