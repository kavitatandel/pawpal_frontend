import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../logic/UserFunctions";
import bgImage from "assets/images/backgrounds/drew-coffman-DzIt-fTYv4E-unsplash.jpeg";

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

  // //useEffect to hide VisibilityOffIcon
  // useEffect(() => {
  //   var hide_eye = document.getElementById("hide_eye");
  //   hide_eye.style.display = "none";
  //   var show_eye = document.getElementById("show_eye");
  //   show_eye.style.display = "block";
  // });

  // //show/hide password
  // function password_show_hide() {
  //   var x = document.getElementById("password");
  //   var show_eye = document.getElementById("show_eye");
  //   var hide_eye = document.getElementById("hide_eye");
  //   hide_eye.classList.remove("d-none");
  //   if (x.type === "password") {
  //     x.type = "text";
  //     show_eye.style.display = "none";
  //     hide_eye.style.display = "block";
  //   } else {
  //     x.type = "password";
  //     show_eye.style.display = "block";
  //     hide_eye.style.display = "none";
  //   }
  // }

  return (
    <>
      <MKBox
        minHeight="100vh"
        height="auto"
        width="100%"
        sx={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        {/* <GeoCode address="Fellbacher Straße, Fellbach,70736,Germany" /> */}
        <MKBox
          px={1}
          width="100%"
          height="100vh"
          mx="auto"
          position="relative"
          zIndex={1}
          sx={{ width: "75%" }}
        >
          <Grid
            container
            spacing={1}
            justifyContent="center"
            alignItems="center"
            height="85%"
            mt="5rem"
          >
            {/* <Grid item xs={11} sm={9} md={5} lg={10} xl={3}> */}
            <Grid
              item
              sx={{ minWidth: 800, maxWidth: 1000 }}
              xs={12}
              sm={12}
              md={10}
              lg={8}
              xl={6}
              xxl={4}
            >
              <Card
                style={{
                  background: "rgba( 255, 255, 255, 0.8 )",
                  borderRadius: "25px",
                  boxShadow: "0 8px 40px 0 rgba(255, 61, 46, 0.5)",
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
                <MKBox
                  pt={1}
                  pb={0}
                  px={4}
                  mx={3}
                  // border="3px solid pink"
                >
                  <MKBox
                    component="form"
                    method="post"
                    autocomplete="off"
                    role="form"
                    onSubmit={createUser}
                    p={8}
                    // border="3px solid orange"
                  >
                    <MKBox
                      mb={2}
                      display="flex"
                      justifyContent="space-between"
                      // border="3px solid blue"
                    >
                      <MKInput
                        style={{ width: "48%" }}
                        label="First Name"
                        type="text"
                        name="first_name"
                        placeholder="Enter your first name"
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        mb={2}
                        // value={user.first_name}
                        // onChange={(e) =>
                        //   setUser({ ...user, first_name: e.target.value })
                        // }
                      />
                      <MKInput
                        style={{ width: "48%" }}
                        label="Last Name"
                        type="text"
                        name="last_name"
                        placeholder="Enter your last name"
                        required
                        // value={user.last_name}
                        // onChange={(e) =>
                        //   setUser({ ...user, last_name: e.target.value })
                        // }

                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </MKBox>

                    <MKBox mb={2}>
                      <MKInput
                        fullWidth
                        label="E-Mail"
                        name="email"
                        placeholder="Enter your email"
                        type="email"
                        required
                        // value={user.email}
                        // onChange={(e) =>
                        //   setUser({ ...user, email: e.target.value })
                        // }
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </MKBox>
                    <MKBox
                      display="flex"
                      justifyContent="space-between"
                      mb={2}
                      mr={0}
                      ml={0}
                    >
                      <TextField
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
                        // helperText={notValidPass}
                        // FormHelperTextProps={{
                        //   className: classes.root,
                        // }}
                      />
                    </MKBox>
                    <MKBox mb={2}>
                      <MKInput
                        fullWidth
                        label="Street Name"
                        type="text"
                        name="street"
                        placeholder="Enter your street"
                        required
                        // value={user.street}
                        // onChange={(e) =>
                        //   setUser({ ...user, street: e.target.value })
                        // }
                        value={street}
                        onChange={(e) => setStreet(e.target.value)}
                      />
                    </MKBox>
                    <MKBox mb={2} display="flex" justifyContent="space-between">
                      <MKInput
                        style={{ width: "48%" }}
                        label="Zip Code"
                        type="text"
                        name="zip_code"
                        placeholder="Enter your zip code"
                        required
                        // value={user.zip_code}
                        // onChange={(e) =>
                        //   setUser({ ...user, zip_code: e.target.value })
                        // }
                        value={zipcode}
                        onChange={(e) => setZipcode(e.target.value)}
                      />
                      <MKInput
                        style={{ width: "48%" }}
                        label="City"
                        type="text"
                        name="city"
                        placeholder="Enter your city"
                        required
                        // value={user.city}
                        // onChange={(e) =>
                        //   setUser({ ...user, city: e.target.value })
                        // }
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                      />
                    </MKBox>
                    <MKBox mb={2}>
                      <MKInput
                        fullWidth
                        label="Country"
                        type="text"
                        name="country"
                        placeholder="Enter your country"
                        required
                        // value={user.country}
                        // onChange={(e) =>
                        //   setUser({ ...user, country: e.target.value })
                        // }
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                      />
                    </MKBox>

                    <MKBox
                      mt={4}
                      justifyContent="flex-start"
                      display="flex"
                      mb={6}
                      ml={0.5}
                      textAlign="left"
                      width="100%"
                    >
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
                              <Radio
                                size="small"
                                style={{ fontSize: "0.70em" }}
                              />
                            }
                            label="Owner"
                          />
                          <FormControlLabel
                            value="doglover"
                            control={
                              <Radio
                                size="small"
                                style={{ fontSize: "0.70em" }}
                              />
                            }
                            label="Dog Lover"
                          />
                        </RadioGroup>
                      </FormControl>
                    </MKBox>
                    <MKBox
                      mt={9}
                      justifyContent="center"
                      display="flex"
                      textAlign="center"
                      width="100%"
                    >
                      <button
                        class="glow-on-hover"
                        onClick={() => navigate("/")}
                        style={{
                          margin: "10px 15px",
                          width: "170px",
                          height: "50px",
                        }}
                      >
                        Cancel
                      </button>
                      <button
                        class="glow-on-hover"
                        type="submit"
                        style={{
                          margin: "10px 15px",
                          width: "170px",
                          height: "50px",
                        }}
                      >
                        Sign Up
                      </button>
                    </MKBox>
                  </MKBox>
                </MKBox>
              </Card>
            </Grid>
          </Grid>
        </MKBox>
      </MKBox>
    </>
  );
};

export default RegisterForm;
