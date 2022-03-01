import { useEffect, useState, useContext } from "react";
import { UserContext } from "context/UserContext";
import TopBgImg from "components/Blocks/TopBgImg";
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

//for radio button
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { addDog } from "../../logic/DogFunctions";
import { useNavigate } from "react-router";
import UploadDogPicModal from "../Modals/UploadDogPicModal";

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
  }, [dogPic]);

  //add dog
  const addNewDog = async (e) => {
    e.preventDefault();

    ///*************commented to check for uploaded image */
    // const newDog = {
    //     user_id: user._id,
    //     name: dogName,
    //     breed: dogBreed,
    //     age_years: dogAgeYears,
    //     age_months: dogAgeMonths,
    //     size: dogSize,
    //     description: dogDescription,
    //     energy: dogEnergy,
    //     kid_friendly: dogKidFriendly,
    //     cat_friendly: dogCatFriendly,
    //     dog_friendly: dogFriendly,
    //     obedience: dogObedience,
    //     can_stay_home: dogCanStayHome,
    //     exercise_type: dogExercise,
    //     can_play_fetch: dogCanPlay,
    //     profile_photo: dogPic,
    // }
    // await addDog(newDog).then((res) => {
    //     navigate('/user')
    // })
    //     .catch((err) => console.log(err));
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
                  spacing={2}
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
                    justifyContent="flex-end"
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
                    justifyContent="flex-start"
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
                    justifyContent="flex-end"
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
                    justifyContent="flex-start"
                  >
                    <MKInput
                      fullWidth
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

                  <Grid item xs={12} lg={4} style={{ padding: "1rem" }}>
                    <MKBox display="flex" justifyContent="center">
                      <FormControl>
                        <FormLabel
                          style={{ fontSize: "0.70em", color: "Gray" }}
                          size="small"
                        >
                          Size
                        </FormLabel>
                        <RadioGroup
                          name="controlled-radio-buttons-group"
                          //value={user.user_type}
                          value={dogSize}
                          onChange={handleChangeSize}
                          size="small"
                          row
                        >
                          <FormControlLabel
                            value="small"
                            control={
                              <Radio
                                size="small"
                                style={{ fontSize: "0.70em" }}
                              />
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
                              <Radio
                                size="small"
                                style={{ fontSize: "0.70em" }}
                              />
                            }
                            label="Large"
                          />
                        </RadioGroup>
                      </FormControl>
                    </MKBox>
                  </Grid>
                  <Grid item xs={12} lg={4} style={{ padding: "1rem" }}>
                    <MKBox display="flex" justifyContent="center">
                      <FormControl style={{ paddingLeft: "8%" }}>
                        <FormLabel
                          style={{ fontSize: "0.70em", color: "Gray" }}
                          size="small"
                        >
                          Can Play Fetch
                        </FormLabel>
                        <RadioGroup
                          name="controlled-radio-buttons-group"
                          //value={user.user_type}
                          value={dogCanPlay}
                          onChange={handleCanPlay}
                          size="small"
                          row
                        >
                          <FormControlLabel
                            value="true"
                            control={
                              <Radio
                                size="small"
                                style={{ fontSize: "0.70em" }}
                              />
                            }
                            label="Yes"
                          />
                          <FormControlLabel
                            value="false"
                            control={
                              <Radio
                                size="small"
                                style={{ fontSize: "0.70em" }}
                              />
                            }
                            label="No"
                          />
                        </RadioGroup>
                      </FormControl>
                    </MKBox>
                  </Grid>
                  <Grid item xs={12} lg={4} style={{ padding: "1rem" }}>
                    <MKBox display="flex" justifyContent="center">
                      <FormControl>
                        <FormLabel
                          style={{ fontSize: "0.70em", color: "Gray" }}
                          size="small"
                        >
                          Energy
                        </FormLabel>
                        <RadioGroup
                          name="controlled-radio-buttons-group"
                          //value={user.user_type}
                          value={dogEnergy}
                          onChange={handleChangeEnergy}
                          size="small"
                          row
                        >
                          <FormControlLabel
                            value="low"
                            control={
                              <Radio
                                size="small"
                                style={{ fontSize: "0.70em" }}
                              />
                            }
                            label="low"
                          />
                          <FormControlLabel
                            value="medium"
                            control={
                              <Radio
                                size="small"
                                style={{ fontSize: "0.70em" }}
                              />
                            }
                            label="Medium"
                          />
                          <FormControlLabel
                            value="high"
                            control={
                              <Radio
                                size="small"
                                style={{ fontSize: "0.70em" }}
                              />
                            }
                            label="High"
                          />
                        </RadioGroup>
                      </FormControl>
                    </MKBox>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} style={{ padding: "1rem" }}>
                    <Typography
                      component="legend"
                      variant="h6"
                      textAlign="center"
                    >
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
                    <Typography
                      component="legend"
                      variant="h6"
                      textAlign="center"
                    >
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
                    <Typography
                      component="legend"
                      variant="h6"
                      textAlign="center"
                    >
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
                    <Typography
                      component="legend"
                      variant="h6"
                      textAlign="center"
                    >
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
                    <Typography
                      component="legend"
                      variant="h6"
                      textAlign="center"
                    >
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
                    <Typography
                      component="legend"
                      variant="h6"
                      textAlign="center"
                    >
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
                      textAlign="center"
                      width="100%"
                    >
                      <MKButton
                        size="large"
                        onClick={() => navigate("/owner/ownerdogs")}
                        variant="gradient"
                        color="info"
                        style={{
                          width: "8rem",
                          minWidth: "120px",
                          margin: "1rem",
                        }}
                      >
                        Cancel
                      </MKButton>
                      <MKButton
                        type="submit"
                        size="large"
                        // onClick={onSaveHandler}
                        variant="gradient"
                        color="info"
                        style={{
                          width: "8rem",
                          minWidth: "120px",
                          margin: "1rem",
                        }}
                      >
                        Save
                      </MKButton>
                    </MKBox>
                  </Grid>
                </Grid>
              </MKBox>
            </Paper>
          </MKBox>
        </MKBox>
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
