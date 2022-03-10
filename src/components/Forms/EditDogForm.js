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
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DogAvatar from "../../assets/images/avatars/dog-av-grad.png";

//for radio button
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { addDog } from "../../logic/DogFunctions";
import { useNavigate, useParams } from "react-router";
import EditDogPicModal from "../Modals/EditDogPicModal";
import { getDogInfoById, editDog } from "../../logic/DogFunctions";

//for spinner
import RiseLoader from "react-spinners/RiseLoader";
import { override } from "styles/CustomStyles";

import "../../styles/buttonStyles.css";

const EditDogForm = () => {
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
  const [dogProfilePic, setProfilePic] = useState("");
  // const [dogId, setDogId] = useState(null);
  const [uploadedImageURL, setUploadedImageURL] = useState("");

  //for edit mode
  const [editMode, setEditMode] = useState(true);
  const toggleEdit = () => setEditMode(!editMode);

  //for spinner
  const [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ff3d47");

  const editProfileIcon = {
    color: "#f0f2f5",
    backgroundColor: "transparent",
    transform: "scale(1)",
    marginLeft: "0.5rem",
    // width: "1rem",
    // height: "1rem",
  };

  //for dog pic modal
  const [show, setShow] = useState(false);
  const toggleModal = () => setShow(!show);
  const [dogPic, setDogPic] = useState(null);

  const navigate = useNavigate();
  const { dogid } = useParams();

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

  useEffect(async () => {
    console.log("uploaded image url on useeffect:" + uploadedImageURL);
    await getDogInfoById(dogid)
      .then((res) => {
        //setDogInfo(res);

        //set useState for dog
        //setDogId(res._id);
        setDogName(res.name);
        setDogBreed(res.breed);
        setDogAgeYears(res.age_years);
        setDogAgeMonths(res.age_months);
        setDogSize(res.size);
        setDogEnergy(res.energy);
        setDogCanPlay(res.can_play_fetch);
        setDogKidFriendly(res.kid_friendly);
        setDogCatFriendly(res.cat_friendly);
        setDogFriendly(res.dog_friendly);
        setDogObedience(res.obedience);
        setDogCanStayHome(res.can_stay_home);
        setDogExercise(res.exercise_type);
        setDogDescription(res.description);
        setProfilePic(res.profile_photo);
        //check if dog profile pic is updated
        if (uploadedImageURL === "") {
          console.log("when image url is empty");
          console.log(uploadedImageURL);
          console.log(setUploadedImageURL);
          console.log(res.profile_photo);
          setProfilePic(res.profile_photo);
          console.log(dogCanStayHome);
        } else {
          console.log("uploaded image url inside edit dog form");
          console.log(uploadedImageURL);
          setProfilePic(uploadedImageURL);
        }

        //for spinner
        setLoading(false)
      })
      .catch((err) => console.log(err));
  }, [uploadedImageURL]);

  //add dog
  const handleEditDog = async (e) => {
    e.preventDefault();

    console.log("inside handle edit" + dogid);

    const updateDog = {
      _id: dogid, //from params
      name: dogName,
      breed: dogBreed,
      age_years: dogAgeYears,
      age_months: dogAgeMonths,
      size: dogSize,
      description: dogDescription,
      energy: dogEnergy,
      kid_friendly: dogKidFriendly,
      cat_friendly: dogCatFriendly,
      dog_friendly: dogFriendly,
      obedience: dogObedience,
      can_stay_home: dogCanStayHome,
      exercise_type: dogExercise,
      can_play_fetch: dogCanPlay,
      profile_photo: dogPic,
    };
    await editDog(updateDog)
      .then((res) => {
        navigate("/owner/ownerdogs");
      })
      .catch((err) => console.log(err));
  };

  //for spinner
  if (loading) return <RiseLoader color={color} loading={loading} css={override} size={40} />
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
              <EditDogPicModal
                show={show}
                setShow={setShow}
                toggleModal={toggleModal}
                uploadedImageURL={uploadedImageURL}
                setUploadedImageURL={setUploadedImageURL}
                dogid={dogid}
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
                        src={`${dogProfilePic}`}
                        alt={`${dogName}`}
                        shadow="xl"
                        sx={{ width: "12rem", height: "12rem" }}
                        style={{
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
                        EDIT
                      </MKButton>
                    </MKBox>
                    <Grid item xs={12} mt={5}>
                      {/* ************************* HEADING */}
                      <MKTypography
                        variant="h1"
                        fontWeight="medium"
                        color="light"
                        textAlign="center"
                        mt={-3}
                      >
                        {dogName}
                      </MKTypography>
                    </Grid>
                  </Grid>
                </Grid>
              </MKBox>
              <MKBox
                display="flex"
                flex-direction="flex-end"
                width="100%"
                justifyContent="right"
                marginBottom="0rem"
              >
                {/* ************************** Edit Button (for inputs) */}
                <button
                  type="submit"
                  class="glow-on-hover"
                  onClick={toggleEdit}
                  style={{ margin: "10px 80px", width: "100px", height: "50px" }}
                >
                  EDIT
                  <EditRoundedIcon style={editProfileIcon}></EditRoundedIcon>
                </button>
                {/* <MKButton
                  type="submit"
                  variant="gradient"
                  color="info"
                  size="large"
                  style={{
                    padding: "10px 2px 10px 10px",
                    minWidth: "7rem",
                    minHeight: "3rem",
                    border: "0px",
                    marginRight: "3rem",
                    marginTop: "2rem",
                  }}
                  onClick={toggleEdit}
                >
                  EDIT
                  <EditRoundedIcon style={editProfileIcon}></EditRoundedIcon>
                </MKButton> */}
              </MKBox>
              {/* ************************* DOG DETAILS */}
              <MKBox
                width="auto"
                component="form"
                method="post"
                autocomplete="off"
                role="form"
                onSubmit={handleEditDog}
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
                      sx={{ backgroundColor: "transparent !important" }}
                      focused={!editMode}
                      InputLabelProps={{ shrink: true }}
                      disabled={editMode}
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
                      sx={{ backgroundColor: "transparent !important" }}
                      focused={!editMode}
                      InputLabelProps={{ shrink: true }}
                      disabled={editMode}
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
                      sx={{ backgroundColor: "transparent !important" }}
                      focused={!editMode}
                      InputLabelProps={{ shrink: true }}
                      disabled={editMode}
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
                      sx={{ backgroundColor: "transparent !important" }}
                      focused={!editMode}
                      InputLabelProps={{ shrink: true }}
                      disabled={editMode}
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
                  <Grid item xs={12} style={{ padding: "1rem" }}>
                    <MKBox display="flex" justifyContent="center">
                      <MKInput
                        sx={{ backgroundColor: "transparent !important" }}
                        focused={!editMode}
                        InputLabelProps={{ shrink: true }}
                        disabled={editMode}
                        fullWidth
                        multiline
                        rows={5}
                        style={{ width: "90%" }}
                        label="About"
                        name="description"
                        placeholder="Enter age in months"
                        type="text"
                        value={dogDescription}
                        maxRows={8}
                        onChange={(e) => setDogDescription(e.target.value)}

                      // focused={!editMode}
                      // InputLabelProps={{ shrink: true }}
                      // disabled={editMode}
                      // id="outlined-multiline-static"
                      // multiline
                      // maxRows={8}
                      // style={{ width: "90%" }}
                      // label="About"
                      // type="text"
                      // name="description"
                      // placeholder="Tell us about your dog..."
                      // value={dogDescription}
                      // onChange={(e) => setDogDescription(e.target.value)}
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
                          textAlign="left"
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
                              <Radio
                                size="small"
                                style={{ fontSize: "0.70em" }}
                                focused={!editMode}
                                InputLabelProps={{ shrink: true }}
                                disabled={editMode}
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
                                focused={!editMode}
                                InputLabelProps={{ shrink: true }}
                                disabled={editMode}
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
                                focused={!editMode}
                                InputLabelProps={{ shrink: true }}
                                disabled={editMode}
                              />
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
                          textAlign="left"
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
                            value="Low"
                            control={
                              <Radio
                                size="small"
                                style={{ fontSize: "0.70em" }}
                                focused={!editMode}
                                InputLabelProps={{ shrink: true }}
                                disabled={editMode}
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
                                focused={!editMode}
                                InputLabelProps={{ shrink: true }}
                                disabled={editMode}
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
                                focused={!editMode}
                                InputLabelProps={{ shrink: true }}
                                disabled={editMode}
                              />
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
                          textAlign="left"
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
                              <Radio
                                size="small"
                                style={{ fontSize: "0.70em" }}
                                focused={!editMode}
                                InputLabelProps={{ shrink: true }}
                                disabled={editMode}
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
                                focused={!editMode}
                                InputLabelProps={{ shrink: true }}
                                disabled={editMode}
                              />
                            }
                            label="No"
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
                        focused={!editMode}
                        InputLabelProps={{ shrink: true }}
                        disabled={editMode}
                        min={1}
                        max={5}
                        value={dogKidFriendly}
                        defaultValue={dogKidFriendly}
                        onChange={(e) => setDogKidFriendly(e.target.value)}
                        name="kidfriendly"
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
                        focused={!editMode}
                        InputLabelProps={{ shrink: true }}
                        disabled={editMode}
                        min={1}
                        max={5}
                        value={dogCatFriendly}
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
                        focused={!editMode}
                        InputLabelProps={{ shrink: true }}
                        disabled={editMode}
                        min={1}
                        max={5}
                        value={dogFriendly}
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
                        focused={!editMode}
                        InputLabelProps={{ shrink: true }}
                        disabled={editMode}
                        min={1}
                        max={5}
                        value={dogObedience}
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
                        focused={!editMode}
                        InputLabelProps={{ shrink: true }}
                        disabled={editMode}
                        min={1}
                        max={5}
                        value={dogCanStayHome}
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
                        focused={!editMode}
                        InputLabelProps={{ shrink: true }}
                        disabled={editMode}
                        min={1}
                        max={5}
                        value={dogExercise}
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
                      <button
                        class="glow-on-hover"
                        onClick={() => navigate("/owner/ownerdogs")}
                        style={{ margin: "10px 25px", width: "150px", height: "50px" }}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        class="glow-on-hover"
                        style={{ margin: "10px 25px", width: "150px", height: "50px" }}
                      >
                        Save
                      </button>
                    </MKBox>
                    {/* <MKBox
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
                    </MKBox> */}
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

export default EditDogForm;

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
