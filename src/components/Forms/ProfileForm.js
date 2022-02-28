import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import jwt_decode from "jwt-decode";
import TopBgImg from "components/Blocks/TopBgImg";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";

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
import ProfileInputsGrid from "components/Blocks/ProfileInputsGrid";

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

  const handleLogOut = () => {
    setUser({});
    localStorage.removeItem("usertoken");
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
        <TopBgImg />
        {/* Container for body area below featured img */}
        <MKBox
          pb={12}
          mt={5}
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="center"
          minHeight="auto"
          width="100%"
        >
          <Paper
            elevation={24}
            style={{ position: "relative", borderRadius: "2rem" }}
            sx={{
              width: { xs: "90%", md: "70%", xl: "40%" },
              height: "auto",
              mt: -12,
              mx: { xs: 2, lg: 3 },
              position: "relative",
              mb: 4,
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
            {/* ________Pink Shape */}
            <MKBox
              color="white"
              bgColor="error"
              variant="gradient"
              borderRadius="lg"
              shadow="lg"
              opacity={1}
              mt={-12}
              style={{
                height: "20rem",
                borderRadius: "5% 5% 40% 90%",
                background: "linear-gradient(146deg, #ff9a85 21%, #ff3d47 75%)",
              }}
            >
              {/* Container for Profile Pic */}
              <Grid container>
                <Grid item xs={12}>
                  <MKBox
                    ml={6}
                    display="flex"
                    justifyContent="center"
                    alignItems="flex-end"
                  >
                    <MKAvatar
                      top={-50}
                      zindex={2}
                      src={`${user.profile_pic}`}
                      alt={`${user.first_name}`}
                      shadow="xl"
                      sx={{ width: "12rem", height: "12rem" }}
                      style={{
                        border: "3px solid white",
                        backgroundColor: "white",
                        marginTop: "-6rem",
                      }}
                    />
                    <MKButton
                      variant="text"
                      onClick={toggleModal}
                      style={{
                        width: "2rem",
                        height: "2rem",
                        marginLeft: -12,
                      }}
                    >
                      EDIT
                    </MKButton>
                  </MKBox>
                </Grid>

                <Grid item xs={12} mt={5}>
                  {/* ************************* User Full Name */}
                  <MKTypography
                    variant="h1"
                    fontWeight="medium"
                    color="light"
                    textAlign="center"
                  >
                    {`${user.first_name} ${user.last_name}`}
                  </MKTypography>
                </Grid>
              </Grid>
            </MKBox>

            {/* ************************** User Details */}
            <MKBox
              component="form"
              method="post"
              autocomplete="off"
              role="form"
              //   onSubmit={createUser}
              p={6}
            >
              {/* ___________________ Input Grid */}
              <ProfileInputsGrid />
            </MKBox>
          </Paper>
        </MKBox>
      </MKBox>
    </>
  );
};

export default ProfileForm;
