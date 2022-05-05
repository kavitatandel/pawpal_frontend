import { useState, useEffect, useContext } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { UserContext } from "../../context/UserContext";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import Slide from "@mui/material/Slide";

// @mui icons
import CloseIcon from "@mui/icons-material/Close";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import swal from "sweetalert";
import "../../styles/swalButtonStyle.css";

const UploadDogPicModal = ({
  show,
  setShow,
  toggleModal,
  dogPic,
  setDogPic,
  setImageModal,
  imageModal,
}) => {
  const [user, setUser] = useContext(UserContext);

  //******************Upload Single File************ */
  const API_URL = "https://pawpal-backend.herokuapp.com";

  //   const [desc, setDesc] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [uploadedImageURL, setUploadedImageURL] = useState("");

  //additional state to hold back show image on parent page
  const [selectedDogImage, setSelectedDogImage] = useState("");

  const handleFileUpload = (e) => {
    e.preventDefault();
    //const uploadData = new FormData();
    //uploadData.append("file", e.target.files[0], "file");
    //cloudinaryUpload(uploadData)
    setSelectedFile(e.target.files[0]);
    console.log(e.target.files[0]);
    //console.log(`User ID: ${user._id} , User FirstName: ${user.first_name} `);

    //added for image
    // setImageModal(URL.createObjectURL(e.target.files[0]));
    // imageModal = URL.createObjectURL(e.target.files[0]);
    setSelectedDogImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // toggleModal();
    setDogPic(selectedFile);

    // await swal({
    //   title: "Photo Upload",
    //   text: "You successfully uploaded photo!",
    //   icon: "success",
    //   button: "OK!"
    // });

    // setTimeout(() => { console.log("World!"); }, 500);

    //moved toggleModal here
    await setImageModal(selectedDogImage);
    await console.log("save changes");
    await console.log(setImageModal);
    await console.log(imageModal);
    await toggleModal();

    swal({
      title: "Photo Upload",
      text: "You successfully uploaded photo!",
      icon: "success",
      button: "OK!",
      buttonsStyling: false,
      className: {
        confirmButton: "swal-button", //insert class here
      },
    });
  };

  useEffect(() => {}, [show, uploadedImageURL, selectedFile]);

  //change color of close icon
  const styledCloseIcon = {
    transform: "scale(1.5)",
    color: "#ff9a85",
    marginRight: "1.2rem",
    marginLeft: "0.2rem",
    verticalAlign: "middle",
    width: "3%",
    height: "3%",
  };

  const handleCloseIcon = (e) => {
    e.preventDefault();
    //clear file unput
    const inputFile = document.getElementById("inputFile");
    inputFile.innerHTML = "";
    inputFile.value = "";
  };

  return (
    <MKBox component="section" py={6}>
      <Container>
        <Modal
          open={show}
          onClose={toggleModal}
          sx={{ display: "grid", placeItems: "center" }}
        >
          <Slide direction="down" in={show} timeout={500}>
            <MKBox
              position="relative"
              width="80%"
              maxWidth="550px"
              height="auto"
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              borderRadius="2rem"
              bgColor="white"
              shadow="xl"
              p={3}
              my={2}
            >
              {/* Pink Box at top */}
              <MKBox
                variant="gradient"
                bgColor="info"
                borderRadius="25px"
                coloredShadow="info"
                width="60%"
                height="5rem"
                mx="3rem"
                mt="-2.5rem"
                mb="2rem"
                // pt="0.75rem"
                pr="1rem"
                pl="1rem"
                // pb="0.75rem"
                textalign="center"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Request Status Heading */}
                <MKTypography variant="h3" fontWeight="regular" color="white">
                  Upload Photo
                </MKTypography>
              </MKBox>

              {!loading ? (
                <MKBox p={2}>
                  <MKTypography variant="h6">Uploading...</MKTypography>
                </MKBox>
              ) : (
                <MKBox p={2}>
                  <form onSubmit={handleSubmit}>
                    <MKBox display="flex" justifyContent="center" pb={2} pt={3}>
                      <input
                        style={{ width: "70%", fontSize: "1.3rem" }}
                        id="inputFile"
                        type="file"
                        onChange={(e) => handleFileUpload(e)}
                      />
                      <CloseIcon
                        fontSize="small"
                        sx={{ cursor: "pointer" }}
                        style={styledCloseIcon}
                        onClick={handleCloseIcon}
                      />
                    </MKBox>
                    <MKBox
                      display="flex"
                      justifyContent="center"
                      p={1.5}
                      mt={4}
                    >
                      <MKButton
                        variant="gradient"
                        onClick={toggleModal}
                        color="info"
                        size="large"
                        style={{
                          width: "8rem",
                          minWidth: "120px",
                          minHeight: "30px",
                        }}
                      >
                        close
                      </MKButton>
                      <MKButton
                        variant="gradient"
                        type="submit"
                        size="large"
                        color="info"
                        style={{
                          marginLeft: "1.5rem",
                          width: "8rem",
                          minWidth: "120px",
                          minHeight: "30px",
                        }}
                      >
                        save
                      </MKButton>
                    </MKBox>
                  </form>
                </MKBox>
              )}
            </MKBox>
          </Slide>
        </Modal>
      </Container>
    </MKBox>
  );
};

export default UploadDogPicModal;
