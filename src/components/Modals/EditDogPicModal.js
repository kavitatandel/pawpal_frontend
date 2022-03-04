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

import { editDogProfilePic } from '../../logic/DogFunctions'

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

  const handleFileUpload = async (e) => {
    e.preventDefault();
    //console.log("select file occured")
    await setSelectedFile(e.target.files[0]);

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log("Dog file upload submit")
    const uploadData = new FormData();
    uploadData.append("_id", dogid)
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
    toggleModal();
    //setDogPic(selectedFile);
  };

  // useEffect(() => { }, [show, uploadedImageURL, selectedFile]);

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
                    <input type="file" onChange={handleFileUpload} />
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

export default EditDogPicModal;
