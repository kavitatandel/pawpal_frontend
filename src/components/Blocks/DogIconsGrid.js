import { useEffect, useState, useContext } from "react";
import { UserContext } from "context/UserContext";
import bgImage from "../../assets/images/backgrounds/giorgia-finazzi-p73awrEBovI-unsplash-cropped.jpeg";
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKTypography from "../MKTypography";
import MKInput from "../MKInput";
import MKButton from "../MKButton";
// @mui material componentsF
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
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

export const DogIconsGrid = ({ dogInfo }) => {
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

  return (
    <div>
      <Grid container spacing={2} style={{ border: "2px solid blue" }}>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          xl={3}
          style={{ padding: "1rem" }}
        >
          <Typography component="legend" variant="h6" textAlign="left">
            Can play fetch
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              height: "3rem",
              paddingTop: "1rem",
            }}
          >
            <FalseRating
              readOnly
              name="no_fetch"
              defaultValue={!dogInfo.can_play_fetch ? 1 : 0}
              precision={1}
              max={1}
              textAlign="center"
              style={{
                marginRight: "0.7rem",
                fontSize: "2rem",
              }}
              icon={
                <AddCircleIcon
                  style={{
                    marginRight: "0.2rem",
                    transform: "rotate(45deg)",
                  }}
                />
              }
              emptyIcon={
                <AddCircleIcon
                  style={{
                    marginRight: "0.2rem",
                    transform: "rotate(45deg)",
                  }}
                />
              }
            />
            <TrueRating
              readOnly
              name="can_fetch"
              defaultValue={dogInfo.can_play_fetch ? 1 : 0}
              precision={1}
              max={1}
              style={{ marginRight: "0.7rem", fontSize: "2rem" }}
              icon={<CheckCircleIcon style={{ marginRight: "0.2rem" }} />}
              emptyIcon={<CheckCircleIcon style={{ marginRight: "0.2rem" }} />}
            />
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          xl={3}
          style={{ padding: "1rem" }}
        >
          <Typography component="legend" variant="h6" textAlign="left">
            Size
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-end",
            }}
          >
            <StyledRating
              readOnly
              name="small"
              defaultValue={dogInfo.size === "small" ? 1 : 0}
              precision={1}
              max={1}
              icon={<FaDog fontSize="1rem" style={{ marginRight: "0.2rem" }} />}
              emptyIcon={
                <FaDog fontSize="inherit" style={{ marginRight: "0.2rem" }} />
              }
            />
            <StyledRating
              readOnly
              name="medium"
              defaultValue={dogInfo.size === "medium" ? 1 : 0}
              precision={1}
              max={1}
              icon={<FaDog fontSize="2rem" style={{ marginRight: "0.2rem" }} />}
              emptyIcon={
                <FaDog fontSize="2rem" style={{ marginRight: "0.2rem" }} />
              }
            />
            <StyledRating
              readOnly
              name="large"
              defaultValue={dogInfo.size === "large" ? 1 : 0}
              precision={1}
              max={1}
              icon={
                <FaDog fontSize="3rem" style={{ marginRight: "0.2rem" }} />
                // <PetsIcon
                //   fontSize="inherit"
                //   style={{ marginRight: "0.2rem" }}
                // />
              }
              emptyIcon={
                <FaDog fontSize="2.5rem" style={{ marginRight: "0.2rem" }} />
              }
            />
          </div>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          xl={3}
          style={{ padding: "1rem" }}
        >
          <Typography
            component="legend"
            variant="h6"
            textAlign="center"
            style={{ padding: "1rem" }}
          >
            Energy Level
          </Typography>

          <EnergyRating
            readOnly
            name="energy_low"
            defaultValue={dogInfo.energy === "low" ? 1 : 0}
            precision={1}
            max={1}
            style={{ marginRight: "0.7rem", fontSize: "1.5rem" }}
            icon={<BoltIcon style={{ marginRight: "-0.8rem" }} />}
            emptyIcon={<BoltIcon style={{ marginRight: "-0.8rem" }} />}
          />
          <EnergyRating
            readOnly
            name="energy_medium"
            defaultValue={dogInfo.energy === "medium" ? 2 : 0}
            precision={2}
            max={2}
            style={{ marginRight: "0.7rem", fontSize: "1.8rem" }}
            icon={<BoltIcon style={{ marginRight: "-1rem" }} />}
            emptyIcon={<BoltIcon style={{ marginRight: "-1rem" }} />}
          />
          <EnergyRating
            readOnly
            name="energy_high"
            defaultValue={dogInfo.energy === "high" ? 3 : 0}
            precision={3}
            max={3}
            style={{ marginRight: "0.7rem", fontSize: "2.2rem" }}
            icon={<BoltIcon style={{ marginRight: "-1.2rem" }} />}
            emptyIcon={<BoltIcon style={{ marginRight: "-1.2rem" }} />}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          xl={3}
          style={{ padding: "1rem" }}
        >
          <Typography
            component="legend"
            variant="h6"
            textAlign="center"
            style={{ padding: "1rem" }}
          >
            Kid Friendly
          </Typography>

          <StyledRating
            readOnly
            name="kidfriendly"
            defaultValue={dogInfo.kid_friendly}
            precision={1}
            icon={
              <PetsIcon fontSize="inherit" style={{ marginRight: "0.2rem" }} />
            }
            emptyIcon={
              <PetsIcon fontSize="inherit" style={{ marginRight: "0.2rem" }} />
            }
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          xl={3}
          style={{ padding: "1rem" }}
        >
          <Typography
            component="legend"
            variant="h6"
            textAlign="center"
            style={{ padding: "1rem" }}
          >
            Cat Friendly
          </Typography>
          <StyledRating
            readOnly
            name="catfriendly"
            defaultValue={dogInfo.cat_friendly}
            precision={1}
            icon={
              <PetsIcon fontSize="inherit" style={{ marginRight: "0.2rem" }} />
            }
            emptyIcon={
              <PetsIcon fontSize="inherit" style={{ marginRight: "0.2rem" }} />
            }
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          xl={3}
          style={{ padding: "1rem" }}
        >
          <Typography
            component="legend"
            variant="h6"
            textAlign="center"
            style={{ padding: "1rem" }}
          >
            Dog Friendly
          </Typography>

          <StyledRating
            readOnly
            name="dogfriendly"
            defaultValue={dogInfo.dog_friendly}
            precision={1}
            icon={
              <PetsIcon fontSize="inherit" style={{ marginRight: "0.2rem" }} />
            }
            emptyIcon={
              <PetsIcon fontSize="inherit" style={{ marginRight: "0.2rem" }} />
            }
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          xl={3}
          style={{ padding: "1rem" }}
        >
          <Typography
            component="legend"
            variant="h6"
            textAlign="center"
            style={{ padding: "1rem" }}
          >
            Obedience
          </Typography>

          <StyledRating
            readOnly
            name="dogfriendly"
            defaultValue={dogInfo.obedience}
            precision={1}
            icon={
              <PetsIcon fontSize="inherit" style={{ marginRight: "0.2rem" }} />
            }
            emptyIcon={
              <PetsIcon fontSize="inherit" style={{ marginRight: "0.2rem" }} />
            }
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          xl={3}
          style={{ padding: "1rem" }}
        >
          <Typography
            component="legend"
            variant="h6"
            textAlign="center"
            style={{ padding: "1rem" }}
          >
            Can stay home alone
          </Typography>

          <StyledRating
            readOnly
            name="dogfriendly"
            defaultValue={dogInfo.can_stay_home}
            precision={1}
            icon={
              <PetsIcon fontSize="inherit" style={{ marginRight: "0.2rem" }} />
            }
            emptyIcon={
              <PetsIcon fontSize="inherit" style={{ marginRight: "0.2rem" }} />
            }
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          xl={3}
          style={{ padding: "1rem" }}
        >
          <Typography
            component="legend"
            variant="h6"
            textAlign="center"
            style={{ padding: "1rem" }}
          >
            Exercise Needs
          </Typography>

          <StyledRating
            readOnly
            name="dogfriendly"
            defaultValue={dogInfo.exercise_type}
            precision={1}
            icon={
              <PetsIcon fontSize="inherit" style={{ marginRight: "0.2rem" }} />
            }
            emptyIcon={
              <PetsIcon fontSize="inherit" style={{ marginRight: "0.2rem" }} />
            }
          />
        </Grid>
      </Grid>
    </div>
  );
};
