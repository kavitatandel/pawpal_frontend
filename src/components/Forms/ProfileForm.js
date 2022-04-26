import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import jwt_decode from "jwt-decode";
import { spinnerContainer } from "../../styles/CustomStyles";
import { Grid } from "@mui/material";
import "../../styles/layout.css";
import "../../styles/ProfileStyle.css";
import pinkBlob from "../../assets/landing-page/Blob-1.png";

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

import "../../styles/buttonStyles.css";

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
    transform: "scale(1.5)",
    marginRight: "1rem",
    marginTop: "-1rem",
  };

  const editProfileIconSmall = {
    color: "#fff",
    backgroundColor: "transparent",
    transform: "scale(1.5)",
    marginRight: "0.8rem",
    marginTop: "-0.3rem",
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
    if (uploadedImageURL !== "") {
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
  };

  if (loading)
    return (
      <div style={spinnerContainer}>
        <RiseLoader color={color} loading={loading} css={override} size={40} />
      </div>
    );
  return (
    <>
      <div id="mainPageContainer">
        <div className="avatarContainer">
          <MKAvatar
            id="avatar"
            src={`${user.profile_pic}`}
            alt={`${user.first_name}`}
            shadow="xl"
            style={{
              borderStyle: "ridge",
              border: "4px solid white",
              backgroundColor: "white",
            }}
          >
            <img
              src={HumanAvatar}
              alt="avatar"
              style={{ width: "100%", height: "100%" }}
            />
          </MKAvatar>
        </div>
        <div className="cardTopOverlay">
          <div className="topSectionContainer">
            <div className="editProfilePicButtonContainer">
              <MKButton
                variant="text"
                onClick={handleToggleModal}
                style={{
                  width: "150px",
                  height: "2rem",
                  marginLeft: -12,
                  fontSize: "0.8rem",
                  letterSpacing: "0.1rem",
                }}
              >
                <EditRoundedIcon style={editProfileIconSmall}></EditRoundedIcon>
                EDIT PIC
              </MKButton>
            </div>

            <div className="userNameContainer">
              {/* ************************* User Full Name */}
              <MKTypography
                variant="h1"
                fontWeight="medium"
                color="light"
                textAlign="center"
              >
                {user.first_name === undefined
                  ? ""
                  : `${user.first_name} ${user.last_name}`}
              </MKTypography>
            </div>

            <div className="editAllInputsButtonContainer">
              {/* ************************** Edit Button (for inputs) */}
              <button
                id="mainEditButton"
                className="glow-on-hover"
                type="submit"
                onClick={toggleEdit}
              >
                <EditRoundedIcon style={editProfileIcon}></EditRoundedIcon>
                EDIT
              </button>
            </div>
          </div>

          <div className="inputsGridSection">
            <ProfileInputsGrid editMode={editMode} />
          </div>
        </div>

        <Card
          id="mainCard"
          style={{
            background: "rgba( 255, 255, 255, 0.8 )",
            borderRadius: "25px",
            boxShadow: "0 8px 40px 0 rgba(255, 61, 46, 0.5)",
            margin: "0 !important",
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
        </Card>
      </div>
    </>
  );
};

export default ProfileForm;
