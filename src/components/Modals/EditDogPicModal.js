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

import { editDogProfilePic } from "../../logic/DogFunctions";

//for spinner
import RiseLoader from "react-spinners/RiseLoader";
import { override } from "styles/CustomStyles";
import swal from "sweetalert";

const EditDogPicModal = ({
  show,
  setShow,
  toggleModal,
  dogid,
  uploadedImageURL,
  setUploadedImageURL,
}) => {
  const [user, setUser] = useContext(UserContext);

  //   const [desc, setDesc] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(true);
  //const [uploadedImageURL, setUploadedImageURL] = useState("");

  // const [selectedFile, setSelectedFile] = useState(null);
  const [loadingImage, setLoadingImage] = useState(true);
  let [color, setColor] = useState("#ff3d47");

  const handleFileUpload = async (e) => {
    e.preventDefault();
    //console.log("select file occured")
    await setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //for spinner on modal
    setLoadingImage(false);

    //console.log("Dog file upload submit")
    const uploadData = new FormData();
    uploadData.append("_id", dogid);
    uploadData.append("file", selectedFile, "file");
    await editDogProfilePic(uploadData)
      .then((res) => {
        // console.log("File Uploaded:");
        // console.log(res.secure_url);
        // console.log(res.data);
        setUploadedImageURL(res.secure_url);
        uploadedImageURL = res.secure_url;
      })
      .catch((err) => console.log(err));

    //for spinner
    setLoadingImage(true);

    toggleModal();
    //setDogPic(selectedFile);
    swal({
      title: "Photo Upload",
      text: "You successfully uploaded photo!",
      icon: "success",
      button: "OK!",
      buttonsStyling: false,
      customClass: {
        confirmButton: "swal-button", //insert class here
      },
    });
  };

  //change color of close icon
  const styledCloseIcon = {
    transform: "scale(1.5)",
    color: "#ff9a85",
    marginRight: "1.2rem",
    marginLeft: "0.2rem",
    verticalAlign: "middle",
    width: "4%",
    height: "4%",
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
                borderRadius="lg"
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
                textAlign="center"
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
              {!loadingImage ? (
                <MKBox
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="500px"
                  height="200px"
                  margin="auto 0"
                  flexDirection="column"
                >
                  <RiseLoader
                    color={color}
                    loading={true}
                    css={override}
                    size={50}
                  />
                </MKBox>
              ) : (
                //    : ""}
                //   {/* <MKTypography variant="h5">Upload Dog Image</MKTypography> */}
                // </MKBox>
                // <Divider sx={{ my: 0 }} />
                // {!loading ? (
                //   <></>
                //   // <MKBox p={2}>
                //   //   <MKTypography variant="h6">Uploading...</MKTypography>
                //   // </MKBox>
                // )

                <MKBox p={2}>
                  <form onSubmit={handleSubmit}>
                    <MKBox display="flex" justifyContent="center" pb={2} pt={3}>
                      <input
                        type="file"
                        style={{ width: "70%", fontSize: "1.3rem" }}
                        id="inputFile"
                        onChange={handleFileUpload}
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

export default EditDogPicModal;
