import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import jwt_decode from "jwt-decode";
import TopBgImg from "components/Blocks/TopBgImg";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import "../../styles/layout.css";
import HumanAvatar from "../../assets/images/avatars/human-av-grad.png";

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
import EditRoundedIcon from "@mui/icons-material/EditRounded";

//for spinner
import RiseLoader from "react-spinners/RiseLoader";
import { override } from "styles/CustomStyles";


const ProfileForm = () => {
  const [user, setUser] = useContext(UserContext);
  const [show, setShow] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const toggleModal = () => setShow(!show);
  const [uploadedImageURL, setUploadedImageURL] = useState("");
  const [decodedID, setDecodedID] = useState("");
  let navigate = useNavigate();

  //for spinner
  const [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ff3d47");

  //for edit mode
  const [editMode, setEditMode] = useState(true);
  const toggleEdit = () => setEditMode(!editMode);

  const editProfileIcon = {
    color: "#f0f2f5",
    backgroundColor: "transparent",
    transform: "scale(1)",
    marginLeft: "0.5rem",
    // width: "1rem",
    // height: "1rem",
  };

  const handleLogOut = () => {
    setUser({});
    localStorage.removeItem("usertoken");
  };

  const sleep = (ms) => {
    new Promise((resolve) => {
      console.log(`triggering timeout for 2sec`);
      setTimeout(resolve, ms);
    });
  };

  const getUserID = async () => {
    const token = localStorage.getItem("usertoken");
    const decoded = jwt_decode(token);
    setDecodedID(decoded.user._id);
  };

  useEffect(() => {
    getUserID();
  }, [decodedID]);

  useEffect(() => {
    console.log(loading);
    //for spinner
    if (uploadedImageURL !== '') {
      setLoading(false);
    }

    if (decodedID) {
      setUserInfo(decodedID);
    }
    showUserDetails();
  }, [uploadedImageURL, selectedFile, decodedID, loading]);

  const setUserInfo = async () => {
    await axios
      .get(`https://pawpal-backend.herokuapp.com/users/${decodedID}`)

      // .then((res) => console.log(res.data))
      .then((res) => {
        setUser({
          ...user,
          _id: decodedID,
          first_name: res.data.first_name,
          last_name: res.data.last_name,
          email: res.data.email,
          street: res.data.street,
          city: res.data.city,
          country: res.data.country,
          zip_code: res.data.zip_code,
          user_type: res.data.user_type,
          latitude: res.data.latitude,
          longitude: res.data.longitude,
          profile_pic: res.data.profile_pic,
          description: res.data.description,
        });
        // //for spinner
        // setLoading(false);

      })
      .then(() => {
        //for spinner
        // setLoading(false);
      })

      .catch((err) => console.log(err));
  };

  const showUserDetails = async () => {
    await console.log(user);
    //for spinner
    setLoading(false);
  };
  console.log(user);

  //for spinner 
  const handleToggleModal = () => {
    toggleModal();
  }

  if (loading) return <RiseLoader color={color} loading={loading} css={override} size={40} />
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
            loading={loading}
            setLoading={setLoading}
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
                  {/* <Avatar
                    src={user.profile_pic}
                    alt={`${user.first_name} avatar`}
                    sx={{ width: 55, height: 55 }}
                  >
                    <img
                      src={HumanAvatar}
                      alt="avatar"
                      style={{ width: "99%", height: "99%" }}
                    />
                  </Avatar> */}
                  <MKAvatar
                    top={-50}
                    zindex={2}
                    src={`${user.profile_pic}`}
                    alt={`${user.first_name}`}
                    shadow="xl"
                    sx={{ width: "12rem", height: "12rem" }}
                    style={{
                      borderStyle: "ridge",
                      border: "3px solid white",
                      backgroundColor: "white",
                      marginTop: "-6rem",
                    }}
                  >
                    <img
                      src={HumanAvatar}
                      alt="avatar"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </MKAvatar>
                  <MKButton
                    variant="text"
                    // onClick={toggleModal}
                    onClick={handleToggleModal}
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

              <Grid item xs={12} mt={4}>
                {/* ************************* User Full Name */}
                <MKTypography
                  variant="h1"
                  fontWeight="medium"
                  color="light"
                  textAlign="center"
                >
                  {/* {`${user.first_name !== undefined && user.first_name} ${user.last_name !== undefined && user.last_name}`} */}
                  {/* {`${user.first_name} ${user.last_name}`} */}
                  {user.first_name === undefined ? "" : `${user.first_name} ${user.last_name}`}
                </MKTypography>
              </Grid>
            </Grid>
          </MKBox>
          <MKBox
            display="flex"
            flex-direction="flex-end"
            width="100%"
            justifyContent="right"
            marginBottom="0rem"
          >
            {/* ************************** Edit Button (for inputs) */}
            <MKButton
              type="submit"
              variant="gradient"
              color="info"
              size="large"
              style={{
                padding: "10px 2px 10px 10px",
                minWidth: "7rem",
                minHeight: "3rem",
                border: "0px",
                marginRight: "3rem",
                marginTop: "2rem",
              }}
              onClick={toggleEdit}
            //onClick={handleToggleEdit}
            >
              EDIT
              <EditRoundedIcon style={editProfileIcon}></EditRoundedIcon>
            </MKButton>
          </MKBox>
          {/* ************************** User Details */}

          <MKBox>
            <ProfileInputsGrid editMode={editMode} />
          </MKBox>
        </Paper>
      </MKBox>
    </>
  );
};

export default ProfileForm;
