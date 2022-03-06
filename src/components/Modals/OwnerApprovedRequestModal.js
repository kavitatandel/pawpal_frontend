import * as React from 'react';
import { useState, useContext, useEffect } from "react";
import axios from 'axios';
import { UserContext } from "../../context/UserContext";
import { UpdatePlayDateRequest } from "../../logic/PlayDateFunctions";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import Slide from "@mui/material/Slide";
//added for date and time icons
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import TodayIcon from "@mui/icons-material/Today";
import NotListedLocationIcon from "@mui/icons-material/NotListedLocation";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import ApprovalIcon from '@mui/icons-material/Approval';
import PersonIcon from '@mui/icons-material/Person';

//for radio button
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";


// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";

//for date picker
import TextField from '@mui/material/TextField';
import MKAvatar from "components/MKAvatar";
import DogAvatar from "../../assets/images/avatars/dog-av-grad.png";
import HumanAvatar from "../../assets/images/avatars/human-av-grad.png";

const styledIcon = {
    transform: "scale(1.5)",
    color: "#ff9a85",
    marginRight: "1.2rem",
    marginLeft: "0.2rem",
    verticalAlign: "middle",
};

function OwnerApprovedRequestModal({
    show, setShow, toggleModal,
    selectedDogRequest, setSelectedDogRequest }) {

    //console.log(selectedDogRequest);

    const handleCancel = () => {
        toggleModal();
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
                            maxWidth="700px"
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
                                mx="3rem"
                                mt="-2.5rem"
                                pt="0.75rem"
                                pr="1rem" pl="1rem"
                                pb="0.75rem"
                                textAlign="center"
                            >
                                {/* Request Status Heading */}
                                <MKTypography variant="h3" fontWeight="regular" color="white">
                                    Approved Request
                                </MKTypography>
                            </MKBox>
                            <MKBox pt="1rem" pl="3rem" pr="3rem" pb="0rem">
                                <Grid container>
                                    <Grid item xs={12} md={6}>
                                        <MKBox
                                            className="Avatar"
                                            sx={{
                                                display: "flex",
                                                justifyContent: { xs: "flex-end" },
                                                alignItems: "center",
                                                mb: "2rem", //commented by kavita
                                            }}
                                        >
                                            <MKAvatar
                                                zIndex={2}
                                                src={`${selectedDogRequest.DogsRequests.profile_photo}`}
                                                alt={`${selectedDogRequest.DogsRequests.name} {selectedDogRequest.DogLovers.last_name}`}
                                                shadow="xl"
                                                // sx={{ width: "10rem", height: "10rem" }} //commented by kavita
                                                sx={{ width: "6rem", height: "6rem" }}
                                                style={{
                                                    border: "0.3rem solid #ff9a85",
                                                    background:
                                                        "linear-gradient(145deg, #FFFFFF, #C1C3C6)",
                                                    borderRadius: "100%",
                                                    boxShadow:
                                                        "14.11px 14.11px 24px #D9DADE, -14.11px -14.11px 24px #FFFFFF",
                                                }}
                                            >
                                                <img
                                                    src={DogAvatar}
                                                    alt="avatar"
                                                    style={{ width: "100%", height: "100%" }}
                                                />
                                            </MKAvatar>
                                        </MKBox>
                                    </Grid>

                                    {/* *********** Dog requester Name */}
                                    <Grid

                                        item
                                        xs={12}
                                        md={6}
                                        display="flex"
                                        sx={{ justifyContent: { xs: "flex-start" } }}
                                    >
                                        <MKBox
                                            display="flex"
                                            flexDirection="column"
                                            alignItems="flexStart"
                                            justifyContent="center"
                                            mb="2rem" ml="1rem"
                                        >
                                            <MKTypography
                                                // variant="h2" //commented by kavita
                                                variant="h5"
                                                fontWeight="regular"
                                                color="dark"
                                            >
                                                {selectedDogRequest.DogsRequests.name}
                                            </MKTypography>

                                            <MKTypography
                                                // variant="h3" //commented by kavita
                                                variant="h6"
                                                fontWeight="regular"
                                                color="dark"
                                            >
                                                {selectedDogRequest.DogsRequests.breed}
                                            </MKTypography>
                                        </MKBox>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <MKBox
                                            display="flex"

                                            sx={{
                                                m: "0.25rem 1rem 0rem 1rem",
                                                justifyContent: { lg: "flex-start" },
                                            }}
                                            alignItems="flex-start"
                                        >
                                            {/* <MKBox> */}
                                            <MKTypography variant="h5"
                                                fontWeight="regular"
                                                color="info"
                                                fontSize="0.75rem">
                                                Requester Name:
                                            </MKTypography>
                                        </MKBox>
                                        <MKBox
                                            display="flex"
                                            sx={{
                                                m: "0.25rem 1rem 1rem 1rem",
                                                justifyContent: { lg: "flex-start" },
                                            }}
                                            alignItems="flex-start"
                                        >
                                            <MKTypography
                                                variant="h5"
                                                fontWeight="regular"
                                                color="dark"
                                                fontSize="1rem">
                                                <PersonIcon style={styledIcon} />
                                                {selectedDogRequest.DogLovers.first_name} {selectedDogRequest.DogLovers.last_name}
                                            </MKTypography>
                                            {/* </MKBox> */}
                                        </MKBox>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <MKBox
                                            display="flex"

                                            sx={{
                                                m: "0.25rem 1rem 0rem 1rem",
                                                justifyContent: { lg: "flex-start" },
                                            }}
                                            alignItems="flex-start"
                                        >
                                            {/* <MKBox> */}
                                            <MKTypography variant="h5"
                                                fontWeight="regular"
                                                color="info"
                                                fontSize="0.75rem">
                                                Requester Address:
                                            </MKTypography>
                                        </MKBox>
                                        <MKBox
                                            display="flex"
                                            sx={{
                                                m: "0.25rem 1rem 1rem 1rem",
                                                justifyContent: { lg: "flex-start" },
                                            }}
                                            alignItems="flex-start"
                                        >
                                            <MKTypography
                                                variant="h5"
                                                fontWeight="regular"
                                                color="dark"
                                                fontSize="1rem">
                                                <NotListedLocationIcon style={styledIcon} />
                                                {selectedDogRequest.DogLovers.street}  {selectedDogRequest.DogLovers.zip_code},  {selectedDogRequest.DogLovers.city},  {selectedDogRequest.DogLovers.country}
                                            </MKTypography>
                                            {/* </MKBox> */}
                                        </MKBox>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <MKBox display="flex"
                                            // sx={{ m: "0.3rem 1rem 1rem 1rem" }}
                                            sx={{ m: "0.1rem 1rem 1rem 1rem" }}
                                            alignItems="flex-start"
                                            justifyContent="flex-start">
                                            <MKBox pr={4}>
                                                <MKTypography variant="h5"
                                                    fontWeight="regular"
                                                    color="info"
                                                    // fontSize="1rem" //commented by kavita
                                                    fontSize="0.75rem">
                                                    Start Date:
                                                </MKTypography>
                                                <MKTypography>
                                                    <TodayIcon style={styledIcon} />
                                                    {new Date(selectedDogRequest.start_date).toISOString().replace(/T.*/, '').split('-').reverse().join('.')}
                                                    {/* {new Date(selectedDogRequest.start_date).toLocaleDateString()} */}
                                                </MKTypography>
                                            </MKBox>

                                            <MKBox pr={4}>
                                                <MKTypography variant="h5"
                                                    fontWeight="regular"
                                                    color="info"
                                                    // fontSize="1rem" //commented by kavita
                                                    fontSize="0.75rem">
                                                    Start Time:
                                                </MKTypography>
                                                <MKTypography>
                                                    <AccessTimeFilledIcon style={styledIcon} />
                                                    {/* {selectedDogRequest.start_time} */}
                                                    {selectedDogRequest.start_time.slice(-11, -6)} {selectedDogRequest.start_time.slice(-3)}
                                                </MKTypography>
                                            </MKBox>
                                            <MKBox pr={4}>
                                                <MKTypography variant="h5"
                                                    fontWeight="regular"
                                                    color="info"
                                                    // fontSize="1rem" //commented by kavita
                                                    fontSize="0.75rem">
                                                    End Time:
                                                </MKTypography>
                                                <MKTypography variant="h5"
                                                    fontWeight="regular"
                                                    color="dark"
                                                    // fontSize="1.5rem"//commented by kavita
                                                    fontSize="1rem">
                                                    <AccessTimeFilledIcon style={styledIcon} />
                                                    {/* {selectedDogRequest.end_time} */}
                                                    {selectedDogRequest.end_time.slice(-11, -6)} {selectedDogRequest.end_time.slice(-3)}
                                                </MKTypography>
                                            </MKBox>
                                        </MKBox>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <MKBox display="flex"
                                            // sx={{ m: "0.3rem 1rem 1rem 1rem" }}
                                            sx={{ m: "0.1rem 1rem 1rem 1rem" }}
                                            alignItems="flex-start"
                                            justifyContent="flex-start">
                                            <MKBox pr={7}>
                                                <MKTypography
                                                    variant="h5"
                                                    fontWeight="regular"
                                                    color="info"
                                                    fontSize="0.75rem">
                                                    Meeting Location:
                                                </MKTypography>

                                                <MKTypography fontWeight="regular"
                                                    color="dark"
                                                    // fontSize="1.5rem"//commented by kavita
                                                    fontSize="1rem">
                                                    <AccessTimeFilledIcon style={styledIcon} />
                                                    {selectedDogRequest.meeting_location}

                                                </MKTypography>
                                            </MKBox>

                                            {/* </Grid>
                                    <Grid item xs={12}> */}

                                            <MKBox>
                                                <MKTypography
                                                    variant="h5"
                                                    fontWeight="regular"
                                                    color="info"
                                                    fontSize="0.75rem">
                                                    Status:
                                                </MKTypography>
                                                <MKTypography fontWeight="regular"
                                                    color="dark"
                                                    // fontSize="1.5rem"//commented by kavita
                                                    fontSize="1rem">
                                                    <ApprovalIcon style={styledIcon} />
                                                    {selectedDogRequest.status}
                                                </MKTypography>
                                            </MKBox>
                                        </MKBox>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <MKBox
                                            display="flex"
                                            justifyContent="center"
                                            // p={1.5}
                                            // my="2rem" //commented by kavita
                                            my="1rem"
                                            sx={{ p: "1 1.5 0.5 1.5" }}
                                        >
                                            <MKButton
                                                size="large"
                                                variant="gradient"
                                                color="info"
                                                style={{
                                                    // width: "8rem", //commented by kavita
                                                    width: "7rem",
                                                    minWidth: "100px",
                                                    minHeight: "50px",
                                                }}
                                                // onClick={toggleModal}
                                                onClick={handleCancel}
                                            >
                                                Close
                                            </MKButton>

                                        </MKBox>
                                    </Grid>
                                </Grid>
                            </MKBox>


                        </MKBox>
                    </Slide >
                </Modal >
            </Container >
        </MKBox >
    );
}

export default OwnerApprovedRequestModal;


// {/* *************************old code************** */}
// <MKBox p={2}>
// <form >
//     <MKBox pt={1} pb={2}>
//         <MKBox
//             display="flex"
//             alginItems="center"
//             justifyContent="center"

//         >
//             <MKTypography variant="h5">Approve / Reject Request</MKTypography>

//         </MKBox>
//     </MKBox>
//     <MKBox
//         display="flex"
//         alginItems="center"
//         justifyContent="flex-start"
//         pb={1}

//     >
//         <MKTypography pr={1} style={{ fontWeight: "200" }}>
//             Playdate Requester:
//         </MKTypography>
//         <MKTypography>

//             {selectedDogRequest.DogLovers.first_name} {selectedDogRequest.DogLovers.last_name}
//         </MKTypography>
//     </MKBox>
//     <MKBox
//         display="flex"
//         alginItems="center"
//         justifyContent="flex-start"
//         pb={1}

//     >
//         <MKBox>
//             <MKTypography pr={1}>
//                 Playdate Requester Address:
//             </MKTypography>
//             <MKTypography>
//                 {selectedDogRequest.DogLovers.street}  {selectedDogRequest.DogLovers.zip_code},  {selectedDogRequest.DogLovers.city},  {selectedDogRequest.DogLovers.country}
//             </MKTypography>
//         </MKBox>

//     </MKBox>
//     <MKBox display="flex"
//         alginItems="center"
//         justifyContent="space-around"
//         pb={1}>
//         <MKBox>
//             <MKTypography>
//                 Start Date:
//             </MKTypography>
//             <MKTypography>
//                 {new Date(selectedDogRequest.start_date).toISOString().replace(/T.*/, '').split('-').reverse().join('.')}
//                 {/* {new Date(selectedDogRequest.start_date).toLocaleDateString()} */}
//             </MKTypography>
//         </MKBox>

//         <MKBox pr={1}>
//             <MKTypography>
//                 Start Time:
//             </MKTypography>
//             <MKTypography>
//                 {/* {selectedDogRequest.start_time} */}
//                 {selectedDogRequest.start_time.slice(-11, -6)} {selectedDogRequest.start_time.slice(-3)}
//             </MKTypography>
//         </MKBox>
//         <MKBox>
//             <MKTypography>
//                 End Time:
//             </MKTypography>
//             <MKTypography>
//                 {/* {selectedDogRequest.end_time} */}
//                 {selectedDogRequest.end_time.slice(-11, -6)} {selectedDogRequest.end_time.slice(-3)}
//             </MKTypography>
//         </MKBox>
//     </MKBox>
//     <MKBox
//         display="flex"
//         alginItems="center"
//         justifyContent="flex-start"
//         pb={1}

//     >
//         <MKTypography
//             sx={{ fontWeight: 'light' }}
//             pr={1}>
//             Meeting Location:
//         </MKTypography>
//         <MKTypography>
//             {selectedDogRequest.meeting_location}

//         </MKTypography>
//     </MKBox>
//     <MKBox
//         display="flex"
//         alginItems="center"
//         justifyContent="flex-start"
//         pb={1}
//         sx={{ fontWeight: 'light' }}
//     >
//         <MKTypography
//             pr={1}
//             sx={{ fontWeight: 'light' }}>
//             Requester Message:
//         </MKTypography>
//         <MKTypography>
//             {selectedDogRequest.dl_message === '' ? 'No message from requester.' : selectedDogRequest.dl_message}


//         </MKTypography>
//     </MKBox>
//     <MKBox
//         mt={1}
//         justifyContent="flex-start"
//         display="flex"
//         mb={1}
//         ml={0.5}
//         textAlign="left"
//         width="100%"
//     >
//         <MKTypography
//             pr={1}
//             sx={{ fontWeight: 'light' }}>
//             Status:
//         </MKTypography>
//         <MKTypography>
//             {selectedDogRequest.status}
//         </MKTypography>
//     </MKBox>


//     <MKBox
//         display="flex"
//         justifyContent="space-between"
//         p={1.5}
//     >
//         <MKButton
//             size="small"
//             variant="gradient"
//             color="info"
//             style={{
//                 marginLeft: "1.5rem",
//                 width: "8rem",
//                 minWidth: "120px",
//             }}
//             // onClick={toggleModal}
//             onClick={handleCancel}
//         >
//             Close
//         </MKButton>

//     </MKBox>
// </form>
// </MKBox>
