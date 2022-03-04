import { Grid, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MKTypography from "../MKTypography";
import MKInput from "../MKInput";
import MKButton from "../MKButton";
import MKBox from "components/MKBox";
import { UserContext } from "../../context/UserContext";
import { useEffect, useState, useContext } from "react";
import { checkEMailExist, updateUserProfile } from "../../logic/UserFunctions";
import { fetchCoordinates } from "../../logic/FetchGeoCode";

import { styled } from "@mui/material/styles";

const ProfileInputsGrid = ({ editMode }) => {
  const [user, setUser] = useContext(UserContext);
  let navigate = useNavigate();

  //for email validation
  const [emailExistError, setEmailExistError] = useState("");

  const onSaveHandler = () => {
    if (user.user_type === "doglover") {
      navigate("/user/searchdog");
    }
    if (user.user_type === "owner") {
      navigate("/owner/ownerdogs");
    }
  };

  const handleUpdateUserProfile = async (e) => {
    e.preventDefault();

    const address = `${user.street},${user.zip_code},${user.city},${user.country}`;
    //const address = `${user.zip_code},${user.city},${user.country}`;

    console.log(address);
    // const firstName = user.first_name;
    // const lastName = user.last_name;
    // const email = user.email;
    // const street = user.street;
    // const city = user.city;
    // const country = user.country;
    // const zipcode = user.zip_code;
    // const desc = user.description;

    // console.log(firstName);

    // get the coordinates
    await fetchCoordinates(address)
      .then((res) => {
        console.log("get geo code");
        console.log(res);
        if (res) {
          const lat = res.lat;
          const lon = res.lon;

          //create new user
          const updateUser = {
            _id: user._id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            street: user.street,
            city: user.city,
            country: user.country,
            zip_code: user.zip_code,
            latitude: lat,
            longitude: lon,
            description: user.description,
          };

          // //create new user
          // const updateUser = {
          //   first_name: firstName,
          //   last_name: lastName,
          //   email: email,
          //   street: street,
          //   city: city,
          //   country: country,
          //   zip_code: zipcode,
          //   latitude: lat,
          //   longitude: lon,
          //   description: desc,
          // };



          // console.log("Updated User");
          // console.log(updateUser)


          updateUserProfile(updateUser).then((res) => {
            //set newly updated user to localstorage
            //localStorage.setItem("usertoken", user);

            // navigate("/owner/ownerdogs");
            if (user.user_type === "doglover") {
              navigate("/user/searchdog");
            }
            if (user.user_type === "owner") {
              navigate("/owner/ownerdogs");
            }
          });
        }
      })
      .catch((err) => console.log(err));
  };

  const helperTextStyles = styled((theme) => ({
    root: {
      margin: 4,
      "&$error": {
        color: "red !important",
      },
    },
    error: {}, //<--this is required to make it work
  }));

  //check if entered email is already exist
  const handleEmailchange = async (e) => {
    e.preventDefault();

    await checkEMailExist(user._id, user.email).then((res) => {
      if (res === true) {
        setEmailExistError("Email already exist.");
      } else {
        setEmailExistError("");
      }
    });
  };

  useEffect(() => {}, [editMode]);

  return (
    <>
      {/* ********** PARENT GRID */}
      <MKBox
        component="form"
        method="post"
        autocomplete="off"
        role="form"
        onSubmit={handleUpdateUserProfile}
        pb={6}
        pt={3}
        px={6}
      >
        <Grid
          container // "Container" Attribute makes this the parent Grid
          spacing={2}
          mx={0}
          // style={{ padding: "2rem" }}
          style={{ paddingTop: "0rem" }}
          display="flex"
          justifyContent="center"
        >
          {/* ******************** CHILDREN CELLS  */}
          <Grid item xs={12} md={6} style={{ padding: "1rem" }}>
            {/* // "Item" Attribute makes this a child of parent Grid */}
            <MKBox display="flex">
              <MKInput
                label="First Name"
                fullWidth
                type="text"
                name="first_name"
                value={user.first_name}
                placeholder="Enter your first name"
                required
                onChange={(e) =>
                  setUser({ ...user, first_name: e.target.value })
                }
                disabled={editMode}
              />
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
                onChange={(e) =>
                  setUser({ ...user, last_name: e.target.value })
                }
                disabled={editMode}
              />
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
                onBlur={handleEmailchange}
                disabled={editMode}
                //error
                helperText={emailExistError}
                // className="helperTextStyles"
                className={helperTextStyles}
              />
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
                disabled={editMode}
              />
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
                disabled={editMode}
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
                disabled={editMode}
              />
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
                disabled={editMode}
              />
            </MKBox>
          </Grid>

          <Grid item xs={12} style={{ padding: "1rem" }}>
            <MKBox display="flex" justifyContent="flex-start">
              <TextField
                id="outlined-multiline-flexible"
                multiline
                rows={6}
                fullWidth
                label="About"
                type="text"
                name="description"
                placeholder="Tell us about yourself..."
                value={user.description}
                onChange={(e) =>
                  setUser({ ...user, description: e.target.value })
                }
                disabled={editMode}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} style={{ padding: "0.25rem" }}>
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
                //onClick={onSaveHandler}
                variant="gradient"
                color="info"
                style={{
                  width: "8rem",
                  minWidth: "120px",
                  margin: "1rem",
                }}
                type="submit"
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

export default ProfileInputsGrid;
