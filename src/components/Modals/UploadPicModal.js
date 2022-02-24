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

const UploadPicModal = ({ show, setShow, toggleModal }) => {
  const [user, setUser] = useContext(UserContext);
  //   const [show, setShow] = useState(false);
  //   const toggleModal = () => setShow(!show);

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
    console.log(`User ID: ${user._id} , User FirstName: ${user.first_name} `);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const uploadData = new FormData();

    uploadData.append("file", selectedFile, "file");

    console.log(user._id);
    await axios
      .post(API_URL + `/users/${user._id}`, uploadData)
      .then((res) => {
        console.log("after uploading file");
        console.log(res.data.secure_url);
        console.log(res.data);
        setUploadedImageURL(res.data.secure_url);
      })
      .then(() => {
        if (uploadedImageURL) {
          setUser({ ...user, profile_pic: uploadedImageURL });
        }
      })
      .then(() => {
        if (uploadedImageURL !== "undefined") {
          console.log(`Uploaded ${uploadedImageURL}!!`);
          setLoading(false);
        }
      })
      .then(() => {
        toggleModal();
        setLoading(true);
      })

      .catch((err) => console.log(err));
  };

  // // //get profile data
  // const getProfil = async () => {
  //   if (show) {
  //     setId(user._id);
  //     console.log(user);
  //     // if (uploadedImageURL === "") {
  //     //   setUploadedImageURL(user.profile_pic);
  //     // }
  //     // console.log(`Check User State: ${user}`);
  //   }

  //   // setUser({ ...user, profile_pic: setUploadedImageURL });
  // };

  // const handleSubmitUpload = (e) => {
  //   e.preventDefault();
  //   setUser({ ...user, profile_pic: uploadedImageURL });
  // };

  useEffect(() => {
    // getProfil();
  }, [show, uploadedImageURL, selectedFile]);

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
                <MKTypography variant="h5">Upload Profile Image</MKTypography>
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

export default UploadPicModal;
