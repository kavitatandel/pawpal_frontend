import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import jwt_decode from "jwt-decode";

// import jwt_decode from "jwt-decode";

// image
import bgImage from "../../assets/images/backgrounds/giorgia-finazzi-p73awrEBovI-unsplash-cropped.jpeg";
// Material Kit 2 React components
import MKBox from "../MKBox";
import MKAvatar from "../MKAvatar";
import MKTypography from "../MKTypography";
import MKInput from "../MKInput";
import MKButton from "../MKButton";

// @mui material components
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import UploadPicModal from "../Modals/UploadPicModal";
import TextField from "@mui/material/TextField";
import axios from "axios";

const ProfileForm = () => {
  const [user, setUser] = useContext(UserContext);
  const [show, setShow] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const toggleModal = () => setShow(!show);
  const [uploadedImageURL, setUploadedImageURL] = useState("");
  let navigate = useNavigate();

  useEffect(async () => {
    await getProfile();
    await getImage();
    console.log("get profile use effect ");

    console.log(user);
  }, [uploadedImageURL, selectedFile]);

  const getImage = async () => {
    axios.get(`http://localhost:5000/users/${user._id}`).then((res) => {
      setUser({ ...user, profile_pic: res.data.profile_pic });
    });
  };

  const getProfile = async () => {
    const token = localStorage.getItem("usertoken");
    const decoded = jwt_decode(token);

    setUser((user) => ({
      ...user,
      _id: decoded.user._id,
      first_name: decoded.user.first_name,
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
  };

  const onSaveHandler = () => {
    navigate("/user/searchdog");
  };

  return (
    <>
      {/* // Container between top & Footer */}
      <MKBox
        px={1}
        width="100%"
        top={0}
        height="auto"
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
          height="auto"
          top={0}
          width="100%"
          // style={{ border: "3px solid red" }}

          //   style={{ border: "3px solid green" }}
        >
          <Card
            // zIndex={0}
            style={{ position: "relative" }}
            sx={{
              width: "90%",
              height: "auto",
              p: 2,
              mt: -2,
              mx: { xs: 2, lg: 3 },
              position: "relative",
              mb: 24,
              backgroundColor: ({ palette: { white }, functions: { rgba } }) =>
                rgba(white.main, 0.8),
              backdropFilter: "saturate(200%) blur(30px)",
              boxShadow: ({ boxShadows: { xxl } }) => xxl,
            }}
          >
            <UploadPicModal
              show={show}
              setShow={setShow}
              toggleModal={toggleModal}
              uploadedImageURL={uploadedImageURL}
              setUploadedImageURL={setUploadedImageURL}
              selectedFile={selectedFile}
              setSelectedFile={setSelectedFile}
            />
            {/* Container for Profile Pic */}
            <MKBox
              zindex={2}
              mx={4}
              mt={-25}
              mb={4}
              pt={5}
              display="flex"
              justifyContent="center"
              alignItems="flex-end"
              //   style={{ border: "3px solid blue" }}
            >
              <MKAvatar
                top={-50}
                zindex={2}
                src={`${user.profile_pic}`}
                alt={`${user.first_name}`}
                shadow="xl"
                sx={{ width: "12rem", height: "12rem" }}
                style={{ border: "3px solid white", backgroundColor: "grey" }}
              />
              <MKButton
                onClick={toggleModal}
                style={{ width: "3rem", height: "2rem" }}
              >
                EDIT
              </MKButton>
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
                  <MKBox mb={2}>
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
                      onClick={onSaveHandler}
                      variant="gradient"
                      color="info"
                      style={{
                        marginLeft: "1.5rem",
                        width: "8rem",
                        minWidth: "120px",
                      }}
                    >
                      Save
                    </MKButton>
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
