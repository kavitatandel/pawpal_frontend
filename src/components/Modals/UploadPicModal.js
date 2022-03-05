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
import UserInfo from "pages/UserInfoKavita";

//for spinner
import RiseLoader from "react-spinners/RiseLoader";
import { override } from "styles/CustomStyles";


const UploadPicModal = ({
  show,
  setShow,
  toggleModal,
  uploadedImageURL,
  setUploadedImageURL,
  selectedFile,
  setSelectedFile,
  loading,
  setLoading,
}) => {
  const [user, setUser] = useContext(UserContext);

  //******************Upload Single File************ */
  const API_URL = "http://localhost:5000";

  // const [selectedFile, setSelectedFile] = useState(null);
  const [loadingImage, setLoadingImage] = useState(true);
  let [color, setColor] = useState("#ff3d47");

  const handleFileUpload = async (e) => {
    await setSelectedFile(e.target.files[0]);
    await console.log(e.target.files[0]);
  };

  // //get profile data
  const getProfile = async () => {
    await console.log(
      `User ID: ${user._id} , User FirstName: ${user.first_name} `
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //for spinner on modal
    setLoadingImage(false)

    const uploadData = new FormData();
    //const uploadData = new FormData();
    uploadData.append("file", selectedFile, "file");

    await axios
      .post(API_URL + `/users/${user._id}`, uploadData)
      .then((res) => {
        console.log("File Uploaded:");
        console.log(res.data.secure_url);
        // console.log(res.data);
        setUploadedImageURL(res.data.secure_url);
      })
      .then(() => {
        if (user.profile_pic !== uploadedImageURL) {
          console.log(uploadedImageURL);
          setUser({ ...user, profile_pic: uploadedImageURL });
        }
      })
      // .then(() => toggleModal()) //commented for spinner
      .then(() => {
        //set loading image to true again
        setLoadingImage(true);

        toggleModal()
        setLoading(true);
        loading = true;
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProfile();
  }, [uploadedImageURL, selectedFile]);

  console.log(user);

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
                p={1}

              >
                {!loadingImage ? (
                  <MKBox
                    display="flex"
                    justifyContent="center"
                    alginItems="center"
                    width="500px"
                    height="200px"
                    margin="auto 0"
                    flexDirection="column"
                  >
                    <RiseLoader color={color} loading={true} css={override} size={50} />
                  </MKBox>
                ) : ""}
                {/* <MKTypography variant="h5">Upload Profile Image</MKTypography> */}
              </MKBox>
              {/* <Divider sx={{ my: 0 }} /> */}
              {!loadingImage ? (
                <></>
                // <MKBox p={2}>
                //   <MKTypography variant="h6">Uploading...</MKTypography>
                // </MKBox>
                // <RiseLoader color={color} loading={loadingImage} css={override} size={40} />
              ) : (
                <MKBox p={2}>
                  <form onSubmit={handleSubmit}>
                    <MKBox
                      display="flex"
                      justifyContent="center"
                      pb={2}
                    ><MKTypography variant="h6" style={{}}>Upload Profile Pic</MKTypography>
                    </MKBox>
                    <input type="file" onChange={(e) => handleFileUpload(e)} />
                    <CloseIcon fontSize="medium" sx={{ cursor: "pointer" }} />
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
      </Container >
    </MKBox >
  );
};

export default UploadPicModal;
