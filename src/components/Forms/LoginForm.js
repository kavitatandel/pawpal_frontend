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

const LoginForm = () => {
  const [user, setUser] = useContext(UserContext);

  let navigate = useNavigate();

  const testLogin = (e) => {
    e.preventDefault();

    const newUser = {
      email: user.email,
      password: user.password,
    };

    login(newUser).then((res) => {
      if (res) {
        navigate("/user");
      }
    });
  };

  return (
    <>
      <MKBox
        minHeight="100vh"
        height="auto"
        width="100%"
        sx={{
          backgroundImage: ({
            functions: { linearGradient, rgba },
            palette: { gradients },
          }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.4),
              rgba(gradients.dark.state, 0.4)
            )}, url(${bgImage})`,
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
              sx={{ minWidth: 400, maxWidth: 600 }}
              xs={12}
              sm={12}
              md={10}
              lg={8}
              xl={6}
              xxl={4}
            >
              <Card>
                {/* LogIn  Box */}
                <MKBox
                  variant="gradient"
                  bgColor="info"
                  borderRadius="lg"
                  coloredShadow="info"
                  mx={4}
                  mt={-3}
                  p={5}
                  mb={-2}
                  textAlign="center"
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
                      ></MKInput>
                    </MKBox>
                    <MKBox mb={2} mt={4}>
                      <MKInput
                        fullWidth
                        label="Password"
                        name="password"
                        placeholder="Enter your password"
                        type="password"
                        required
                        // value={password}
                        value={user?.password}
                        // onChange={(e) =>
                        //   setUser({ ...user, password: e.target.value })
                        // }
                        onChange={(e) =>
                          setUser((user) => ({
                            ...user,
                            password: e.target.value,
                          }))
                        }
                      />
                    </MKBox>

                    <MKBox
                      mt={10}
                      justifyContent="center"
                      display="flex"
                      textAlign="center"
                      width="100%"
                    >
                      <MKButton
                        size="large"
                        onClick={() => navigate("/")}
                        variant="gradient"
                        color="info"
                        style={{
                          marginRight: "1.5rem",
                          width: "8rem",
                          minWidth: "120px",
                        }}
                      >
                        Cancel
                      </MKButton>
                      <MKButton
                        size="large"
                        type="submit"
                        variant="gradient"
                        color="info"
                        style={{
                          marginLeft: "1.5rem",
                          width: "8rem",
                          minWidth: "120px",
                        }}
                      >
                        Log In
                      </MKButton>
                    </MKBox>
                    <MKBox mt={3} mb={1} textAlign="center"></MKBox>
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

/* <div >
            <div >
                <h1>SIGN IN</h1>
            </div>
            <div >
                <form onSubmit={testLogin} >
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input name="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <div>
                        <button type="submit">Sign In</button>
                        <button onClick={() => navigate('/')}>Cancel</button>
                    </div>
                </form>

            </div>
        </div> */
