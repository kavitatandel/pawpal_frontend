import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../logic/UserFunctions";
import { UserContext } from "context/UserContext";
import "../../styles/LoginStyles.css";

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
      <div className="mainContainerForm" id="mainContainerFormRegister">
        <Card
          className="mainCardRegister"
          id="mainCardLogIn"
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
          <MKBox className="outerForm" id="outer">
            <MKBox
              className="innerForm"
              id="innerFormLogIn"
              component="form"
              autocomplete="off"
              role="form"
              onSubmit={testLogin}
            >
              <MKBox className="inputsContainer">
                <MKInput
                  className="inputs"
                  fullWidth
                  label="E-Mail"
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                  required
                  value={user?.email}
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
                  helperText={notValidPass}
                  FormHelperTextProps={{
                    className: classes.root,
                  }}
                />
              </MKBox>
              <MKBox className="buttonsContainer" id="loginButtonsContainer">
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
                  Log In
                </button>
              </MKBox>
            </MKBox>
          </MKBox>
        </Card>
      </div>
    </>
  );
};

export default LoginForm;
