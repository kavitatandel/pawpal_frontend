import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import jwt_decode from "jwt-decode";
import TopBgImg from "components/Blocks/TopBgImg";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import "../../styles/layout.css";

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
import ProfileInputsGrid from "components/Forms/ProfileInputsGrid";
import EditRoundedIcon from '@mui/icons-material/EditRounded';

const ProfileForm = () => {
  const [user, setUser] = useContext(UserContext);
  const [show, setShow] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const toggleModal = () => setShow(!show);
  const [uploadedImageURL, setUploadedImageURL] = useState("");
  let navigate = useNavigate();

  //for edit mode
  const [editMode, setEditMode] = useState(true);
  const toggleEdit = () => setEditMode(!editMode);

  const editProfileIcon = {
    color: "#f0f2f5",
    transform: "scale(1.8)",
    border: "none",
    width: "1rem",
    height: "1rem",

  };

  const handleLogOut = () => {
    setUser({});
    localStorage.removeItem("usertoken");
  };

  // **************************** Original Code
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
      profile_pic: decoded.user.profile_pic,
      description: decoded.user.description,
    }));
  };

  return (
    <>
      {/* Entire Page Container (without footer) */}
      {/* ******************** 2 MASTER DIVS REQUIRED FOR EACH PAGE: MKBox & Paper */}
      <MKBox
        px={1}
        width="100%"
        top={0}
        minHeight="100%"
        mx="auto"
        mr={0}
        ml={0}
        position="relative"
        zindex={-1}
        // sx={{ padding: "0", border: "2px solid blue" }}
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Paper
          className="neuCard"
          elevation={24}
          style={{
            position: "relative",
            borderRadius: "2rem",
            // glass effect
            background: "rgba( 255, 255, 255, 0.7 )",
            boxShadow: "0 8px 40px 0 rgba(255, 61, 46, 0.5)",
            backdropFilter: "blur( 12px )",
          }}
          sx={{
            // NEED TO FIX THIS OVERFLOW ISSUE LATER (Coralee)
            // overflow: "hidden",
            width: { xs: "95%", sm: "90%", md: "80%", xl: "70%" },
            maxWidth: "1000px",
            height: "auto",
            mt: 35,
            mx: { xs: 2, lg: 3 },
            position: "relative",
            mb: 10,
            // backgroundColor: ({ palette: { white }, functions: { rgba } }) =>
            //   rgba(white.main, 0.85),
            // backdropFilter: "saturate(200%) blur(30px)",
            // boxShadow: ({ boxShadows: { xxl } }) => xxl,
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
                      borderStyle: "ridge",
                      border: "5px solid white",
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
          <MKBox display="flex" flex-direction="flex-end" width="100%" justifyContent="right" marginBottom="0rem">
            {/* ************************** Edit Button (for inputs) */}
            <MKButton
              variant="gradient"

              style={{

                border: "0px",
                marginRight: "3rem", marginTop: "1rem"
              }} onClick={toggleEdit}><EditRoundedIcon style={editProfileIcon}></EditRoundedIcon></MKButton>
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
            <ProfileInputsGrid editMode={editMode} setEditMode={setEditMode} toggleEdit={toggleEdit} />
          </MKBox>
        </Paper>
      </MKBox>
    </>
  );
};

export default ProfileForm;
