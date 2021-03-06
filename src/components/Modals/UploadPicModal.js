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
import swal from "sweetalert";

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
  const API_URL = "https://pawpal-backend.herokuapp.com";

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
    setLoadingImage(false);

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

        toggleModal();
        setLoading(true);
        loading = true;

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
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProfile();
  }, [uploadedImageURL, selectedFile]);

  //console.log(user);

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
                borderRadius="lg"
                coloredShadow="info"
                width="60%"
                // mx="3rem"
                // mt="-4rem"
                // p="2rem 2rem"
                //by kavita
                mx="3rem"
                mt="-2.5rem"
                pt="0.75rem"
                pr="1rem"
                pl="1rem"
                pb="0.75rem"
                textalign="center"
              >
                {/* Request Status Heading */}
                <MKTypography variant="h3" fontWeight="regular" color="white">
                  Upload Photo
                </MKTypography>
              </MKBox>
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
                    <RiseLoader
                      color={color}
                      loading={true}
                      css={override}
                      size={50}
                    />
                  </MKBox>
                ) : (
                  ""
                )}
                {/* <MKTypography variant="h5">Upload Profile Image</MKTypography> */}
              </MKBox>
              {/* <Divider sx={{ my: 0 }} /> */}
              {!loadingImage ? (
                <></>
              ) : (
                // <MKBox p={2}>
                //   <MKTypography variant="h6">Uploading...</MKTypography>
                // </MKBox>
                // <RiseLoader color={color} loading={loadingImage} css={override} size={40} />
                <MKBox p={2}>
                  <form onSubmit={handleSubmit}>
                    {/* <MKBox
                      display="flex"
                      justifyContent="center"
                      pb={2}
                    ><MKTypography variant="h6" style={{}}>Upload Profile Pic</MKTypography>
                    </MKBox> */}
                    <MKBox display="flex" justifyContent="center" pb={2} pt={3}>
                      {/* <label for="inputFile" Style={{
                        border: "1px solid #ccc",
                        display: "inline-block",
                        transform: "scale(1.5)",
                        color: "#ff9a85",
                        marginRight: "1.2rem",
                        marginLeft: "0.2rem",
                        verticalAlign: "middle",
                        // padding: "6px 12px",
                        cursor: "pointer",
                      }}>                      
                        Choose File
                      </label> */}
                      <input
                        style={{ width: "70%" }}
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
                    {/* <Divider sx={{ my: 0 }} /> */}
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
                          // width: "8rem", //commented by kavita
                          width: "7rem",
                          minWidth: "100px",
                          minHeight: "30px",
                        }}
                      >
                        close
                      </MKButton>
                      <MKButton
                        variant="gradient"
                        type="submit"
                        size="large"
                        variant="gradient"
                        color="info"
                        style={{
                          marginLeft: "1.5rem",
                          width: "8rem",
                          minWidth: "180px",
                          minHeight: "30px",
                        }}
                      >
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
