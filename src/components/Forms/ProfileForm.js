import axios from "axios";

import { useEffect, useState, useContext } from "react";
import { UserContext } from "context/UserContext";
import jwt_decode from "jwt-decode";

// import jwt_decode from "jwt-decode";

// image
import bgImage from "../../assets/images/backgrounds/giorgia-finazzi-p73awrEBovI-unsplash-cropped.jpeg";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKTypography from "../MKTypography";
import MKInput from "../MKInput";
import MKButton from "../MKButton";
// @mui material components
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";

const ProfileForm = () => {
  const [user, setUser] = useContext(UserContext);

  useEffect(async () => {
    await getProfile();
    console.log("get profile use effect ")
    console.log(user);
  }, []);

  const getProfile = async () => {
    const token = localStorage.getItem("usertoken");

    const decoded = jwt_decode(token);

    const userId = decoded.user._id;
    const fname = decoded.user.first_name;

    console.log(userId);
    console.log(fname);

    setUser(user => ({
      ...user,
      _id: userId,
      first_name: fname,
      last_name: decoded.user.last_name,
      email: decoded.user.email,
      street: decoded.user.street,
      city: decoded.user.city,
      country: decoded.user.country,
      zip_code: decoded.user.zip_code,
      user_type: decoded.user.user_type,
      latitude: decoded.user.latitude,
      longitude: decoded.user.longitude,
    }));
    console.log(user)
  };


  // if (loading) return <h1>Loading...</h1>;
  return (
    <>
      {/* // Container between top & Footer */}
      <MKBox
        px={1}
        width="100%"
        top={0}
        height="85vh"
        mx="auto"
        mr={0}
        ml={0}
        position="relative"
        zindex={-1}
        sx={{ padding: "0" }}
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"

      // style={{ border: "10px solid red" }}
      >
        {/* Container for top background Image */}
        <MKBox
          // style={{ border: "10px solid green" }}

          minHeight="20vh"
          width="100%"
          //   style={{ border: "3px solid green" }}
          sx={{
            backgroundImage: ({
              functions: { linearGradient, rgba },
              palette: { gradients },
            }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.2),
                rgba(gradients.dark.state, 0.2)
              )}, url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
          }}
        />

        {/* Container for body area below featured img */}
        <MKBox
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="center"
          minHeight="80vh"
          top={0}
          width="100%"


        //   style={{ border: "3px solid red" }}

        //   style={{ border: "3px solid green" }}
        >
          <Card
            // zIndex={0}
            style={{ position: "relative" }}
            sx={{
              width: "90%",
              height: "80%",
              minHeight: "100%",
              p: 2,
              mt: -2,
              mx: { xs: 2, lg: 3 },
              position: "relative",
              mb: 4,
              backgroundColor: ({ palette: { white }, functions: { rgba } }) =>
                rgba(white.main, 0.8),
              backdropFilter: "saturate(200%) blur(30px)",
              boxShadow: ({ boxShadows: { xxl } }) => xxl,
            }}
          >
            {/* Container for Profile Pic */}
            <MKBox
              zindex={2}
              mx={4}
              mt={-15}
              pt={5}
              display="flex"
              justifyContent="center"
            //   style={{ border: "3px solid blue" }}
            >
              <MKAvatar
                top={-50}
                zindex={2}
                // Hard coded for now
                src={`${user.profile_pic}`}
                // src="https://res.cloudinary.com/kavita-project/image/upload/v1645350736/lqhvjqlevlaqxpzw7hqq.png"
                alt="Burce Mars"
                shadow="xl"
                sx={{ width: "10rem", height: "10rem" }}
                style={{ border: "3px solid white", backgroundColor: "grey" }}
              />
            </MKBox>
            {/* ************************* Text Container */}
            <Container>
              {/* Heading (User's Name) */}
              <MKTypography
                variant="h3"
                fontWeight="medium"
                color="dark"
                textAlign="center"
              >
                {`${user.first_name} ${user.last_name}`}
              </MKTypography>
              {/* ************************** User Details */}
              <MKBox pt={1} pb={3} px={3}>
                <MKBox
                  component="form"
                  method="post"
                  autocomplete="off"
                  role="form"
                  //   onSubmit={createUser}
                  p={6}
                >
                  <MKBox mb={2} display="flex" justifyContent="space-between">
                    <MKInput
                      label="First Name"
                      fullWidth
                      type="text"
                      name="first_name"
                      value={user.first_name}
                      placeholder="Enter your first name"
                      required
                      //   value={firstName}
                      onChange={(e) =>
                        setUser({ ...user, first_name: e.target.value })
                      }
                    />
                    <MKButton
                    //   onClick={(e) => setFirstName(e.target.value)}
                    >
                      Edit
                    </MKButton>

                    <MKInput
                      fullWidth
                      style={{ width: "48%" }}
                      label="Last Name"
                      type="text"
                      name="last_name"
                      placeholder="Enter your last name"
                      required
                      value={user.last_name}
                      onChange={(e) =>
                        setUser({ ...user, last_name: e.target.value })
                      }
                    />
                    <MKButton
                    //   onClick={(e) => setFirstName(e.target.value)}
                    >
                      Edit
                    </MKButton>
                  </MKBox>

                  <MKBox mb={2}>
                    <MKInput
                      fullWidth
                      label="E-Mail"
                      name="email"
                      placeholder="Enter your email"
                      type="email"
                      required
                      value={user.email}
                      onChange={(e) =>
                        setUser({ ...user, email: e.target.value })
                      }
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
                      value={user.street}
                      onChange={(e) =>
                        setUser({ ...user, street: e.target.value })
                      }
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
                      value={user.zip_code}
                      onChange={(e) =>
                        setUser({ ...user, zip_code: e.target.value })
                      }
                    />
                    <MKInput
                      style={{ width: "48%" }}
                      label="City"
                      type="text"
                      name="city"
                      placeholder="Enter your city"
                      required
                      value={user.city}
                      onChange={(e) =>
                        setUser({ ...user, city: e.target.value })
                      }
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
                      value={user.country}
                      onChange={(e) =>
                        setUser({ ...user, country: e.target.value })
                      }
                    />
                  </MKBox>
                </MKBox>
              </MKBox>
            </Container>
          </Card>
        </MKBox>
      </MKBox>
    </>
  );
};

export default ProfileForm;
