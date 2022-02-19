import React from "react";
import { useNavigate } from "react-router";

// const Landing = () => {
//     const navigate = useNavigate();
//     return (
//         <>
//             <div>
//                 <h1> Welcome to PawPal</h1>
//                 <div>
//                     <button onClick={() => navigate('/register')}>Register</button>
//                     <button onClick={() => navigate('/login')}>Login</button>
//                 </div>
//             </div>

//         </>
//     )
// }

// export default Landing;

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Images
import bgImage from "assets/images/backgrounds/patrick-hendry-jd0hS7Vhn_A-unsplash.jpeg";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <>
      <MKBox
        minHeight="100vh"
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
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center", top: "-100" }}
          >
            <MKTypography
              variant="h1"
              color="white"
              style={{ paddingBottom: "3rem" }}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Welcome to App Name
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              opacity={0.8}
              style={{ paddingBottom: "3rem" }}
            >
              Some cool introduction to our site. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Architecto ducimus dolor temporibus
              voluptates, possimus culpa dolorem quia praesentium eius corporis
              esse sunt sed minus perferendis illo quod nesciunt cum eligendi!
            </MKTypography>
            <Container>
              <MKButton
                size="large"
                onClick={() => navigate("/register")}
                style={{ margin: "10px" }}
                variant="gradient"
                color="info"
                sx={{ color: ({ palette: { light } }) => light.main }}
              >
                create account
              </MKButton>
              <MKButton
                size="large"
                onClick={() => navigate("/login")}
                style={{ margin: "10px" }}
                variant="gradient"
                color="info"
                sx={{ color: ({ palette: { light } }) => light.main }}
              >
                log in
              </MKButton>
            </Container>
            {/* <MKTypography variant="h6" color="white" mt={8} mb={1}>
              Find us on
            </MKTypography> */}
            <MKBox display="flex" justifyContent="center" alignItems="center">
              <MKTypography
                component="a"
                variant="body1"
                color="white"
                href="#"
                mr={3}
              >
                <i className="fab fa-facebook" />
              </MKTypography>
              <MKTypography
                component="a"
                variant="body1"
                color="white"
                href="#"
                mr={3}
              >
                <i className="fab fa-instagram" />
              </MKTypography>
              <MKTypography
                component="a"
                variant="body1"
                color="white"
                href="#"
                mr={3}
              >
                <i className="fab fa-twitter" />
              </MKTypography>
              <MKTypography
                component="a"
                variant="body1"
                color="white"
                href="#"
              >
                <i className="fab fa-google-plus" />
              </MKTypography>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>
    </>
  );
};

export default Landing;

// import React from 'react';
// import { useNavigate } from 'react-router';

// const Landing = () => {
//     const navigate = useNavigate();
//     return (
//         <>
//             <div>
//                 <h1> Welcome to PawPal</h1>
//                 <div>
//                     <button onClick={() => navigate('/register')}>Register</button>
//                     <button onClick={() => navigate('/login')}>Login</button>
//                 </div>
//             </div>

//         </>
//     )
// }

// export default Landing;
