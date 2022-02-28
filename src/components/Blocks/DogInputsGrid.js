import { useEffect, useState, useContext } from "react";
import { UserContext } from "context/UserContext";
import MKBox from "components/MKBox";
import MKTypography from "../MKTypography";
import MKInput from "../MKInput";
import MKButton from "../MKButton";
import { Grid, TextField } from "@mui/material";
import Rating from "@mui/material/Rating";
import PetsIcon from "@mui/icons-material/Pets";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { FaDog } from "react-icons/fa";
import BoltIcon from "@mui/icons-material/Bolt";

//for radio button
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { addDog } from "../../logic/DogFunctions";
import { useNavigate } from "react-router";

const DogInputsGrid = ({
  dogName,
  setDogName,
  dogBreed,
  setDogBreed,
  dogAgeYears,
  setDogAgeYears,
  dogAgeMonths,
  setDogAgeMonths,
  dogSize,
  setDogSize,
  dogEnergy,
  setDogEnergy,
  dogCanPlay,
  setDogCanPlay,
  dogKidFriendly,
  setDogKidFriendly,
  dogCatFriendly,
  setDogCatFriendly,
  dogFriendly,
  setDogFriendly,
  dogObedience,
  setDogObedience,
  dogCanStayHome,
  setDogCanStayHome,
  dogExercise,
  setDogExercise,
  dogDescription,
  setDogDescription,
}) => {
  const [user, setUser] = useContext(UserContext);

  //for dog pic modal
  const [show, setShow] = useState(false);
  const toggleModal = () => setShow(!show);
  const [dogPic, setDogPic] = useState(null);

  const navigate = useNavigate();

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

  const handleChangeKidFriendly = (event, newValue) => {
    setDogKidFriendly(newValue);
  };

  const handleChangeDogCatFriendly = (event, newValue) => {
    setDogCatFriendly(newValue);
  };

  const handleChangeDogFriendly = (event, newValue) => {
    setDogFriendly(newValue);
  };

  const handleChangeDogObedience = (event, newValue) => {
    setDogObedience(newValue);
  };

  const handleChangeDogCanStayHome = (event, newValue) => {
    setDogCanStayHome(newValue);
  };

  const handleChangeDogExercise = (event, newValue) => {
    setDogExercise(newValue);
  };

  useEffect(() => {
    console.log(dogPic);
  }, [dogPic]);

  //add dog
  const addNewDog = async (e) => {
    e.preventDefault();

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

  const onSaveHandler = () => {
    navigate("/owner/ownerdogs");
  };

  return (
    <>
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
                      <Radio size="small" style={{ fontSize: "0.70em" }} />
                    }
                    label="low"
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
          <Grid item xs={12} sm={6} md={4} style={{ padding: "1rem" }}>
            <Typography component="legend" variant="h6" textAlign="center">
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
                onChange={handleChangeKidFriendly}
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
            <Typography component="legend" variant="h6" textAlign="center">
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
            <Typography component="legend" variant="h6" textAlign="center">
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
            <Typography component="legend" variant="h6" textAlign="center">
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
            <Typography component="legend" variant="h6" textAlign="center">
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
            <Typography component="legend" variant="h6" textAlign="center">
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
                size="large"
                onClick={onSaveHandler}
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
    </>
  );
};

export default DogInputsGrid;
