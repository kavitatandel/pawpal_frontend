import { Grid, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MKTypography from "../MKTypography";
import MKInput from "../MKInput";
import MKButton from "../MKButton";
import MKBox from "components/MKBox";
import { UserContext } from "../../context/UserContext";
import { useEffect, useState, useContext } from "react";
import { styled } from "@mui/material/styles";

const ProfileInputsGrid = () => {
  const [user, setUser] = useContext(UserContext);
  let navigate = useNavigate();
  const onSaveHandler = () => {
    navigate("/user/searchdog");
  };

  const handleLogOut = () => {
    setUser({});
    localStorage.removeItem("usertoken");
    navigate("/");
  };
  return (
    <>
      <Grid
        container
        spacing={2}
        mx={0}
        style={{ padding: "2rem" }}
        display="flex"
        justifyContent="center"
      >
        <Grid item xs={12} md={6} style={{ padding: "1rem" }}>
          <MKBox display="flex">
            <MKInput
              label="First Name"
              fullWidth
              type="text"
              name="first_name"
              value={user.first_name}
              placeholder="Enter your first name"
              required
              //   value={firstName}
              onChange={(e) => setUser({ ...user, first_name: e.target.value })}
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
        <Grid item xs={12} md={6} style={{ padding: "1rem" }}>
          <MKBox display="flex">
            <MKInput
              fullWidth
              label="Last Name"
              type="text"
              name="last_name"
              placeholder="Enter your last name"
              required
              value={user.last_name}
              onChange={(e) => setUser({ ...user, last_name: e.target.value })}
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
        <Grid item xs={12} style={{ padding: "1rem" }}>
          <MKBox display="flex" justifyContent="flex-start">
            <MKInput
              fullWidth
              label="E-Mail"
              name="email"
              placeholder="Enter your email"
              type="email"
              required
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
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

        <Grid item xs={12} md={6} style={{ padding: "1rem" }}>
          <MKBox display="flex" justifyContent="flex-start">
            <MKInput
              fullWidth
              label="Street Name"
              type="text"
              name="street"
              placeholder="Enter your street"
              required
              value={user.street}
              onChange={(e) => setUser({ ...user, street: e.target.value })}
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
        <Grid item xs={12} md={6} style={{ padding: "1rem" }}>
          <MKBox display="flex" justifyContent="flex-start">
            <MKInput
              fullWidth
              label="City"
              type="text"
              name="city"
              placeholder="Enter your city"
              required
              value={user.city}
              onChange={(e) => setUser({ ...user, city: e.target.value })}
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
        <Grid item xs={12} md={6} style={{ padding: "1rem" }}>
          <MKBox display="flex" justifyContent="flex-start">
            <MKInput
              fullWidth
              label="Country"
              type="text"
              name="country"
              placeholder="Enter your country"
              required
              value={user.country}
              onChange={(e) => setUser({ ...user, country: e.target.value })}
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
        <Grid item xs={12} md={6} style={{ padding: "1rem" }}>
          <MKBox display="flex" justifyContent="flex-start">
            <MKInput
              fullWidth
              label="Zip Code"
              type="text"
              name="zip_code"
              placeholder="Enter your zip code"
              required
              value={user.zip_code}
              onChange={(e) => setUser({ ...user, zip_code: e.target.value })}
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

        <Grid item xs={12} style={{ padding: "1rem" }}>
          <MKBox display="flex" justifyContent="flex-start">
            <TextField
              id="outlined-multiline-flexible"
              fullWidth
              // style={{ width: "48%" }}
              label="About"
              type="text"
              name="description"
              placeholder="Tell us about yourself..."
              value={user.description}
              onChange={(e) =>
                setUser({ ...user, description: e.target.value })
              }
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
              onClick={() => navigate("/searchdogs")}
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
    </>
  );
};

export default ProfileInputsGrid;