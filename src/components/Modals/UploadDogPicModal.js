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

const UploadDogPicModal = ({
  show,
  setShow,
  toggleModal,
  dogPic,
  setDogPic,
}) => {
  const [user, setUser] = useContext(UserContext);

  //******************Upload Single File************ */
  const API_URL = "http://localhost:5000";

  //   const [desc, setDesc] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [uploadedImageURL, setUploadedImageURL] = useState("");

  const handleFileUpload = (e) => {
    //const uploadData = new FormData();
    //uploadData.append("file", e.target.files[0], "file");
    //cloudinaryUpload(uploadData)
    setSelectedFile(e.target.files[0]);
    console.log(e.target.files[0]);
    //console.log(`User ID: ${user._id} , User FirstName: ${user.first_name} `);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toggleModal();
    setDogPic(selectedFile);
  };

  useEffect(() => {}, [show, uploadedImageURL, selectedFile]);

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
              width="500px"
              display="flex"
              flexDirection="column"
              borderRadius="xl"
              bgColor="white"
              shadow="xl"
            >
              <MKBox
                display="flex"
                alginItems="center"
                justifyContent="space-between"
                p={2}
              >
                <MKTypography variant="h5">Upload Dog Image</MKTypography>
              </MKBox>
              <Divider sx={{ my: 0 }} />
              {!loading ? (
                <MKBox p={2}>
                  <MKTypography variant="h6">Uploading...</MKTypography>
                </MKBox>
              ) : (
                <MKBox p={2}>
                  <form onSubmit={handleSubmit}>
                    {/* <div>
                    <input type="file" onChange={(e) => handleFileUpload(e)} />
                  </div> */}
                    <input type="file" onChange={(e) => handleFileUpload(e)} />
                    <CloseIcon
                      fontSize="medium"
                      sx={{ cursor: "pointer" }}
                      // onClick={() => setSelectedFile("")}
                    />
                    <Divider sx={{ my: 0 }} />
                    <MKBox
                      display="flex"
                      justifyContent="space-between"
                      p={1.5}
                    >
                      <MKButton
                        variant="gradient"
                        color="dark"
                        onClick={toggleModal}
                      >
                        close
                      </MKButton>
                      <MKButton variant="gradient" color="info" type="submit">
                        save changes
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
