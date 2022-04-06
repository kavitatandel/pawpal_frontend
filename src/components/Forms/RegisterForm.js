import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../logic/UserFunctions";
import { UserTypeContext } from "context/UserTypeContext";
import "../../styles/loginRegisterStyles.css";

import { fetchCoordinates } from "../../logic/FetchGeoCode";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "../MKInput";
import MKButton from "../MKButton";
import MKTypography from "../MKTypography";

//for radio button
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

//import GeoCode component
import GeoCode from "../../components/Maps/GeoCode";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

//for eye icon inside input
import React from "react";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
//import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@mui/material/InputAdornment";
//import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@mui/material//Input";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";

import "../../styles/buttonStyles.css";

const styledEyeIcon = {
  transform: "scale(1.5)",
  color: "#ff9a85",
  marginRight: "0.00rem",
  marginLeft: "0.3rem",
  verticalAlign: "middle",
  marginTop: "0.75rem",
  width: "1.75rem",
};

const RegisterForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [street, setStreet] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [userType, setUserType] = useState("owner");

  const [isOwner, setIsOwner] = useContext(UserTypeContext);

  let navigate = useNavigate();

  const createUser = async (e) => {
    e.preventDefault();

    const address = `${street},${zipcode},${city},${country}`;

    console.log(address);

    // get the coordinates
    await fetchCoordinates(address)
      .then((res) => {
        console.log(res);
        if (res) {
          const lat = res.lat;
          const lon = res.lon;

          //create new user
          const newUser = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
            user_type: userType,
            street: street,
            city: city,
            country: country,
            zip_code: zipcode,
            latitude: lat,
            longitude: lon,
            description: "",
          };

          register(newUser).then((res) => {
            navigate("/login");
          });
        }
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    if (!isOwner) {
      setUserType("doglover");
    }
    console.log(`User Type Default: ${userType}`);
  }, [isOwner]);

  useEffect(() => {
    console.log(`user type selected: ${userType}`);
  }, [userType]);

  //for radio group
  const handleChange = (event) => {
    setUserType(event.target.value);
  };

  //*******************Show hide password */
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    setPassword(event.target.value);
  };
  //*******************Show hide password */

  return (
    <>
      <div className="mainContainerForm">
        <Card
          className="mainCard"
          style={{
            background: "rgba( 255, 255, 255, 0.8 )",
            borderRadius: "25px",
            boxShadow: "0 8px 40px 0 rgba(255, 61, 46, 0.5)",
            margin: "0 !important",
          }}
        >
          {/* Pink Box */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              // border: "4px solid blue",
              marginTop: "-2rem",
              position: "relative",
            }}
          >
            <MKBox
              variant="gradient"
              bgColor="info"
              //borderRadius="lg"
              borderRadius="25px"
              coloredShadow="info"
              width="25rem"
              textAlign="center"
              sx={{
                height: "7rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MKTypography
                variant="h3"
                fontWeight="bold"
                color="white"
                // mt={1}
              >
                REGISTER
              </MKTypography>
            </MKBox>
          </div>
          <MKBox className="outerForm">
            <MKBox
              className="innerForm"
              component="form"
              method="post"
              autocomplete="off"
              role="form"
              onSubmit={createUser}
              // p={8}
              // border="3px solid orange"
            >
              <MKBox className="inputsContainer">
                <MKInput
                  className="nameInputs"
                  label="First Name"
                  type="text"
                  name="first_name"
                  placeholder="Enter your first name"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <MKInput
                  className="nameInputs"
                  label="Last Name"
                  type="text"
                  name="last_name"
                  placeholder="Enter your last name"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </MKBox>

              <MKBox className="inputsContainer">
                <MKInput
                  className="inputs"
                  fullWidth
                  label="E-Mail"
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </MKBox>
              <MKBox className="inputsContainer">
                <TextField
                  className="inputs"
                  required
                  variant="outlined"
                  label="Password"
                  name="password"
                  id="password" //added for show/hid password
                  placeholder="Enter your password"
                  fullWidth
                  type={values.showPassword ? "text" : "password"}
                  onChange={handlePasswordChange("password")}
                  value={values.password}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {values.showPassword ? (
                            <VisibilityIcon />
                          ) : (
                            <VisibilityOffIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </MKBox>
              <MKBox className="inputsContainer">
                <MKInput
                  className="inputs"
                  fullWidth
                  label="Street Name"
                  type="text"
                  name="street"
                  placeholder="Enter your street"
                  required
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                />
              </MKBox>
              <MKBox className="inputsContainer">
                <MKInput
                  className="inputs"
                  label="Zip Code"
                  type="text"
                  name="zip_code"
                  placeholder="Enter your zip code"
                  required
                  value={zipcode}
                  onChange={(e) => setZipcode(e.target.value)}
                />
                <MKInput
                  className="inputs"
                  label="City"
                  type="text"
                  name="city"
                  placeholder="Enter your city"
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </MKBox>
              <MKBox className="inputsContainer">
                <MKInput
                  className="inputs"
                  fullWidth
                  label="Country"
                  type="text"
                  name="country"
                  placeholder="Enter your country"
                  required
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </MKBox>

              <div id="radioButtonsContainer">
                <FormControl>
                  <FormLabel
                    style={{ fontSize: "0.70em", color: "Gray" }}
                    size="small"
                  >
                    User Type
                  </FormLabel>
                  <RadioGroup
                    name="controlled-radio-buttons-group"
                    //value={user.user_type}
                    value={userType}
                    onChange={handleChange}
                    size="small"
                    row
                  >
                    <FormControlLabel
                      value="owner"
                      control={
                        <Radio size="small" style={{ fontSize: "0.70em" }} />
                      }
                      label="Owner"
                    />
                    <FormControlLabel
                      value="doglover"
                      control={
                        <Radio size="small" style={{ fontSize: "0.70em" }} />
                      }
                      label="Dog Lover"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
              <MKBox className="buttonsContainer">
                <button
                  id="formButtons"
                  className="glow-on-hover"
                  onClick={() => navigate("/")}
                >
                  Cancel
                </button>
                <button
                  id="formButtons"
                  className="glow-on-hover"
                  type="submit"
                >
                  Sign Up
                </button>
              </MKBox>
            </MKBox>
          </MKBox>
        </Card>
      </div>
      {/* </Grid> */}
    </>
  );
};

export default RegisterForm;
