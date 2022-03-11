import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../logic/UserFunctions";
import { UserContext } from "context/UserContext";
import bgImage from "assets/images/backgrounds/drew-coffman-DzIt-fTYv4E-unsplash.jpeg";

// @mui material components
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "../MKInput";
import MKButton from "../MKButton";
import MKTypography from "../MKTypography";

import jwt_decode from "jwt-decode";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
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

const useStyles = makeStyles((theme) => ({
  // MuiOutlinedInput: {
  root: {
    color: "red",
    "&$Mui-error": {
      color: "red",
    },
  },
  // },
}));

const styledEyeIcon = {
  transform: "scale(1.5)",
  color: "#ff9a85",
  marginRight: "0.00rem",
  marginLeft: "0.3rem",
  verticalAlign: "middle",
  marginTop: "0.75rem",
  width: "1.75rem",
};

const LoginForm = () => {
  const [user, setUser] = useContext(UserContext);

  //use state for notvalid email and not valid password
  const [notValidEmail, setNotValidEmail] = useState("");
  const [notValidPass, setNotValidPass] = useState("");

  let navigate = useNavigate();

  const classes = useStyles();

  const testLogin = (e) => {
    e.preventDefault();

    const newUser = {
      email: user.email,
      password: user.password,
    };

    //empty the notvalid states
    setNotValidEmail("");
    setNotValidPass("");

    login(newUser).then((res) => {
      if (res) {
        //check if passoword is correct
        console.log(res);
        if (res === "Password is not valid, please try again!") {
          setNotValidPass(res);
        } else if (res === "Email is wrong or does not exist!") {
          setNotValidEmail(res);
        } else {
          navigate("/user");
        }
        // navigate("/user");
      }
    });
  };

  //useEffect to hide VisibilityOffIcon
  useEffect(() => {
    // var hide_eye = document.getElementById("hide_eye");
    // hide_eye.style.display = "none";
    // var show_eye = document.getElementById("show_eye");
    // show_eye.style.display = "block";
  });

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
    setUser((user) => ({
      ...user,
      password: event.target.value,
    }));
  };
  //*******************Show hide password */

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
          >
            <Grid
              item
              sx={{ minWidth: 500, maxWidth: 700 }}
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
                    width="20rem"
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
                      LOG IN
                    </MKTypography>
                  </MKBox>
                </div>
                <MKBox pt={4} pb={3} px={3}>
                  <MKBox
                    component="form"
                    autocomplete="off"
                    role="form"
                    onSubmit={testLogin}
                    p={6}
                  >
                    <MKBox mb={4} mt={4}>
                      <MKInput
                        fullWidth
                        label="E-Mail"
                        name="email"
                        placeholder="Enter your email"
                        type="email"
                        required
                        value={user?.email}
                        // onChange={(e) => setEmail(e.target.value)}
                        // onChange={(e) =>
                        //   setUser({ ...user, email: e.target.value })
                        // }
                        onChange={(e) =>
                          setUser((user) => ({
                            ...user,
                            email: e.target.value,
                          }))
                        }
                        //error
                        helperText={notValidEmail}
                        // className={helperTextStyles}
                        FormHelperTextProps={{
                          className: classes.root,
                        }}
                      ></MKInput>
                    </MKBox>
                    <MKBox
                      display="flex"
                      justifyContent="space-between"
                      mb={2}
                      mt={4}
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
                        helperText={notValidPass}
                        FormHelperTextProps={{
                          className: classes.root,
                        }}
                      />
                    </MKBox>
                    <MKBox
                      mt={14}
                      justifyContent="center"
                      display="flex"
                      textAlign="center"
                      width="100%"
                    >
                      <button
                        className="glow-on-hover"
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
                        className="glow-on-hover"
                        type="submit"
                        style={{
                          margin: "10px 15px",
                          width: "170px",
                          height: "50px",
                        }}
                      >
                        Log In
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

export default LoginForm;
